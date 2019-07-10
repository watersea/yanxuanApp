import Vue from 'vue'
import toast from './index.vue'
let ToastTem = Vue.extend(toast)
let instance
let ele
let timer = null
let duration;
let toastMessage = (options) => {

    if(!instance){ // toast未存在状态
      instance = new ToastTem()
      ele = instance.$mount().$el
      document.body.appendChild(ele)
    }
    if(!timer){ // 延时器不存在状态
      clearTimeout(timer)
      timer = null
      instance.type = 'success'
      instance.message = ''
    }
    console.log(1)
    // 判断传入的类型 
    if (typeof options === 'string') {
      instance.message = options
      instance.type = 'success'
    } else if (typeof options === 'object') {
      let {message, type, time} = options
      instance.message = message
      instance.type = type 
      duration = time ? time : 2000
    } else {
      return
    }
    instance.show = true
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      instance.show = false
      instance.message = ''
      instance.type = 'success'
    }, duration)

}
toastMessage.close = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
    instance.message = ''
  }
}
toastMessage.install = (Vue) => {
  Vue.prototype.QMessage = toastMessage
}
export default toastMessage
