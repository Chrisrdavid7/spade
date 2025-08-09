import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Tour from './pages/Tour.vue'
import Bookings from './pages/Bookings.vue'
import Press from './pages/Press.vue'
import Shop from './pages/Shop.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/tour', component: Tour },
  { path: '/bookings', component: Bookings }, 
  { path: '/press', component: Press },
  { path: '/shop', component: Shop }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
