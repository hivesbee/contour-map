import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Main from '@/components/Main'
import Hello from '@/components/Hello'
import Map from '@/components/Map'

// import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
import '../roboto.css'

Vue.use(Vuetify)
Vue.use(Router)

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
