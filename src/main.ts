import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import Svt from 'song-vue-template'
import 'song-vue-template/dist/css/svt.css'

import utils from '../src/assets/types/utils'

Vue.config.productionTip = false

Vue.use(Svt)
Vue.use(utils)

router.beforeEach((to, from, next) => {
  // if (window.sessionStorage.getItem('login_state')) next()
  if (to.path === '/') {
    return next()
  }
  /* 登录检测 */
  // window.localStorage.getItem('login_state') ? next() : next('/')
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
