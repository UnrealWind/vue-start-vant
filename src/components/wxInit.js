import * as wx from 'jweixin-npm'
import config from '../config/config'
const axios = require('axios')

const init = {
  install: async(Vue) => {
    const wxjssdk = {
      ready: 'pending'
    }
    Vue.prototype.$wx = wxjssdk
    initjssdk.init(config.mpUrl, wxjssdk, Vue)
  }
}

const initjssdk = {

  /* 进行config的 配置详情见https://mp.weixin.qq.com/wiki?action=doc&id=mp1421141115&t=0.605348614985378#62
      才可以使用微信对webview开放的接口，webview中的接口必须通过配置config才可以通过调试，与原声小程序不同 */
  init: (url, wxjssdk, Vue) => {
    axios.get(`${config.jssdkUrl}?url=` + encodeURIComponent(url))
      .then((result) => {
        const res = result.data.obj
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: res.appid, // 必填，公众号的唯一标识
          timestamp: res.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.noncestr, // 必填，生成签名的随机串
          signature: res.sign, // 必填，签名
          jsApiList: ['scanQRCode', 'getLocation', 'updateAppMessageShareData'] // 必填，需要使用的JS接口列表
        })
        wxjssdk.ready = 'ready'
        getlocation(wxjssdk, Vue)
      })
  }
}

const getlocation = async(wxjssdk, Vue) => {
  const loc = new Promise((resolve, reject) => {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        resolve(res)
      }
    })
  })
  await loc.then(function(res) {
    wxjssdk['scanQRCode'] = wx.scanQRCode
    wxjssdk['updateAppMessageShareData'] = wx.updateAppMessageShareData
    wxjssdk['getLocation'] = () => {
      return res
    }
    Vue.prototype.$wx = wxjssdk
  })
}

export default init
