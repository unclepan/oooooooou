import { Message } from 'element-ui'
const Cookie = process.client ? require('js-cookie') : undefined

export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    if (process.client) {
      config.headers.Authorization = Cookie.get('auth')
    }
  })
  $axios.onError((error) => {
    try {
      const code = parseInt(error.response && error.response.status)
      if (code === 401) {
        Message.error('未登录')
        setTimeout(() => {
          redirect('/login')
        }, 0)
      } else {
        redirect('/error')
      }
    } catch (error) {
      redirect('/error')
    }
  })
}
