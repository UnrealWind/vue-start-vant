import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    test: '123'
  },
  getters: {
    getState: state => {
      return state
    }
  },
  mutations: {

  },
  actions: {}
})
export default store
