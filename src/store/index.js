import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    test: '123',
    targetOrder: [],
    token: null,
    userCode: '',
    userType: '',
    user: {},
    direction: 'forward' // 页面切换方向
  },
  getters: {
    getState: state => {
      return state
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUserCode(state, userCode) {
      state.userCode = userCode
    },
    setUser(state, user) {
      state.user = user
    },
    setUserType(state, userType) {
      state.userType = userType
    },
    setTargetOrder(state, targetOrder) {
      targetOrder.forEach((n, i) => {
        n.goods.forEach((good, i) => {
          // 现在没有商品图片，先临时拿一个代替
          if (!good.img) good['img'] = require('../assets/img/cart/card.png')
          if (!good.activityMoney) {
            good.activityMoney = good.goodsMoney
            good.annulMoney = 0
          }
        })
      })
      state.targetOrder = JSON.parse(JSON.stringify(targetOrder))
    },
    // 更新页面切换方向
    updateDirection(state, direction) {
      state.direction = direction
    }
  },
  actions: {}
})
export default store
