import axios from 'axios'
// import router from '@/router'
const CancelToken = axios.CancelToken
const source = CancelToken.source()

const axisoRequest = axios.create({
  baseURL: 'http://127.0.0.1:8080/',
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

// 请求拦截器
axisoRequest.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axisoRequest.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default axisoRequest
