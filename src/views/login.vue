<template>
  <div class="login-wrap">
    <img class="bg_wrap"
         src="../assets/img/bg.jpg">
    <login-register />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginRegister from "@/components/login/register.vue";
@Component({
  components: {
    LoginRegister
  }
})
export default class login extends Vue {}
</script>

<style lang="stylus" scoped>
.login-wrap
  position relative
  width 100vw
  height 100vh
  overflow hidden

  .bg_wrap
    background #000
    position absolute
    margin 0px
    padding 0px
    border none
    min-width 2241px
    min-height 1494px
    width 100%
    height 100%
    z-index -999999
</style>
