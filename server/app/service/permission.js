/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 18:30:31
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 19:30:05
 */
const BaseService = require('./base')
module.exports = class PermissionService extends BaseService{
  constructor(...args) {
    super(...args)
    this.entity = 'Permission'
  }
}
