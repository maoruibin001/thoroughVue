<template>
  <div>
    <p v-if="type === 'A'">name: {{name}}</p>
    <p v-else-if="type === 'B'">age: {{age}}</p>
    <p v-else> ele : {{ele}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'hello',
        age: '20',
        type: 'C',
        ele: 'ele'
      }
    }
  }
</script>
