import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'
// import QMessage from '@/UIcomponents/toast/index'
// import router from '@/router'
const CancelToken = axios.CancelToken
const source = CancelToken.source()
let env = process.env.NODE_ENV
console.log('当前项目环境====' + env)
// eslint-disable-next-line
let baseUrl = env === 'development' ? 'http://127.0.0.1:8888/api' : 'https://www.jstrue.com/wangyi/api/'
const axisoRequest = axios.create({
  baseURL: baseUrl,
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
  Indicator.open({
    text: '拼命加载中...',
    spinnerType: 'fading-circle'
  })
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axisoRequest.interceptors.response.use(function (response) {
  setTimeout(() => {
    Indicator.close()
  }, 500)
  // eslint-disable-next-line
  if (response.data.code === 200) {
    return response
  } else {
    Toast({
      message: response.data.msg,
      position: 'middle',
      duration: 3000
    })
    return Promise.reject(response.data.msg)
  }
}, function (error) {
  return Promise.reject(error)
})
export default axisoRequest
