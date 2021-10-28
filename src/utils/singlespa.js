/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-28 09:33:28
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-28 10:45:58
 */

/**
 * registerApplication -> 校验参数，组装microapp参数
 * apps - miscroApp list
 *
 *
 */
const apps = []
function registerApplication(
  appName,
  loadApp,
  activeWhen,
  customProps
) {
  apps.push({
    appName,
    loadApp,
    activeWhen,
    customProps
  })
  reroute()
}

function reroute() {
  loadApps()
}

function loadApps() {

  apps.toLoadPromise = toLoadPromise
}

function toLoadPromise(app) {
  app.loadApp(app).then(lib => {
    // 微应用加载的lib包，获取微应用的lib中的lifeCycle
    app.bootstrap = () => lib.bootstrap()
  })
}

// exec lifecycle function
function flattenFnArray(app, lifeCycle) {
  let fns = app[lifeCycle]
  return function(props) {
    return fns.reduce((promise, next) => {
      return promise.then(res => {
        const _promise = next(props)
        return isPromise(_promise) ? _promise : Promise.reject()
      })
    }, Promise.resolve())
  }
}


// router
function isInBrowser(){
  return typeof window !== undefined
}
if(isInBrowser) {
  window.addEventListener('hashchange', urlReroute)
  window.addEventListener('popstate', urlReroute)
}

/**
 *
 * @param {*} e
 * e.state.back(forward in browser url forward/back button)   e.state.current
 */
function urlReroute(e) {
  reroute()
}

function reroute() {

}