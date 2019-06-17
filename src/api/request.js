import axios from 'axios'
import { Toast } from 'mint-ui'

// import router from '@/router'
const CancelToken = axios.CancelToken
const source = CancelToken.source()

const axisoRequest = axios.create({
  baseURL: 'http://127.0.0.1:8888/api/',
  timeout: 30000,
  withCredentials: false,
  headers: {},
  cancelToken: source.token,
  validateStatus: function (status) {
    return status >= 200 && status < 300 // 默认的
  }
})
// 注销拦截器方法
// axios.interceptors.request.eject(axisoRequest)

let instance = ''
// 请求拦截器
axisoRequest.interceptors.request.use(function (config) {
  instance = Toast({
    message: '提示',
    position: 'middle',
    duration: 100
  })
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axisoRequest.interceptors.response.use(function (response) {
  if (response.data.code <= 200) {
    // instance = Toast({
    //   message: '成功',
    //   position: 'middle',
    //   duration: 100000
    // })
  } else {
    instance.close()
  }
  return response
}, function (error) {
  return Promise.reject(error)
})
export default axisoRequest
