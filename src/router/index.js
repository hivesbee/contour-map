import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Hello from '@/components/Hello'

Vue.use(Router)

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
