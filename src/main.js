import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VAnimateCss from 'v-animate-css'
import axios from 'axios'
//import VueAxios from 'vue-axios'
 
Vue.prototype.$axios = axios
Vue.use(VAnimateCss)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
