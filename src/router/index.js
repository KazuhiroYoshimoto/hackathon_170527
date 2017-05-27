import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop.vue'
import Driver from '@/components/Driver.vue'
import Farmer from '@/components/Farmer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/driver',
      name: 'Driver',
      component: Driver
    },
    {
      path: '/farmer',
      name: 'Farmer',
      component: Farmer
    }
  ]
})
