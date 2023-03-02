import normalLayout from '@/layout/Index.vue'

// 子应用正常显示页面
export default {
  path: '/',
  meta: { title: '布局' },
  component: normalLayout,
  children: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test.vue')
    }
  ]
}
