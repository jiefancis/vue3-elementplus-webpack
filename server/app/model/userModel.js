/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-08 21:07:37
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-08 21:09:50
 */
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: STRING, primaryKey: true, autoIncrement: true},
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE
  })
  return  User
}
