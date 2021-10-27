/*
 * @Descripttion: 处理权限路由格式
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-27 16:49:57
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:06:41
 */
import { dealPath } from './index'

function generaMenu (routers, data) {
  data.forEach((item) => {
    let menu = Object.assign({}, item)
    let path = item.path
    if (!path) {
      path = dealPath(item.menuNameNick)
    }
    menu = {
      path,
      component: loadView(item.menuNameNick),
      meta: {
        title: item.menuName,
        menuId: item.menuId,
        pageOpKeyList: item.pageOpKeyList
      }
    }
    if (item.childMenus && item.childMenus.length > 0) {
      if (item.isRoot) {
        menu.children = []
        generaMenu(menu.children, item.childMenus)
      } else {
        generaMenu(routers, item.childMenus)
      }
    }
    routers.push(menu)
  })
}

const loadView = (name) => {
  return (resolve) => require([`@/${name}`], resolve)
}

export default (routers, data) => {
  generaMenu(routers, data)
}
