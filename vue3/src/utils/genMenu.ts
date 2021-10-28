/*
 * @Descripttion: 生成权限菜单
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-27 16:52:28
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-27 16:55:46
 */
import { dealPath } from './index'

function generaMenu (menus, data) {
  data.forEach((item) => {
    let menu = Object.assign({}, item)
    let path = item.path
    if (!path) {
      path = dealPath(item.menuNameNick)
    }
    menu = {
      icon: item.icon,
      index: path,
      title: item.menuName
    }
    if (item.childMenus && item.childMenus.length > 0) {
      menu.subs = []
      generaMenu(menu.subs, item.childMenus)
    }
    menus.push(menu)
  })
}

export default (menus, data) => {
  generaMenu(menus, data)
}
