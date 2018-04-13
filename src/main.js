import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'

//import Ninja from './Ninja.vue'

//Vue.component('ninjas', Ninja)

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App2)
})
