import services from './services'
const init = {
  install: (Vue) => {
    Vue.prototype.$clientServer = services.clientServer
  }
}

export default init
