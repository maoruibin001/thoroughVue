<template>
  <div class="hello">
    <h1 v-focus>{{ msg }}</h1>
    <Cmps></Cmps>
    <input type="text" v-focus>
    <my-cmps></my-cmps>
  </div>
</template>

<script>
import Cmps from './Cmps.vue'
import Vue from 'vue'
export default {
  name: 'HelloWorld',
  components: {
    Cmps
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    let focus = Vue.directive('focus')
    console.log(focus)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
