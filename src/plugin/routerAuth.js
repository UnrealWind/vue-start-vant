import router from '../router/index'
import store from '../store/index'
import config from '../config/config'
const routerAuth = () => {
  router.beforeEach(async(to, from, next) => {
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
    if (store.state.token) {
      next()
    } else {
      next({ path: '/user/logon' })
    }
  })
}

export default routerAuth