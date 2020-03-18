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

import http from './components/http'
Vue.use(http)
import socket from './components/socket'
Vue.use(socket)
import upload from './components/upload'
Vue.use(upload)
import wx from './components/wxInit'
Vue.use(wx)
import uni from './components/uniInit'
Vue.use(uni)

Vue.config.productionTip = false

const init = async() => {
  // 根据配置文件加载配置文件的js插件
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
      'van-Container': VanContainer
    },
    render: h => h(App)
  })
}
init()
