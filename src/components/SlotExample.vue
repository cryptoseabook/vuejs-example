<template>
  <div>
    <slot name="title"></slot>
    <p>This is slot example</p>
    <slot name="text"></slot>
  </div>
</template>

<script>
import {bus} from "../main";

export default {
  props:{
    title: {
      type: String
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  p {
    font-weight: bolder;
  }
</style>
