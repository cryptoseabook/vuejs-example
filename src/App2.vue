<template>
  <div class="">
    <!--
    <formOne></formOne>
    <formTwo></formTwo>
    -->
    <component v-bind:is="form">


    </component>

    <button type="button" name="button" @click="form = 'formOne'">Show Form One</button>
    <button type="button" name="button" @click="form = 'formTwo'">Show Form Two</button>
  </div>
</template>

<script>
import FormOne from "./components/FormOne.vue"
import FormTwo from "./components/FormTwo.vue"

export default {
  components:{
    'formOne': FormOne,
    'formTwo': FormTwo
  },
  data () {
    return {
      form: "formOne"
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  div {
    margin: 0 auto;
  }
</style>
