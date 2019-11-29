import con from './config'

// 浏览器信息
class CI {
  constructor() {
    // this.size = this._size();
    // this.network = this._network();
    // this.language = this._language();
    // this.timezone = this._timezone();
    // this.ua = this._ua();
    this.os = this._os()
    this.browser = this._browser()
    this.engine = this._engine()
    this._lbs()
      .then((result) => {
        // 返回结果示例：
        // {latitude: 30.318030999999998, longitude: 120.05561639999999}
        // 一般小数点后只取六位，所以用以下代码搞定
        const queryData = {
          longtitude: String(result.longitude).match(/\d+\.\d{0,6}/)[0],
          latitude: String(result.latitude).match(/\d+\.\d{0,6}/)[0],
          channelType: '00'
        }
        this.lbs = queryData
      })
      .catch(() => {
        this.lbs = { err: `不支持当前地理位置信息获取` }
      })
  }

  _size() {
    return con.scr.width + 'x' + con.scr.height
  }
  // 网络类型
  _network() {
    return con.nav.connection && con.nav.connection.type
      ? con.nav.connection.type
      : '-'
  }
  // 语言
  _language() {
    return con.nav.language || ''
  }
  // 时区
  _timezone() {
    return new Date().getTimezoneOffset() / 60 || ''
  }
  _ua() {
    return encodeURIComponent(con.ua)
  }
  _os() {
    const o = con.uaOutput.os
    return encodeURIComponent(o.name + '_' + o.version.original)
  }
  _browser() {
    const b = con.uaOutput.browser
    return b.name + '_' + b.version.original
  }
  _engine() {
    const e = con.uaOutput.engine
    return e.name + '_' + e.version.original
  }
  // 地理位置信息
  _lbs() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude
            const data = {
              latitude,
              longitude
            }
            resolve(data)
          },
          function() {
            reject(arguments)
          }
        )
      } else {
        reject(new Error('你的浏览器不支持当前地理位置信息获取'))
      }
    })
  }
}

export default new CI()
