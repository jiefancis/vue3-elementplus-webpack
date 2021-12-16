/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-16 11:37:30
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-16 11:45:42
 */
const BaseController = require('./base')
module.exports = class GroupController extends BaseController{
  constructor(...args) {
    super(...args)
    this.entity = 'group'
  }
}
