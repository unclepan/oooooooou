import { Message } from 'element-ui'
const Cookie = process.client ? require('js-cookie') : undefined

export default function({ $axios, redirect }) {
  // 数据访问前缀
  $axios.defaults.baseURL = 'http://127.0.0.1:3001'

  $axios.interceptors.request.use(
    (config) => {
      // 只在客户端执行
      if (process.client) {
        $axios.setHeader('Authorization', Cookie.get('auth'))
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  $axios.interceptors.response.use(
    (response) => {
      // const res = response.data
      // if (res.code === 200) {
      //   return res
      // } else {
      //   redirect('/404')
      //   // if the custom code is not 200, it is judged as an error.
      // }
      // return Promise.reject(new Error(res.msg || 'Error'))

      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    // 未登录
    if (code === 401) {
      redirect('/login')
    }
    if (code !== 200) {
      Message.error(error.response.data.message)
    }
  })
}
