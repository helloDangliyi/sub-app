import Vue from 'vue'
import App from './App.vue'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import common from '@/utils/common.js'

// 1.引入routes,VueRouter
import VueRouter from 'vue-router'
import routes from './router'

import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'TWzwa8UKKbmxV2aaFjGaczy06xzZV3ON'
})

// 全局工具方法
Object.keys(common).forEach((item) => {
  Vue.prototype[`$${item}`] = common[item]
})

const token = localStorage.getItem('token')
console.log('app1中打印token：', token)

// 2.删除
/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

// 3.下面添加
// 微前端-子应用配置
let router = null
let instance = null

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue/' : '/', // 抛出路由加前缀
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
export default instance

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  // props 包含主应用传递的参数  也包括为子应用 创建的节点信息
  console.log('[vue] props from main framework', props)
  if (props.router) {
    store.state.router = props.router
  }
  render(props)
}

export async function unmount () {
  instance.$destroy()
  instance = null
  router = null
}
