import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'signup',
    path: '/signup',
    component: Signup
  },
  {
    name: 'not-found',
    path: '/404'
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router