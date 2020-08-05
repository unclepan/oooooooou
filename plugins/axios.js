import { Message } from 'element-ui'
const Cookie = process.client ? require('js-cookie') : undefined

export default function({ $axios, redirect }) {
  $axios.defaults.baseURL = 'http://127.0.0.1:3001'
  $axios.interceptors.request.use(
    (config) => {
      $axios.setHeader('Authorization', Cookie.get('auth'))
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  $axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  $axios.onError((error) => {
    Message.error(error.response.data.message)
  })
}
