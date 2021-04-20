import bp from './main'

const buryingPoint = bp({
  per: true,
  jsErr: true,
  appId: 'yangpan',
  appName: '杨盼',
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/api/bp'
      : 'http://43.129.75.108:3001/api/bp',
  sendTimeGap: 4000,
  compress: process.env.NODE_ENV !== 'development'
})
// 追加外部参数
buryingPoint.external = { userId: 'yangpan', appId: '30903' }

// 开启白名单
// buryingPoint.whiteList.push('0.0.0.0')
