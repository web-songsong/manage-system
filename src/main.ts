import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Svt from 'song-vue-template'
import 'song-vue-template/dist/svt.css'

import 'lib-flexible/flexible.js'
import utils from '../src/assets/types/utils'

import router from './router'

Vue.use(Svt)

Vue.use(utils)
router.beforeEach((to, from, next) => {
  // if (window.sessionStorage.getItem('login_state')) next()
  if (to.path === '/') {
    return next()
  }
  window.sessionStorage.getItem('login_state') ? next() : next('/')
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
