import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  }
]

// 删除
/* const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) */

export default routes
