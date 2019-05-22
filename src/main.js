// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import globalVariate from '@/api/globalVariate'
import globalFun from '@/api/globalFun'

Vue.config.productionTip = false

// 全局变量&&全局函数方法 绑定到原型上
Vue.prototype.$globalVariate = globalVariate
Vue.prototype.$globalFun = globalFun

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
