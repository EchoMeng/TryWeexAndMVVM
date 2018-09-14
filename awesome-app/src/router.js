/* global Vue */
import Router from 'vue-router'
import bottombar from '@/components/bottombar'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'bottombar',
      component: bottombar
    }
  ]
})
