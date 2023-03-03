/**
 * 微前端子应用路由跳转
 * @param {String} url 路由
 * @param {Object} mainRouter 主应用路由实例
 * @param {*} params 状态对象：传给目标路由的信息,可为空
 */

const qiankunJump = (url, mainRouter, params) => {
  // 1、将主应用的路由实例通过 props 传给子应用，子应用用这个路由实例跳转
  if (mainRouter) {
    // 使用主应用路由实例跳转
    mainRouter.push({ path: url, query: params })
    return
  }
  // 未传递主应用路由实例，传统方式跳转
  let searchParams = '?'
  let targetUrl = url
  if (typeof (params) === 'object' && Object.keys(params).length) {
    Object.keys(params).forEach(item => {
      searchParams += `${item}=${params[item]}&`
    })
    targetUrl = targetUrl + searchParams.slice(0, searchParams.length - 1)
  }

  // 2、history 模式时，通过 history.pushState() 方式跳转
  window.history.pushState(null, '', targetUrl)
}

export default {
  qiankunJump
}
