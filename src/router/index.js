import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Brazil from '@/views/BrazilView.vue'
import Australia from '@/views/AustraliaView.vue'
import Egypt from '@/views/EgyptView.vue'
import France from '@/views/FranceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/brazil',
    component: Brazil
  },
  {
    path: '/australia',
    component: Australia
  },
  {
    path: '/egypt',
    component: Egypt
  },
  {
    path: '/france',
    component: France
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
