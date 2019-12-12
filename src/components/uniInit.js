const init = {
  install: async(Vue) => {
    const unisdk = {}
    Vue.prototype.$wx = unisdk
    initunisdk.init(unisdk, Vue)
  }
}

const initunisdk = {

  /* 进行config的 配置详情见https://mp.weixin.qq.com/wiki?action=doc&id=mp1421141115&t=0.605348614985378#62
      才可以使用微信对webview开放的接口，webview中的接口必须通过配置config才可以通过调试，与原声小程序不同 */
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
