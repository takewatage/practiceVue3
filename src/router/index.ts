import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
  strict: true,
  history: createWebHistory(),
  routes,
})

export default router
