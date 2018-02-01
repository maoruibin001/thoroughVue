/**
 * Created by lenovo on 2018/1/30.
 */
import Vue from 'vue'

Vue.directive('focus', (el) => {
  // console.log(el)
  el.focus()
  el.style.color = 'red'
})
