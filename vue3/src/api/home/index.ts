/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 15:33:16
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-19 11:12:02
 */
import server from '../../utils/axios'
import axios from 'axios'

export function queryTableList(options) {
  return server({
    url: '/table',
    method: 'get'
  })
}
