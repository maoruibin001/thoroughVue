<template>
  <div>
    <input type="text" v-model="msgP">
    <child v-bind='parentMsg'></child>
  </div>
</template>

<script>
  import child from './Child.vue'
  export default {
    components: {
      child
    },
    data() {
      return {
        msgP: 'name',

      }
    },
    computed: {
      parentMsg() {
        return {
          name: this.msgP,
          age: this.msgP
        }
      }
    }
  }
</script>
