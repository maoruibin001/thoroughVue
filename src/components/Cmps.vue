<template>
  <div id="cmps">
    <h1>hello cmps</h1>
  </div>
</template>

<script>
  import Vue from 'vue'
  const Cmps = Vue.extend({
    template: '#cmps'
  })

  export default Cmps
</script>
