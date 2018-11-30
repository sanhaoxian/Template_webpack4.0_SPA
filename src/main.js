// index.js
// 需 npm i vue --save
import Vue from 'vue';
import App from './App.vue'
import router from './router/index.js'
// import './index.scss'

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});