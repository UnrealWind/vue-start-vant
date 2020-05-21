const config = {
  plugins: [ // 初始化加载的插件列表
    'index',
    'routerAuth' // 路由鉴权
  ],
  excPath: [
    '/index' // 不走鉴权的页面
  ],
  backStageUrl: process.env.VUE_APP_BASE_URL,
  socketUrl: '', // websocket地址
  fileUploadUrl: '', // 文件服务器地址
  mpUrl: '', // 使用微信接口的url
  jssdkUrl: '', // 后台换权限的接口
  // 这里前端自己维护一个静态资源映射表，其中role以及reason只做记录
  role: {
    R0033: '服务技师',
    R0074: '区域工程师',
    R0091: '服务专家',
    R0041: '站长',
    R0069: '信息员'
  },
  reason: {
    1: '疑难杂症',
    2: '需要OEM配合',
    3: '费用相关',
    4: '零件相关',
    5: '其他'
  },
  recordType: {
    1: '待区域工程师反馈',
    2: '待服务技师确认',
    3: '待服务专家反馈',
    4: '升级完成'
  },
  escalationType: {
    1: {
      role: '服务技师',
      value: '服务技师常规升级至区域工程师'
    },
    2: {
      role: '区域工程师',
      value: '区域工程师常规升级至服务专家'
    },
    3: {
      role: '区域工程师',
      value: '区域工程师创建升级至服务专家'
    },
    4: {
      role: '服务技师',
      value: '服务技师再升级至服务专家'
    },
    5: {
      role: '服务技师',
      value: '服务技师催单服务专家'
    }
  }
}
export default config
