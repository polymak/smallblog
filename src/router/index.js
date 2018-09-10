import Vue from 'vue'
import Router from 'vue-router'
import intro from '@/components/intro'
import myblog from '@/components/myblog'
import aproposblog from '@/components/aproposblog'
import contactme from '@/components/contactme'
import carriere from '@/components/carriere'
import mission from '@/components/mission'
import job from '@/components/job'
import coursweb from '@/components/coursweb'
import coursandroid from '@/components/coursandroid'
import coursdatabase from '@/components/coursdatabase'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: intro
    }, {
      path: '/myblog',
      name: 'myblog',
      component: myblog
    }, {
      path: '/aproposblog',
      name: 'aproposblog',
      component: aproposblog
    }, {
      path: '/contactme',
      name: 'contactme',
      component: contactme
    }, {
      path: '/carriere',
      name: 'carriere',
      component: carriere
    }, {
      path: '/mission',
      name: 'mission',
      component: mission
    }, {
      path: '/job',
      name: 'job',
      component: job
    }, {
      path: '/coursweb',
      name: 'coursweb',
      component: coursweb
    }, {
      path: '/coursandroid',
      name: 'coursandroid',
      component: coursandroid
    }, {
      path: '/coursdatabase',
      name: 'coursdatabase',
      component: coursdatabase
    }
  ]
})
