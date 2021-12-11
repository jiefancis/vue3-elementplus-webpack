/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 18:54:18
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 18:28:41
 */
const BaseController = require('./base')
const jwt = require('jsonwebtoken')
module.exports = class UserController extends BaseController{
  constructor(...args) {
    super(...args)
    this.entity = 'user'
  }
  async findUserRole() {
    const { service, app, ctx } = this
    let uname = ctx.request.query?.uname
    let result = await service.user.findUserRole(uname)
    let permissions = await this.findUserPermission(result)
    ctx.status = 200
    ctx.body = {
      code: 0,
      data: {
        result,
        permissions: permissions.flat(Infinity)
      }
    }
  }
  async findUserPermission(roles) {
    const { app, service } = this
    let rnames = roles.map(({rname}) => rname)
    let promises = rnames.map(rname => new Promise( async (resolve, reject) => {
      try{
        let result = await service.permission.findUserPermission(rname)
        resolve(result)
      } catch(e) {
        reject(e)
      }

    }))
    let result = await Promise.all(promises)
    return result
  }
}
