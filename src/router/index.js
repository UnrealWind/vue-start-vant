import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/commodityLevelSec/seasonal',
    component: () => import('@/pages/commodity-level-sec/seasonal'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/commodityLevelSec/mall',
    component: () => import('@/pages/commodity-level-sec/mall'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/commodityLevelSec/daynew',
    component: () => import('@/pages/commodity-level-sec/daynew'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/commodityLevelSec/crossborder',
    component: () => import('@/pages/commodity-level-sec/crossborder'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/commodityLevelSec/onLineSuperMarket',
    component: () => import('@/pages/commodity-level-sec/onLineSuperMarket'),
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
    path: '/superMarketZone',
    component: () => import('@/pages/superMarketZone'),
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
    path: '/iframe',
    component: () => import('@/pages/iframe'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart/address_list',
    component: () => import('@/pages/cart/address_list'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart/coupon',
    component: () => import('@/pages/cart/coupon'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart/order',
    component: () => import('@/pages/cart/order'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart/order_list',
    component: () => import('@/pages/cart/order_list'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart/confirm_order',
    component: () => import('@/pages/cart/confirm_order'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart/order_details',
    component: () => import('@/pages/cart/order_details'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart/stepspage',
    component: () => import('@/pages/cart/stepspage'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/cart/shopcar',
    component: () => import('@/pages/cart/shopcar'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/mine',
    component: () => import('@/pages/user/mine'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/find',
    component: () => import('@/pages/user/find'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/myshop',
    component: () => import('@/pages/user/myshop'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/mysearch',
    component: () => import('@/pages/user/mysearch'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/productdetails',
    component: () => import('@/pages/user/productdetails'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/logon',
    component: () => import('@/pages/user/logon'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/changeInfo',
    component: () => import('@/pages/user/changeInfo'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/addFind',
    component: () => import('@/pages/user/addFind'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/accountLogin',
    component: () => import('@/pages/user/accountlogin'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/vipLogon',
    component: () => import('@/pages/user/vipLogon'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/commodityLevelSec/classification',
    component: () => import('@/pages/commodity-level-sec/classification'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/infoList',
    component: () => import('@/pages/user/infoList'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/user/customerService',
    component: () => import('@/pages/user/customerService'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const createRouter = () =>
  new Router({
    mode: 'hash', // require service support
    base: '/',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

export default createRouter()
