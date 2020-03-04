import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'jquery'
import 'bootstrap'

import './assets/js/adaptation.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/css/base.css' /*引入公共样式*/
import "./assets/font/font.css"
import toastRegistry from './components/toast/index'

Vue.config.productionTip = false

Vue.use(toastRegistry)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
