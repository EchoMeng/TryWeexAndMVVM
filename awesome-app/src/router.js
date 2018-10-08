/* global Vue */
import Router from 'vue-router'
import bottombar from './components/bottombar.vue'

/* four tabbar page */
import HomeView from './views/home.vue'
import BookView from './views/book.vue'
import DutyView from './views/duty.vue'
import MeetingView from './views/meeting.vue'
/* four tabbar page */

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bottombar',
      component: bottombar
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/book',
      component: BookView
    },
    {
      path: '/duty',
      component: DutyView
    },
    {
      path: '/meeting',
      component: MeetingView
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
