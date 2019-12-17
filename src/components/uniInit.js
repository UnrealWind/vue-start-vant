const init = {
  install: async(Vue) => {
    const unisdk = {}
    Vue.prototype.$wx = unisdk
    initunisdk.init(unisdk, Vue)
  }
}

const initunisdk = {
  init: (unisdk, Vue) => {
    document.addEventListener('UniAppJSBridgeReady', () => {
      /*global uni:true*/
      /*eslint no-undef: "error"*/
      unisdk = uni
      Vue.prototype.$uni = unisdk
    })
  }
}

export default init
