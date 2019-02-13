<template>
  <div>{{msg}}
    <svt-button />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Song extends Vue {
  message: string = "Hello!";
  @Prop() msg?: string;
}
</script>
