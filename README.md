# sub-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

<!-- 子应用的改造 -->

1. `router`文件的修改

   ```java
   // 删除
    const router = new VueRouter({
     mode: 'history',
     base: process.env.BASE_URL,
     routes
   }) 
   ```

   

   2.main.js 最终修改为

   ```javascript
   import Vue from 'vue'
   import App from './App.vue'
   import store from './store'
   
   // 1.引入routes,VueRouter
   import VueRouter from 'vue-router'
   import routes from './router'
   
   Vue.config.productionTip = false
   
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
       base: window.__POWERED_BY_QIANKUN__ ? '/sub-vue/' : '/', // 抛出路由加前缀,用于跟主应用的activeRule: '/sub-vue/'相对应。然后通过主应用路由的匹配就可以激活子应用，渲染在指定的div中。
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
     render(props)
   }
   
   export async function unmount () {
     instance.$destroy()
     instance = null
     router = null
   }
   
   ```

   3.`vue.config.js`修改为

   ```javascript
   const { name } = require('./package.json')
   
   module.exports = {
     publicPath: '/', // 打包相对路径
     devServer: {
       port: 8081, // 运行端口号
       headers: {
         'Access-Control-Allow-Origin': '*' // 防止加载时跨域
       }
     },
     chainWebpack: config => config.resolve.symlinks(false),
     configureWebpack: {
       output: {
         library: `${name}-[name]`,
         libraryTarget: 'umd', // 把微应用打包成 umd 库格式
         jsonpFunction: `webpackJsonp_${name}`
       }
     }
   }
   
   ```

   

