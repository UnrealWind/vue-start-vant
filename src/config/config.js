const config = {
  plugins: [
    'index',
    'routerAuth'
  ],
  excPath: [
    '/user/logon',
    '/user/accountLogin',
    '/'
  ],
  backStageUrl: process.env.VUE_APP_BASE_URL,
  socketUrl: '127.0.0.1:8088/', // 链接websocket
  // fileUploadUrl: '115.29.109.95:8081/resources/', // 上传文件
  fileUploadUrl: 'http://127.0.0.1:8080/', // 上传文件
  mpUrl: 'www.test.com', // 使用微信接口的url
  jssdkUrl: 'www.test.com' // 后台换权限的接口
}
export default config
