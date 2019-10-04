import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jquery from 'jquery'
require('bootstrap')
require('jquery.easing')

require('bootstrap/dist/css/bootstrap.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')

Vue.config.productionTip = false
Vue.prototype.jquery = jquery

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
