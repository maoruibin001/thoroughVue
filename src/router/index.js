import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cmps from '@/components/Cmps'
import Data from '@/components/Data'
import Props from '@/components/Props'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cmps',
      name: 'Cmps',
      component: Cmps
    },
    {
      path: '/data',
      name: 'Data',
      component: Data
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
  ]
})
