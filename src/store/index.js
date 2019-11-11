import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    test: '123',
    targetOrder: [],
    userCode: 'u002',
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzMyNTQ5MjgsImlhdCI6MTU3MzI1MTMyOCwidXNlcm5hbWUiOiIxNzM0MjA2MjMyNSJ9.L_SIcZiuGUir530WyRfQAW4mklwft0bgKMij5smABJA'
  },
  getters: {
    getState: state => {
      return state
    }
  },
  mutations: {
    setUserCode(state, userCode) {
      state.userCode = userCode
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
    }
  },
  actions: {}
})
export default store
