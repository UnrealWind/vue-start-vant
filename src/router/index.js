import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/pages/index'),
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
