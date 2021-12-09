/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 18:04:32
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-09 19:26:15
 */
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const permission = app.model.define('permission', {
    id: { type: STRING, primaryKey: true, autoIncrement: true},
    name: STRING,
    code: STRING
  }, {
    timestamps: false,
    freezeTableName: true
  })
  return permission
}
