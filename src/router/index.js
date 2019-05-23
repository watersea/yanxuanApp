import Vue from 'vue'
import Router from 'vue-router'

// 组件引用部分
// import login from '@/components/login/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/login/login')
    }, {
      path: '/home',
      name: 'home',
      component: () => import('@/components/main/home')
    }
  ]
})

// 全局路由拦截
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router
