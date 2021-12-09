/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 18:14:40
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 19:29:49
 */
const BaseController = require('./base')
module.exports = class RoleController extends BaseController{
  constructor(...args) {
    super(...args)
    this.entity = 'Role'
  }
}

