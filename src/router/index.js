import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/google_auth',
      name: 'Google Authentication',
      component: () => import('../views/GoogleSignView.vue')
    }
  ]
})

export default router
