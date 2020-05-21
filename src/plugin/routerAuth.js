import router from '../router/index'
import config from '../config/config'
import store from '../store'
const routerAuth = () => {
  const history = window.sessionStorage
  // history.clear()
  let historyCount = history.getItem('count') * 1 || 0
  history.setItem('/', 0)

  router.beforeEach((to, from, next) => {
    if (to.params.direction) {
      store.commit('updateDirection', to.params.direction)
    } else {
      const toIndex = history.getItem(to.path)
      const fromIndex = history.getItem(from.path)
      // 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
      if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
          store.commit('updateDirection', 'forward')
        } else {
          store.commit('updateDirection', 'back')
        }
      } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        store.commit('updateDirection', 'forward')
      }
    }
    try {
      config.excPath.forEach((n, i) => {
        if (to.path === n) {
          next()
          throw new Error('stop')
        }
      })
    } catch (e) {
      return
    }
    // 这里鉴权判断去那个页面
    if (store.state.test) {
      next()
    } else {
      next({ path: '/' })
    }
  })
}

export default routerAuth
