/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-16 10:51:52
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-16 11:35:33
 */
module.exports = app => {
  const { STRING, TEXT } = app.Sequelize
  const message = app.model.define('message', {
    id: { type: STRING, primaryKey: true, autoIncrement: true },
    userid: STRING,
    message: TEXT,
    groupid: STRING
  }, {
    timestamps: false,
    freezeTableName: true
  })
  return message
}
