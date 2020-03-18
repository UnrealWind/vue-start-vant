import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'

const init = {
  install: (Vue) => {
    const service = axios.create({
      baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
      // withCredentials: true, // send cookies when cross-domain requests
      timeout: 5000 // request timeout
    })
  // request拦截器 request interceptor
    service.interceptors.request.use(
      config => {
        // 不传递默认开启loading
        if (!config.hideloading) {
          // loading
          /* Toast.loading({
            forbidClick: true
          })*/
        }
        /* if (sessionStorage.getItem('token')) {
          config.headers['x-auth-token'] = sessionStorage.getItem('token')
        }*/
        return config
      },
      error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
      }
    )
  // respone拦截器
    service.interceptors.response.use(
      response => {
        // Toast.clear()

        // fydebug 这边发现进入error状态时页面会重新刷新，这里目前是采用页面刷新的方法进行刷新的，所以store会丢失，暂时使用sessionstorage进行处理，待优化
        // 优化方向为优化error刷新逻辑
        /* if (response.headers['x-auth-token']) {
          sessionStorage.setItem('token', response.headers['x-auth-token'])
        }*/

        const res = response.data
        if (res.status && res.status !== 200) {
          // 登录超时,重新登录
          if (res.status === 401) {
            store.dispatch('FedLogOut').then(() => {
              location.reload()
            })
          }
          return Promise.reject(res || 'error')
        } else {
          return Promise.resolve(res)
        }
      },
      error => {
        Toast.clear()
        console.log('err' + error) // for debug
        return Promise.reject(error)
      }
    )
    Vue.prototype.$http = service
  }
}

export default init
