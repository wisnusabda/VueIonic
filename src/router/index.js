import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes  = [
  {
    path: '/',
    redirect: 'start'
  },
  {
    path: '/start',
    component: () => import('@/views/start.vue')
  },
  {
    path: '/account',
    component: () => import('@/views/Account.vue')
  },
  {
    path: '/privacy',
    component: () => import('@/views/Privacy.vue')
  },
  {
    path: '/card1',
    component: () => import('@/views/Card1.vue')
  },
  {
    path: '/trending',
    component: () => import('@/views/Trending.vue')
  },
  {
    path: '/Settings',
    component: () => import('@/views/Settings.vue') 
  },
 
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'new',
        component: () => import('@/views/NewPage.vue')
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: 'notification',
        component: () => import('@/views/Notification.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
