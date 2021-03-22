import { Message } from 'element-ui'
const Cookie = process.client ? require('js-cookie') : undefined

export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    if (process.client) {
      config.headers.Authorization = Cookie.get('auth')
    }
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      if (process.client) {
        Message.error('登录失败，请重新登陆')
      }
      redirect('/login')
    } else {
      redirect('/error')
    }
  })
}
