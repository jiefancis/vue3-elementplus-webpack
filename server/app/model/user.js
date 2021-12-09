/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 21:07:37
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 16:39:50
 */
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('users', {
    id: { type: STRING, primaryKey: true, autoIncrement: true},
    name: STRING(30),
    password: STRING(30)
  }, {
    timestamps: false
  })
  return  User
}
