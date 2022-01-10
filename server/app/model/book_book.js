/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2022-01-10 13:46:32
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-10 13:51:08
 */
module.exports = app => {
  const { STRING, NUMBER, } = app.Sequelize
  const book = app.model.define('book',
  {
    id: { type: STRING, primaryKey: true, autoIncrement: true },
    borrow_id: { type: STRING },
    name: { type: STRING },
    sex: { type: NUMBER },
    age: { type: NUMBER }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
  return book
}
