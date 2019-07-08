import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueCookie from 'vue-cookies'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 全局指令
// eslint-disable-next-line
import lazyImg from '@/api/globalDirective'

// 全局变量&&函数
import globalVariate from '@/api/globalVariate'
import { globalFun, inputBlur } from '@/api/globalFun'

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
// vue-Lazyload
Vue.use(VueLazyload)

Vue.use(inputBlur)
Vue.use(VueAwesomeSwiper)
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
