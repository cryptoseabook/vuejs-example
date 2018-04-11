<template>
  <div class="">
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <slotExample>
      <h1 slot="title">{{ slotTitle }}</h1>
      <p slot="text">{{ slotText }}</p>
    </slotExample>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <formHelper>
        <div slot="form-header">
            <h3>This is the title of a form</h3>
            <p>This is some info about the form</p>
        </div>
        <div slot="form-fields">
            <input type="text" placeholder="name" required />
            <input type="password" placeholder="password" required />
        </div>
        <div slot="form-controls">
            <button v-on:click="handleSubmit">Submit</button>
        </div>
    </formHelper>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Ninjas from "./components/Ninjas.vue"
import Footer from "./components/Footer.vue"
import SlotExample from "./components/SlotExample.vue"
import FormHelper from "./components/FormHelper.vue"

export default {
  components:{
    'app-header': Header,
    'ninjas':Ninjas,
    'slotExample':SlotExample,
    'app-footer': Footer,
    'formHelper': FormHelper
  },
  data () {
    return {
      ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
      title: "Small Seabook App",
      slotTitle: "This is slot title",
      slotText: "This is slot text"
    }
  },
  methods: {
    updateTitle: function(title) {
      this.title = title;
    },
    handleSubmit: function() {
      alert('thanks for submitting');
    }
  }
}
</script>

<style scoped>

</style>
