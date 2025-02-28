import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Home from '@/pages/home/Home.vue'
import Schedule from '@/pages/schedule/Schedule.vue'

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
        path: 'schuedule',
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
