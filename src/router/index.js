import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Courses from '@/components/Courses'
import Pages from '@/components/Pages'
import Blog from '@/components/Blog'
import Shop from '@/components/Shop'
import Elements from '@/components/Elements'
import aboutus from '@/components/Aboutus'
import admission from '@/components/admission'
import contactus from '@/components/contactus'
import events from '@/components/events'
import students from '@/components/students'
import latesnews from '@/components/latesnews'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/courses',
      name: 'courses',
      component: Courses
    }, {
      path: '/pages',
      name: 'pages',
      component: Pages
    }, {
      path: '/blog',
      name: 'blog',
      component: Blog
    }, {
      path: '/shop',
      name: 'shop',
      component: Shop
    }, {
      path: '/elements',
      name: 'elements',
      component: Elements
    }, {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    }, {
      path: '/admission',
      name: 'admission',
      component: admission
    }, {
      path: '/events',
      name: 'events',
      component: events
    }, {
      path: '/students',
      name: 'students',
      component: students
    }, {
      path: '/latesnews',
      name: 'latesnews',
      component: latesnews
    }, {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    }
  ]
})
