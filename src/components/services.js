import store from '@/store'

const u = navigator.userAgent
// const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端

const service = {
  clientServer: {
    // 刷新token
    PostToken: () => {
      console.log('刷新token')
      isiOS ? window.webkit.messageHandlers.PostToken.postMessage(store.state.userInfo.Authorization) : window.posttoken.get(store.state.userInfo.Authorization)
    },
    // 开始录音
    StartRecordVoice: () => {
      console.log('开始录音')
      isiOS ? window.webkit.messageHandlers.StartRecordVoice.postMessage('') : window.startrecordvoice.get('')
    },
    // 结束录音
    StopRecordVoice: () => {
      let res
      console.log('结束录音')
      isiOS ? res = window.webkit.messageHandlers.StopRecordVoice.postMessage('') : res = window.stoprecordvoice.get('')
      return res
    },
    // 回到app
    BackToApp: () => {
      console.log('回到app')
      isiOS ? window.webkit.messageHandlers.BackToApp.postMessage('') : window.BackToApp.get('')
    },
    // 上传行为分析
    uploadRecordH5: (opt) => {
      console.log('上传行为分析')
      isiOS ? window.webkit.messageHandlers.uploadRecordH5.postMessage(opt) : window.uploadRecordH5.get(JSON.stringify(opt))
    },
    // 新建升级工单后触发，仅ios
    refreshWOAfterCreateUpgradeOrder: () => {
      // 安卓不用触发
      console.log('新建升级工单后触发，仅ios')
      isiOS ? window.webkit.messageHandlers.refreshWOAfterCreateUpgradeOrder.postMessage('') : ''
    }
  }
}
export default service
