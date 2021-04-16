import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ordenes from '../views/Ordenes.vue'
import Orden from '../views/Orden.vue'
import Inventario from '../views/Inventario.vue'
import Despachos from '../views/Despachos.vue'
import Productos from '../views/Productos.vue'

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
    path: '/orden',
    name: 'Orden',
    component: Orden
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: Inventario
  },
  {
    path: '/despachos',
    name: 'Despachos',
    component: Despachos
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
