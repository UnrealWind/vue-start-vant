import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/css/index.scss' // global css
// 移动端适配
import 'lib-flexible/flexible.js'
import App from './App'
import store from './store'
import router from './router'
import '@/filters' // filters
import config from './config/config'

import VanContainer from './directive/vanContainer'
Vue.component('VanContainer', VanContainer)
import Commodity from './directive/commodity'
Vue.component('Commodity', Commodity)
import OrderList from './directive/orderList'
Vue.component('OrderList', OrderList)

import http from './components/http'
Vue.use(http)
import socket from './components/socket'
Vue.use(socket)
import upload from './components/upload'
Vue.use(upload)
import wx from './components/wxInit'
Vue.use(wx)

Vue.config.productionTip = false

const init = async() => {
  for (const pluginName of config.plugins) {
    const plugin = require('./plugin/' + pluginName)
    if (plugin && plugin.default && typeof plugin.default === 'function') {
      await plugin.default()
    }
  }
  new Vue({
    el: '#app',
    router,
    store,
    components: {
      'van-Container': VanContainer,
      'commodity': Commodity,
      'order-list': OrderList
    },
    render: h => h(App)
  })
}
init()
