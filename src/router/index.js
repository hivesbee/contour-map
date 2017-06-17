import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'

import Main from '@/components/Main'
import Hello from '@/components/Hello'
import Map from '@/components/Map'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/map/',
      name: 'Map',
      component: Map
    },
    {
      path: '/hello/',
      name: 'Hello',
      component: Hello
    }

  ]
})
