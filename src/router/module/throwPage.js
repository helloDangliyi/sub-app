// 子应用抛出的页面
const throwBlankLayout = () => import('@/layout/throwBlankLayout')

export default {
  path: '/micro',
  meta: { title: '抛出' },
  component: throwBlankLayout,
  children: [
    {
      path: 'test',
      meta: { title: '测试' },
      component: () => import('@/views/Test.vue')
    }
  ]
}
