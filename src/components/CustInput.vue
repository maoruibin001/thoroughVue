<template>
  <div>
    <h1>hello world, i am cust</h1>
    <h1>props: {{checked}}</h1>
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: ['checked'],
    mounted() {
    },
    data() {
      return {
//        checked: '222'
      }
    }
  }
</script>
