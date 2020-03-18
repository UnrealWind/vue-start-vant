import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    test: '123',
    direction: 'forward' // 页面切换方向
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
    }
  },
  actions: {}
})
export default store
