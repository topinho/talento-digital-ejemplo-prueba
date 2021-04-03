import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ordenes from '../views/Ordenes.vue'
import Inventario from '../views/Inventario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ordenes',
    name: 'Ordenes',
    component: Ordenes
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: Inventario
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
