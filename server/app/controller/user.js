/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 18:54:18
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-08 20:59:58
 */
const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken')
module.exports = class UserController extends Controller{
  async signin() {
    const { ctx } = this
    let query = ctx.request.query;
    console.log('ctx.session.user.token', ctx.session)
    if(query.name && query.pass) {
      jwt.verify(ctx.session.user.token, this.config.jwtSecret, function(err, decoded) {
        if(err) {
          ctx.body = {
            code: 0,
            message: err
          }
        } else {
          ctx.body = {
            code: 200,
            message: query
          }
        }
      })
      // token = jwt.sign(query, this.config.jwtSecret)
      // ctx.body = {
      //   token
      // }
    } else {
      ctx.body = {
        message: 'sign fail',
        ...query
      }
    }
  }
  async signup() {
    const { ctx } = this
    let query = ctx.request.query;
    let token = ''
    if(query.name && query.pass) {
      token = jwt.sign(query, this.config.jwtSecret)
      ctx.session.user = { ...query, token }
      ctx.body = {
        token
      }
    } else {
      ctx.body = {
        message: 'null',
        ...query
      }
    }
  }
  async test() {
    this.ctx.body={data: 1}
  }
}
