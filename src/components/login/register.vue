<template>
  <div class="login-register">
    <div class="input_wrap">
      <div class="into_hint">
        <h3>Login to our site</h3>
        <p>Enter your username and password to log on:</p>

      </div>
      <svt-input v-model="nameText"
                 class="name_input"
                 placeholder="Username..." />

      <svt-input type="new-password"
                 v-model="passText"
                 placeholder="Password..."
                 @keyup.native.enter="login" />

      <svt-button type="primary"
                  @click="login">登录</svt-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class login_register extends Vue {
  nameText: string = ''
  passText: string = ''
  login() {
    if (this.$utils.test({ name: this.nameText, password: this.passText })) {
      this.$router.push('home')
    }
  }
}
</script>
<style lang="stylus" >
.login-register
  top 50%
  left 50%
  transform translate3d(0, 0, 0)
  transform translate(-50%, -50%)
  width 600px
  height 375px
  position absolute
  background rgba(0, 0, 0, 0.65)

  .input_wrap
    position absolute
    left 50%
    transform translateX(-50%)
    margin 0 auto
    overflow hidden

    .into_hint
      margin 30px auto

      h3
        color #fff

      p
        opacity 0.8
        color #fff

    .svt-input
      margin-bottom 15px
</style>
