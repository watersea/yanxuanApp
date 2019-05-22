import axios from 'axios'

axios.defaults.timeout = 30000 // 超时中断请求

axios.defaults.baseURL = 'http://localhost:8888/'

axios.defaults.withCredentials = false

const axisoRequest = axios.create({
  url: '',
  headers: {}
})

// 请求拦截器
axisoRequest.interceptors.request.use(function (config) {
// 在发送请求之前做些什么
  console.log(config)
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截器
axisoRequest.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default axisoRequest
