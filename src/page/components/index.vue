<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-08 19:58:23
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 20:36:42
-->
<template>
  <div class="demo">
    <div>{{inputValue}}</div>
    <mInput v-model:value="inputValue"/>
    <m-table :columns="columns" :data="tableData"/>
    <m-checkbox v-model:value="checked"><template #label><span>备选项1</span></template><template #label2><span>{{checked}}</span></template></m-checkbox>
    <!-- <mTable :data="data">
      <m-table-column prop="name" label="姓名"></m-table-column>
      <mTableColumn prop="account" label="账号"/>
      <mTableColumn prop="pwd" label="密码"/>
    </mTable> -->
    <mCheckboxGroup>
      <m-checkbox
        v-model:value="checked"
        v-for="num in 6"
        :key="num"><template #label><span>备选项{{num}}</span></template></m-checkbox>
    </mCheckboxGroup>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import mInput from './package/input/index.vue'
// import { mTable, mTableColumn } from './package/table'
import mTable from './package/table/index.vue'
import mCheckbox from './package/checkbox/index.vue'
import mCheckboxGroup from './package/checkbox/group.vue'

console.log('mInput', mInput)
let inputValue = ref<string>('1')
let checked = ref<boolean>(false)
const columns = [
  {
    key: 'name',
    title: '姓名'
  },
  {
    key: 'account',
    title: '账号'
  },
  {
    key: 'pwd',
    title: '密码'
  }
]
function toggleCheckbox() {
  console.log('toggleCheckbox', arguments)
}
function createData(){
  return [
    {
      name: '张三',
      account: 'zhangsan',
      pwd: '123456'
    },
    {
      name: '李四',
      account: 'lisi',
      pwd: '1234567'
    },
    {
      name: '王五',
      account: 'wangwu',
      pwd: '12345678'
    }
  ]
}
const tableData = createData() as Array<Record<string, any>>
</script>