import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8081/'

Vue.use(Buefy)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
