// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueCookie from 'vue-cookies'
// 全局指令
// eslint-disable-next-line
import focus from '@/api/globalDirective'

// 全局变量&&函数
import globalVariate from '@/api/globalVariate'
import globalFun from '@/api/globalFun'

// mint UI 引入
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

// 公共组件
import topBar from '@/common/topTab'

Vue.config.productionTip = false
// Vue.use(focus)
Vue.use(mintUi)
// vue-cookie
Vue.use(vueCookie)
// 全局变量&&全局函数方法 绑定到原型上
Vue.prototype.$globalVariate = globalVariate
Vue.prototype.$globalFun = globalFun

// 全局组件注册
Vue.component('top-bar', topBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
