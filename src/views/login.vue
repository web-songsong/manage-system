<template>
  <div class="login_wrap">
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
.login_wrap
  background #ccc
  width 100%
  height 100vh
</style>
