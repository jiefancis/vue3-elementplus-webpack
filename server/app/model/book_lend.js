/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2022-01-10 13:59:44
 * @LastEditors: wangjie
 * @LastEditTime: 2022-01-10 14:00:50
 */
module.exports = app => {
  const { STRING, NUMBER, DATE } = app.Sequelize
  const lend = app.model.define('lend',
  {
    id: { type: STRING, primaryKey: true, autoIncrement: true },
    user_id: { type: STRING },
    book_id: { type: STRING },
    borrow_time: { type: DATE },
    return_time: { type: DATE }
  },
  {
    timestamps: false,
    freezeTableName: true
  })
  return book
}
