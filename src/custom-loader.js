/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-19 10:46:25
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-19 13:50:11
 */
let flag = 1
exports.default = function(content, map, meta) {
  if(flag) {
    console.log('custom-loader', content, map, meta)
    flag--
  }
  this.callback(null, content, map, meta)
}
