import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'

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
      path: '/HomeView',
      component: HomeView
    },
    {
      path: '/BookView',
      component: BookView
    },
    {
      path: '/DutyView',
      component: DutyView
    },
    {
      path: '/MeetingView',
      component: MeetingView
    },
    {
      path: '/',
      redirect: '/HomeView'
    }
  ]
})
