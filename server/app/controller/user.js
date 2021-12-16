/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 18:54:18
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-16 11:26:29
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

  async sendMessage() {
    const { service, ctx } = this
    const { msg, groupid } = ctx.request.body || {}
    const { id } = ctx.session?.user || {id:1}
    console.log('query', msg, groupid, id)
    try {
      const result = await service.user.sendMessage({userid: id, message: msg, groupid})
      console.log('resultresult', result)
      ctx.status = 200
      ctx.body = {
        code: 0,
        message: '发送成功'
      }
    } catch(err) {
      ctx.status = 500
      ctx.body = {
        code: 500,
        message: err
      }
    }
  }
}
