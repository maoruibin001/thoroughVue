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
        show: false,
        html2: '<span>hello world</span>'
      }
    },
    errorCaptured(err, vm, info) {
      if (err) {
        this.show = true;
        this.errorMsg = info;
      }
    }
  }
</script>
