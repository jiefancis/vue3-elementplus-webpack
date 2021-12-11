/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 18:30:31
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 18:24:44
 */
const BaseService = require('./base')
module.exports = class PermissionService extends BaseService{
  constructor(...args) {
    super(...args)
    this.entity = 'Permission'
  }
  async findUserPermission(rname) {
    const { app } = this
    console.log('service -- rname', rname)
    let result = await app.model.RolePermission.findAll({ where: { rname }})
    return result
  }
}
