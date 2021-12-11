/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 18:27:35
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 17:31:11
 */
const BaseController = require('./base')
module.exports = class PermissionController extends BaseController{
  constructor(...args) {
    super(...args)
    this.entity = 'permission'
  }
}
