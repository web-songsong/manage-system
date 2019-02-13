import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Svt from 'song-vue-template'
import 'lib-flexible/flexible.js'

Vue.use(Svt)

new Vue({
  render: h => h(App)
}).$mount('#app')
