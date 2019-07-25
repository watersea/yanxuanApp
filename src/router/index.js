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
      redirect: '/home/goods',
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
          redirect: '/home/goods/recommend',
          component: () => import('@/components/main/goods/index'),
          children: [
            {
              path: '/home/goods/recommend',
              name: 'goodsRecommend',
              component: () => import('@/components/main/goods/view/recommend')
            },
            {
              path: '/home/goods/purchasing',
              name: 'goodsPurchasing',
              component: () => import('@/components/main/goods/view/purchasing')
            },
            {
              path: '/home/goods/buy',
              name: 'goodsBuy',
              component: () => import('@/components/main/goods/view/buy')
            },
            {
              path: '/home/goods/bask',
              name: 'goodsBask',
              component: () => import('@/components/main/goods/view/bask')
            },
            {
              path: '/home/goods/diary',
              name: 'goodsDiary',
              component: () => import('@/components/main/goods/view/diary')
            },
            {
              path: '/home/goods/doyen',
              name: 'goodsDoyen',
              component: () => import('@/components/main/goods/view/doyen')
            },
            {
              path: '/home/goods/index',
              name: 'goodsIndex',
              component: () => import('@/components/main/goods/view/home')
            }
          ]
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
