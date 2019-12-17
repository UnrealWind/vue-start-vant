import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/pages/index'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const targetRouter = constantRoutes.concat(routes)

const createRouter = () =>
  new Router({
    mode: 'hash', // require service support
    base: '/origin',
    scrollBehavior: () => ({ y: 0 }),
    routes: targetRouter
  })

export default createRouter()
