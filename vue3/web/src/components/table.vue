<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-09 16:24:11
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-10 15:00:31
-->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-table border :data="tableData">
      <el-table-column
        v-for="(item, index) in fieldList"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      >
        <!-- <template #default="scope">
          <div>{{scope.row[item.prop]}}</div>
        </template> -->

      </el-table-column>

      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            v-for="(item, index) in handler"
            :key="index"
            @click="$emit('dispatchEvent', item.event, scope)"
            >{{ item.label }}</el-button
          >
          <el-button @click="$emit('dispatchEvent', 'add', 1)">table</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">

import {
  defineComponent,
  reactive,
  toRefs,
  defineProps
} from 'vue'

export default defineComponent({
  // props: {
  //   tableData: {
  //     type: Array,
  //     default(){
  //       return [
  //       {
  //         date: "2016-05-02",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1518 弄",
  //       },
  //       {
  //         date: "2016-05-04",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1517 弄",
  //       },
  //       {
  //         date: "2016-05-01",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1519 弄",
  //       },
  //       {
  //         date: "2016-05-03",
  //         name: "王小虎",
  //         address: "上海市普陀区金沙江路 1516 弄",
  //       },
  //     ]
  //     }
  //   },
  //   handler: Object
  // },
  emits: ['dispatchEvent'],
  setup (props, context) {
    console.log('table components', props, context)
    const state = reactive({
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      fieldList: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      handler: [{}]
    })
    return {
      ...toRefs(state)
      // tableData: props.tableData
    }
  }
})
</script>
