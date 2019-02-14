import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Svt from 'song-vue-template'
import 'song-vue-template/dist/svt.css'

import 'lib-flexible/flexible.js'

import router from './router'

Vue.use(Svt)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
