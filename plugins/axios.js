import { Message } from 'element-ui'

export default function({ $axios, redirect }) {
  // 数据访问前缀
  $axios.defaults.baseURL = 'http://127.0.0.1:3001'

  // request interceptor
  $axios.interceptors.request.use(
    (config) => {
      // 只在客户端执行
      if (process.client) {
        config.headers.Authorization = localStorage.getItem('userToken')
      }
      // do something before request is sent
      return config
    },
    (error) => {
      // do something with request error
      return Promise.reject(error)
    }
  )

  // request拦截器，我这里设置了一个token，当然你可以不要
  $axios.onRequest((config) => {
    // console.log('Making request to ' + config.url)
    // config.headers.common['X-Access-Token'] = '1234'
  })

  // response interceptor
  $axios.interceptors.response.use(
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
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
      // console.log('err' + error) // for debug
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
