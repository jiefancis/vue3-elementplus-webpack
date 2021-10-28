/*
 * @Descripttion: 公共方法
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-13 09:09:56
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-27 16:54:32
 */

// 处理url path
export function dealPath (menuNameNick: string): string {
  const path = '/' + menuNameNick.replace(/\//g, '_')
  return path
}
