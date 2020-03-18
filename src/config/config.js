const config = {
  plugins: [
    'index',
    'routerAuth'
  ],
  excPath: [
    '/index'
  ],
  backStageUrl: process.env.VUE_APP_BASE_URL,
  socketUrl: '', // websocket地址
  fileUploadUrl: '', // 文件服务器地址
  mpUrl: '', // 使用微信接口的url
  jssdkUrl: '' // 后台换权限的接口
}
export default config
