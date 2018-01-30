<template>
  <div id="example-2">
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
  </div>
</template>

<script>
import Vue from 'vue'
let data = { counter: 0 }
export default {
  components: {
    'simple-counter': Vue.extend({
      template: '<button v-on:click="counter += 1">{{ counter}}</button>',
      // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
      // 但是我们却给每个组件实例返回了同一个对象的引用
      data: function () {
        return Object.assign({}, data)
      }
    })
  }
}
</script>
