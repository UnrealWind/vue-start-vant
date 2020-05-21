import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 数据持久化
import createPersistedState from 'vuex-persistedstate'

const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    reducer(state) {
      return {
        // 只储存state中的userInfo
        assessmentData: state.userInfo
      }
    }
  })],
  state: {
    test: '123',
    direction: 'forward', // 页面切换方向
    userInfo: { // app端传过来的数据
      Authorization: '', // 认证token
      userid: '', // 用户ID
      roleNo: '', // 角色编号
      roleId: '', // 角色id
      type: '', // upgradeList : 主动升级列表    newUpgrade: 已有工单新建升级      upgradeDetail: 升级详情
      workOrderId: '', // 服务工单id
      escalationOrderId: '' // 升级工单id
    }
  },
  getters: {
    getState: state => {
      return state
    }
  },
  mutations: {
    // 更新页面切换方向
    updateDirection(state, direction) {
      state.direction = direction
    },
    setUser(state, userInfo) {
      state.userInfo = userInfo
    },
    setToken(state, Authorization) {
      state.userInfo.Authorization = Authorization
    }
  },
  actions: {}
})
export default store
