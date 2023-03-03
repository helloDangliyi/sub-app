import normalLayout from '@/layout/Index.vue'

// 子应用正常显示页面
export default {
  path: '/',
  meta: { title: '布局' },
  component: normalLayout,
  children: [
    {
      path: '/',
      name: 'homeApplication',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/aboutApplication',
      name: 'aboutApplication',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/testApplication',
      name: 'testApplication',
      component: () => import('@/views/Test.vue')
    },
    {
      path: '/baiduMap',
      name: 'BaiduMap',
      component: () => import('@/views/BaiduMap.vue')
    }
  ]
}
