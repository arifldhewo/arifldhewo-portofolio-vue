import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CreateProjectView from '@/views/admin/project/CreateProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cms/project/create',
      name: 'createProject',
      component: CreateProjectView
    }
  ]
})

export default router
