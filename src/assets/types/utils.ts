function a() {
  console.log('xxxx')
}

export default {
  install(Vue, options): void {
    Vue.prototype.$util = a
  }
}
