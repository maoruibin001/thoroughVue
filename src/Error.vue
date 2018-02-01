<template>
  <div>
    <h1  v-if="show">errorMsg: <pre>{{JSON.stringify(errorMsg)}}</pre></h1>
    <div v-else><slot></slot></div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        errorMsg: '',
        show: false
      }
    },
    errorCaptured(err, vm, info) {
      debugger;
      if (err) {
        this.show = true;
        this.errorMsg = info;
      }
    }
  }
</script>
