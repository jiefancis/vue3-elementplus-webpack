/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-23 16:46:00
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-23 16:52:22
 */
import { createAppAPI } from './createApp'
export function createRender(options) {
  const render = function() {
    console.log('createRender -- render')
    // patch()
  }
  return {
    createApp: createAppAPI(render)
  }
}
