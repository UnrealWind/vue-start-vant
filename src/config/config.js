const config = {
  plugins: [
    'index',
    'routerAuth'
  ],
  excPath: [
    '/user/logon',
    '/user/accountLogin',
    '/',
    '/origin',
    '/commodityLevelSec/seasonal',
    '/fruitlist',
    '/commodityLevelSec/daynew',
    '/commodityLevelSec/onLineSuperMarket',
    '/supermarketlist',
    '/vip',
    '/commodityLevelSec/crossborder',
    '/commonalityPage',
    '/productlistmin',
    '/hotcakes',
    '/commodityLevelSec/mall',
    '/store',
    '/commodityLevelSec/classification',
    '/searchPage',
    '/user/find',
    '/concentrate',
    '/trialcenter',
    '/upgradeVIP',
    '/user/productdetails',
    '/user/mine',
    '/supermarket',
    '/cart/shopcar'
  ],
  backStageUrl: process.env.VUE_APP_BASE_URL,
  socketUrl: '115.29.109.95:8081/socket/', // 链接websocket
  // socketUrl: '127.0.0.1:8088/', // 链接websocket
  fileUploadUrl: '115.29.109.95:8081/resource-manager/', // 上传文件
  // fileUploadUrl: 'http://127.0.0.1:8080/', // 上传文件
  mpUrl: 'https://www.zufangt.com', // 使用微信接口的url
  jssdkUrl: process.env.VUE_APP_BASE_URL + '/wx/getSign' // 后台换权限的接口
}
export default config
