import Vue from 'vue'
import Router from 'vue-router'
import vueCookies from 'vue-cookies'
// 组件引用部分
// import login from '@/components/login/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/login')
    }, {
      path: '/',
      name: 'home',
      redirect: '/home/shopCar',
      component: () => import('@/components/home'),
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: () => import('@/components/main/index/index')
        }, {
          path: '/home/classify',
          name: 'classify',
          component: () => import('@/components/main/classify/index')
        }, {
          path: '/home/goods',
          name: 'goods',
          component: () => import('@/components/main/goods/index')
        }, {
          path: '/home/shopCar',
          name: 'shopCar',
          component: () => import('@/components/main/shopCar/index')
        }, {
          path: '/home/single',
          name: 'single',
          component: () => import('@/components/main/single/index')
        }
      ]
    }, {
      path: '/resgiter',
      name: 'resgiter',
      component: () => import('@/components/resgiter/resgiter')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/components/search/search')
    },
    {
      path: '/good_show',
      name: 'good_show',
      component: () => import('@/common/goodShow')
    },
    {
      path: '/404',
      name: 'error404',
      component: () => import('@/common/404')
    },
    {
      path: '/500',
      name: 'error500',
      component: () => import('@/common/500')
    }
  ]
})

// 全局路由拦截
router.beforeEach((to, from, next) => {
  let routerName = to.name
  if (routerName === 'single') {
    if (vueCookies.isKey('wy_login_access')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
