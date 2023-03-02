/**
 * 微前端子应用路由跳转
 * @param {String} url 路由
 * @param {Object} mainRouter 主应用路由实例
 * @param {*} params 状态对象：传给目标路由的信息,可为空
 */

const qiankunJump = (url, mainRouter, params) => {
  if (mainRouter) {
    // 使用主应用路由实例跳转
    mainRouter.push({ path: url, query: params })
    return
  }
  // 未传递主应用路由实例，传统方式跳转
  let searchParams = '?'
  let targetUrl = url
  if ( typeOf (params) === 'object' && Object.keys(params).length) {
    Object.keys(params).forEach(item => {
      searchParams += `${item}=${params[item]}&`
    })
    targetUrl = targetUrl + searchParams.slice(0, searchParams.length - 1)
  }
  window.history.pushState(null, '', targetUrl)
}
