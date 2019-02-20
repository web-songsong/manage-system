interface LoginInfo {
  name: string
  password: string
}

const test = (info: LoginInfo): boolean => {
  const { name, password } = info
  if (name === 'song' && password === 'song') {
    window.localStorage.setItem('login_state', JSON.stringify(true))
    return !0
  }
  return !1
}

export default {
  install(Vue, options): void {
    Vue.prototype.$utils = {
      test
    }
  }
}
