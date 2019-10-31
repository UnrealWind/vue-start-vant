import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/example',
    component: () => import('@/pages/example'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static/mine',
    component: () => import('@/pages/static-dir/mine'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static/address',
    component: () => import('@/pages/static-dir/address'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static/introduction',
    component: () => import('@/pages/static-dir/introduction'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static/cart',
    component: () => import('@/pages/static-dir/cart'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/',
    component: () => import('@/pages/index'),
    meta: {
      keepAlive: false
    }
  }, {
    path: '/concentrate',
    component: () => import('@/pages/concentrate'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/hotcakes',
    component: () => import('@/pages/hotcakes'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/vip',
    component: () => import('@/pages/vip'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/supermarket',
    component: () => import('@/pages/supermarket'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/supermarketzone',
    component: () => import('@/pages/supermarketzone'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/perfume',
    component: () => import('@/pages/perfume'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/trialcenter',
    component: () => import('@/pages/trialcenter'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/bookinginformation',
    component: () => import('@/pages/bookinginformation'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/shoppingcart',
    component: () => import('@/pages/shoppingcart'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/productlist',
    component: () => import('@/pages/productlist'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/productlistmin',
    component: () => import('@/pages/productlistmin'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/brandsale',
    component: () => import('@/pages/brandsale'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/store',
    component: () => import('@/pages/store'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/storelist',
    component: () => import('@/pages/storelist'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/fruitlist',
    component: () => import('@/pages/fruitlist'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/supermarketlist',
    component: () => import('@/pages/supermarketlist'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/set',
    component: () => import('@/pages/set'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/personaldata',
    component: () => import('@/pages/personaldata'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/nickname',
    component: () => import('@/pages/nickname'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/upgradeVIP',
    component: () => import('@/pages/upgradeVIP'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static-dir/mall',
    component: () => import('@/pages/static-dir/mall'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static-dir/crassborder',
    component: () => import('@/pages/static-dir/crassborder'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static-dir/daynew',
    component: () => import('@/pages/static-dir/daynew'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static-dir/onlinesupermarket',
    component: () => import('@/pages/static-dir/onlinesupermarket'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static-dir/seasonalfruit',
    component: () => import('@/pages/static-dir/seasonalfruit'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static-dir/sort',
    component: () => import('@/pages/static-dir/sort'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/iframe',
    component: () => import('@/pages/iframe'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static/zone',
    component: () => import('@/pages/static-dir/zone'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/static/news',
    component: () => import('@/pages/static-dir/news'),
    meta: {
      keepAlive: false
    }
  }
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    base: '/',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

export default createRouter()
