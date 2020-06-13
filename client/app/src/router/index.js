import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Main from '../views/Main.vue'

import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    name: 'main',
    path: '/',
    component: Main,
  },
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

router.beforeEach((to, from, next) => {
  if (to.name == 'main' && !store.getters.isLoggedIn) {
    return next('/login')
  }
  if (to.name == 'not-found') {
    return next('/')
  }
  next()
})

export default router