<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-09 16:40:38
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-13 14:31:01
-->

1. "Unknown column 'created_at' in 'field list'"
   app.model.define(tableName, tableFields, { timestamps: false})

2. transaction

```

let transaction;

try {
  // get transaction
  transaction = await sequelize.transaction();

  // step 1
  await Model.destroy({ where: {id}, transaction });

  // step 2
  await Model.create({}, { transaction });

  // step 3
  await Model.update({}, { where: { id }, transaction });

  // commit
  await transaction.commit();

} catch (err) {
  // Rollback transaction only if the transaction object is defined
  if (transaction) await transaction.rollback();
}
```
