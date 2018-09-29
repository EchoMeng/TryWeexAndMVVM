import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import bottombar from '@/components/bottombar'

/* four tabbar page */
import HomeView from '@/views/home.vue'
import BookView from '@/views/book.vue'
import DutyView from '@/views/duty.vue'
import MeetingView from '@/views/meeting.vue'
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
