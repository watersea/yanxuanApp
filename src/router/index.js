import Vue from 'vue'
import Router from 'vue-router'

// 组件引用部分
// import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/login/login')
    }
  ]
})
