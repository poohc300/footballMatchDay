import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/views/home/Home.vue'
import Schedule from '@/views/schedule/Schedule.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'schedule',
        component: Schedule
      },
     
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
