<template>
  <div>
    <h1>age: {{age}}</h1>
    <h1>name: {{name}}</h1>
  </div>
</template>

<script>
  export default {
    props: ['age', 'name'],
    mounted() {
      console.log(this.$parent);
      console.log(this.$root)
    }
  }
</script>
