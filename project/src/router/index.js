import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'
import User from '../components/User'
import Feed from '../components/Feed'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/registration',
      component: Login,
    },
    {
      path: '/User',
      component: Login,
    },
    {
      path: '/Feed',
      component: Login,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
