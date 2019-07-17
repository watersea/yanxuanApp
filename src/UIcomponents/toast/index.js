import Vue from 'vue'
import toast from './index.vue'
let ToastTem = Vue.extend(toast)
let instance
let ele
let timer = null
let duration = 2000 //  默认消失时间
let toastMessage = (options) => {
  console.log(options)
  // 过滤传入数据,空对象/数组/空字符串/其他非法类型数据
  if (!options || Array.isArray(options) || JSON.stringify(options) === '{}') {
    //  eslint-disable-next-line
    throw new Error ('Please enter the correct numeric type,only support object or string')
  }
  // 检测dom是否已经创建
  if (!instance) {
    instance = new ToastTem()
    ele = instance.$mount()
    document.getElementById('app').appendChild(ele.$el)
  }
  // 先判断类型
  let type = typeof options
  if (type === 'string') { // 字符串传入
    instance.message = options
    instance.show = true
  } else { // 对象传入
    instance.type = options.type || 'success'
    instance.message = options.message || 'loading...'
    instance.show = true
    duration = options.duration || 2000
  }
  timer = setTimeout(() => {
    instance.show = false
    instance.message = ''
    instance.type = 'success'
    clearTimeout(timer)
    timer = null
  }, duration)
}
// 关闭toast
toastMessage.close = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
  }
}
toastMessage.install = (Vue) => {
  Vue.prototype.QMessage = toastMessage
}

export default toastMessage
