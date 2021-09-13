import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 把 axios 註冊為原型
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
