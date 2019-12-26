import store from '@/store'
import config from '../config/config'

const init = {
  install: (Vue) => {
    console.log(store)

    // fydebug整了半天，vue进行全局组件注册的时候实在是没办法带上store的参数，目前先改成这个样子，后台进行修改后这边会对应进行调整
    const wsurl = `wss://${config.socketUrl}/imServer.do?userCode=u002&userType=0&osType=0`
    const socketServer = new WebSocket(wsurl)
    socketServer['sendMsg'] = (data) => {
      socketServer.send(JSON.stringify(data))
    }
    Vue.prototype.$socket = socketServer
  }
}

export default init
