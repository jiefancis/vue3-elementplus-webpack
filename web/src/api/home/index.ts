/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 15:33:16
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:23:38
 */
import server from '../../utils/axios'

export function queryTableList (options) {
  return server({
    url: '/table',
    method: 'get'
  })
}
