<template>
  <div class="">
    <h1>List of ninjas</h1>
    <ul class="">
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      ninjas: ["seabook", "syvia", "hetty"]
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red
  }
</style>
