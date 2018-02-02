import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import Cmps from '@/components/Cmps'
import Data from '@/components/Data'
import Props from '@/components/Props'
import Logic from '@/components/Logic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Logic',
      name: 'Logic',
      component: Logic
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
