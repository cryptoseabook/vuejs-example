<template>
    <div class="" id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button @click="deleteNinja()">Delete Ninja</button>
    </div>
</template>


<script>
export default {
  //props:["ninjas"],
  props: {
    ninjas: {
      type:Array,
      required:true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop();
    }
  },
  beforeCreate: function(){
    console.log("beforeCreated");
  },
  created: function() {
    console.log("created");
  },
  beforeMount: function() {
    console.log("beforeMount");
  },
  mounted: function() {
    console.log("mounted");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate");
  },
  updated: function() {
    console.log("updated");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy");
  },
  destroyed: function() {
    console.log("destroyed");
  },

}
</script>

<style scoped>
#ninjas{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}


li:hover {
  cursor: pointer;
}

</style>
