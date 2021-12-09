/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 18:30:05
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 19:30:10
 */
const BaseService = require('./base')
module.exports = class RoleService extends BaseService{
  constructor(...args) {
    super(...args)
    this.entity = 'Role'
  }
}
