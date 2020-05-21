import axios from 'axios'
import { Toast, Dialog } from 'vant'
import store from '@/store'
import services from './services'

const getToken = () => {
  return axios({
    method: 'get',
    url: process.env.VUE_APP_BASE_URL + '/verifyToken.aspx',
    headers: {
      'Authorization': store.state.userInfo.Authorization,
      'userid': store.state.userInfo.userid
    }
  })
}

const init = {
  install: (Vue) => {
    const service = axios.create({
      baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
      // withCredentials: true, // send cookies when cross-domain requests
      timeout: 300000 // request timeout
    })
    // request拦截器 request interceptor
    service.interceptors.request.use(
      config => {
        // 不传递默认开启loading
        if (!config.hideloading) {
          // loading
          Toast.loading({
            forbidClick: true
          })
        }
        // 初始化的时候会从params里获取并存储到store中，这里直接从store中获取即可
        config.headers['Authorization'] = store.state.userInfo.Authorization
        config.headers['userid'] = store.state.userInfo.userid
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
        const res = response.data
        // token失效的时候需要重新去刷新这个token，并将新的token传递给app
        if (res.status === -2) {
          return getToken().then((tokenRes) => {
            Toast.clear()
            switch (tokenRes.data.status) {
              // 这种情况应该是不可能出现的
              case -1:
                Dialog.alert({
                  message: '您的账号登录超时或已在其它地方登录,请您重新登录!'
                }).then(() => {
                  services.clientServer.BackToApp()
                })
                break
              // 不论超时与否都会将一个正常的token返回
              case 0 :
                store.commit('setToken', tokenRes.data.data)
                response.config.headers['Authorization'] = tokenRes.data.data
                services.clientServer.PostToken()
                return service(response.config)
              default:
                return Promise.resolve(res)
            }
          })
        // token错误，返回app
        } else if (res.status === -1) {
          Toast.clear()
          Dialog.alert({
            message: '您的账号登录超时或已在其它地方登录,请您重新登录!'
          }).then(() => {
            services.clientServer.BackToApp()
          })
        } else if (res.status === 0) {
          // 成功返回正确数据
          Toast.clear()
          return Promise.resolve(res)
        } else {
          // 失败 除token相关两个，其他的弹出toast提示错误
          Toast.clear()
          if (res.status !== 0) {
            Toast.fail(res.msg)
          }
          return Promise.reject(res || 'error')
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
