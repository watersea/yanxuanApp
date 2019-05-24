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
      redirect:'/home/index',
      component: () => import('@/components/home'),
      children: [
        {
          path:'index',
          name:'index',
          component: () => import('@/components/main/index/index')
        },{
          path:'classify',
          name:'classify',
          component: () => import('@/components/main/classify/index')
        },{
          path:'goods',
          name:'goods',
          component: () => import('@/components/main/goods/index')
        },{
          path:'shopCar',
          name:'shopCar',
          component: () => import('@/components/main/shopCar/index')
        },{
          path:'single',
          name:'single',
          component: () => import('@/components/main/single/index')
        },
      ]
    }
  ]
})

// 全局路由拦截
router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router
