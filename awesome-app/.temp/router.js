import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import bottombar from '@/components/bottombar'

/* four tabbar page */
import HomeView from '@/views/HomeView.vue'
import BookView from '@/views/BookView.vue'
import DutyView from '@/views/DutyView.vue'
import MeetingView from '@/views/MeetingView.vue'
/* four tabbar page */

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'bottombar',
      component: bottombar
    },
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/',
      name: 'BookView',
      component: BookView
    },
    {
      path: '/',
      name: 'DutyView',
      component: DutyView
    },
    {
      path: '/',
      name: 'MeetingView',
      component: MeetingView
    }
  ]
})
