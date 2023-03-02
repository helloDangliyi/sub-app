import Vue from 'vue'
import VueRouter from 'vue-router'
import normalPage from './module/normalPage'
import throwPage from './module/throwPage'

Vue.use(VueRouter)

// 需要把配出页面的路由和子应用正常的路由整合
const routes = [
  normalPage,
  throwPage
]

// 删除
/* const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) */

export default routes
