import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'jquery'

// import './assets/js/adaptation.js'
import './assets/css/base.css' /*引入公共样式*/
import './assets/css/font.css' /*引入公共样式*/

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
