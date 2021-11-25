/*
 * @Descripttion: 路由自动化配置
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-13 11:44:40
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 15:41:17
 */
import { ComponentInternalInstance } from 'vue'
import { RouteRecordRedirectOption } from 'vue-router'
interface Routes {
  path: string;
  component: ComponentInternalInstance;
  children?: Array<Routes> | null;
  push?: (params: Routes) => void;
  redirect?: RouteRecordRedirectOption;
}
function useRequireContext (): Array<Routes> {
  const routes: Array<Routes> = []
  const context = require.context('@/page', true, /\.vue$/)
  context.keys().forEach((path) => {
    const defaultOptions = context(path).default
    const fullpath = path.replace('./', 'page/')
    routes.push({
      path: '/' + fullpath.replace(/\//g, '_').split('.')[0],
      component: defaultOptions
    })
  })
  return routes
}

export default useRequireContext
