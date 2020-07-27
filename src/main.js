import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './config-ele/ele.js'
import './assets/css/globle.css'
import './assets/icon/iconfont.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
