import { createRouter, createWebHistory } from 'vue-router'

import ContactPage from '@/components/Home/ContactPage.vue'
import HomePage from '@/components/Home/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/contact',
      component: ContactPage,
    },
  ],
})

export default router
