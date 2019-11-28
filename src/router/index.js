import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductsnServices from '../views/Products.vue'
import Contact from '../views/ContactsUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsnServices 
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contact 
  }
]

const router = new VueRouter({
  routes
})

export default router
