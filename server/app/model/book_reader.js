/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2022-01-10 13:41:54
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-10 13:56:54
 */

module.exports = app => {
  const { STRING, NUMBER, } = app.Sequelize
  const reader = app.model.define('reader', {
    id: { type: STRING, primaryKey: true, autoIncrement: true },
    author: { type: STRING },
    name: { type: STRING },
    type: { type: NUMBER },
    count: { type: NUMBER }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
  )
  return reader
}
