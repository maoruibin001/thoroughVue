<template>
  <div>
    <h1>hello world</h1>
    <component :is="currentView"></component>
    <button @click="ok=!ok">toggle</button>

    <transition name="fade2">
      <div v-if="ok">toggled content</div>
    </transition>
  </div>
</template>

<style>
  .fade2-enter-active, .fade2-leave-active {
    transition: opacity .5s;
  }
  .fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<script>
  import info from '@/mixins/info'
  import Child from '@/components/Child'
  import Cmps from '@/components/Cmps'
  export default {
    name: 'Index',
    mixins: [info],
    data() {
      return {
        info: {
          name: 'maoruibin',
          age: 20,
          hobby: '喜好编程，爱好广泛',
          other: '阿斯顿发顺丰的撒旦飞洒速度飞开料机威尔额外诶我加热我认为靠父母支持下了的萨芬嗯我就来惹我借款人了无人机热污染杰威尔两位加入了我家人'
        },
        currentView: Cmps,
        ok: true,
      }
    },
    methods: {
      toggleView() {
        this.currentView = this.currentView === Child ? Cmps : Child
      }
    }
  }
</script>
