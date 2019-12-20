const init = {
  install: async(Vue) => {
    const unisdk = {}
    initunisdk.init(unisdk, Vue)
  }
}

const initunisdk = {
  init: (unisdk, Vue) => {
    document.addEventListener('UniAppJSBridgeReady', () => {
      uni.getEnv(function(res) {
        console.log('当前环境：' + JSON.stringify(res))
      })

      /*global uni:true*/
      /*eslint no-undef: "error"*/
      unisdk = uni
      Vue.prototype.$uni = unisdk
    })
  }
}

export default init
