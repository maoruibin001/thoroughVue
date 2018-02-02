<template>
  <div class="hello">
    <h1 v-focus><% msg %></h1>
    <Cmps></Cmps>
    <Cust-input v-model="hello"></Cust-input>
    <h1>begin</h1>
    <!--<input type="text" v-focus v-model="hello">-->
    <h1  @hello="hello2">end</h1>
    <my-cmps></my-cmps>
  </div>
</template>

<script>
import Cmps from './Cmps.vue'
import CustInput from './CustInput.vue'
import Vue from 'vue'
export default {
  comments: true,
  model: {
    prop: 'checked',
    event: 'change'
  },
  delimiters: ['[[', ']]'],
  name: 'HelloWorld',
  components: {
    Cmps,
    CustInput
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hello: '2432434'
    }
  },
  methods: {
    hello2() {
      console.log('hello, you emit me');
    }
  },
  mounted () {
    let focus = Vue.directive('focus')
    this.$on('hello', () => {
    })
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
