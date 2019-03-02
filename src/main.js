// index.js
// 需 npm i vue --save
import Vue from 'vue'
import App from './app.vue'
import router from './router/index.js'

import base from './base'
Vue.use(base)

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
