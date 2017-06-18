import Vue from 'vue'
import Router from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps'

import Main from '@/components/Main'
import Hello from '@/components/Hello'

Vue.use(Router)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBErs3fDyQiX7Lmc4gy1UaLOhW3tU3xyjU',
    libraries: 'places'
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/hello/',
      name: 'Hello',
      component: Hello
    }

  ]
})
