// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Error from './Error'
import router from './router'
import './directives/focus'
import './golbalComponents/mycmps'

Vue.config.productionTip = false

// Vue.config.silent = true
/* eslint-disable no-new */

Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info)
}

const vm = new Vue({
  comments: true,
  el: '#app',
  router,
  delimiters: ['<%', '%>'],
  components: {
    App ,
    Error
  },
  // render: createElement =>  createElement(App)
  template: '<Error><App/></Error>'
})
// new Vue({
//   render: function (createElement) {
//     var myParagraphVNode = createElement('p', 'hi')
//     return createElement('div', [
//       // 错误-重复的 VNodes
//       myParagraphVNode, myParagraphVNode,createElement('p', {style: {color: 'red'}}, 'hello world')
//     ])
//   },
//   renderError (h, err) {
//     return h('pre', { style: { color: 'red' }}, err.stack)
//   }
// }).$mount('#app')


