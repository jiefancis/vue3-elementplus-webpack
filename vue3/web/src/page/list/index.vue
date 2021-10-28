<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-11 11:54:41
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-24 17:03:26
-->
<template>
    <div class="wrapper">
        <!--查询表单-->
        <div class="search-form">
            <el-form
                :inline="true"
                :model="state.searchFormModel"
                class="search-form--container"
                :label-position="state.labelPosition"
            >
              <el-form-item label="国际化">
                <el-select v-model="locale">
                  <el-option label="中文" value="zh"/>
                  <el-option label="英文" value="en"/>
                </el-select>
              </el-form-item>
              <el-form-item label="hooks">
                <span @click="updateStatus(++statusRef)" v-permission="111">{{status}}</span>
              </el-form-item>
              <el-form-item :label="t('home.search.user')">
                  <el-input v-model="state.searchFormModel.user" placeholder="审批人"/>
              </el-form-item>
              <el-form-item label="活动区域">
                  <el-select v-model="state.searchFormModel.area" placeholder="活动区域">
                      <el-option label="区域一" value="shanghai"/>
                      <el-option label="区域二" value="beijing"/>
                  </el-select>
              </el-form-item>
              <el-form-item label="特殊资源">
                  <el-radio-group v-model="state.searchFormModel.resource" size="medium">
                      <el-radio border label="线上品牌商赞助"></el-radio>
                      <el-radio border label="线下场地免费"></el-radio>
                  </el-radio-group>
              </el-form-item>
              <el-form-item label="活动性质">
                  <el-checkbox-group v-model="state.searchFormModel.type">
                      <el-checkbox-button label="美食/餐厅线上活动" name="type"/>
                      <el-checkbox-button label="地推活动" name="type"/>
                      <el-checkbox-button label="线下主题活动" name="type"/>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="queryTable">查询</el-button>
              </el-form-item>
            </el-form>
        </div>
        <div class="container">
            <transfer :ref="el => transferRef = el"/>
            <test>
              <template #default="scope"><div>{{scope.a}}</div></template>
              <template #bar><div>bar</div></template>
            </test>
            <v-table>
              <template #orderStatus="scope">
                订单状态{{scope?.row?.orderStatus}}
              </template>
            </v-table>
            <el-table
                border
                :data="state.tableData"
            >
                <el-table-column label="消息时间" prop="msgTime"/>
                <el-table-column label="消息类型" prop="msgType"/>
                <el-table-column label="单位名称" prop="department"/>
                <el-table-column label="消息内容" prop="content"/>
                <el-table-column label="应急单号" prop="embedNumber"/>
                <el-table-column label="调度工单号" prop="scheduleVal"/>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button @click="viewDetail(scope.row)">查看</el-button>
                        <el-button @click="deleteRow(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script lang="ts" setup>

import service from '@/utils/axios'

import {
  reactive,
  markRaw,
  toRaw,
  ref,
  onMounted,
  getCurrentInstance
} from 'vue'

import test from '@/components/jsx/test.vue'
import vTable from '@/components/jsx/table.vue'

// import { onBeforeRouteUpdate } from 'vue-router'
import { State } from '../../utils/types/list'
import useStatus from '@/hooks/useStatus'

import Transfer from '../../components/transfer.vue'

import { mapActions } from 'vuex'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { status, updateStatus } = useStatus()
const transferRef = ref<any>(null)
const statusRef = ref<number>(1)

const state = reactive<State>({
  labelPosition: 'right',
  searchFormModel: {
    user: '',
    area: '',
    type: '',
    resource: ''
  },
  tableData: [
    {
      msgTime: Date.now(),
      msgType: 1,
      department: '天安门业主',
      content: '2023年',
      embedNumber: '8008208820',
      scheduleVal: '12345678'
    },
    {
      msgTime: Date.now(),
      msgType: 1,
      department: '天安门业主',
      content: '2023年',
      embedNumber: '8008208820',
      scheduleVal: '12345678'
    },
    {
      msgTime: Date.now(),
      msgType: 1,
      department: '天安门业主',
      content: '2023年',
      embedNumber: '8008208820',
      scheduleVal: '12345678'
    },
    {
      msgTime: Date.now(),
      msgType: 1,
      department: '天安门业主',
      content: '2023年',
      embedNumber: '8008208820',
      scheduleVal: '12345678'
    }
  ]
})

// circleLife
const instance: any = getCurrentInstance()
onMounted(() => {
  // service('http://localhost:3000/a')
  // service.get('http://localhost:3000/b', {
  //   params: {
  //     id: 1,
  //     user: false
  //   }
  // })

  // const fd = new FormData()
  // fd.append('id', '1')
  // service.post('/bms/settlement/payableExpenses/initPage', fd, {
  //   headers: {
  //     'Content-Type': 'multiple/form-data'
  //   }
  // })
})
// methods
function queryTable () {
  console.log('queryTable', state.searchFormModel)
}
function viewDetail (row) {
  console.log('viewDetail', row, row.msgTime)
}

function deleteRow (row) {
  const raw = toRaw(row)
  raw.content = '2026年'
  console.log(toRaw(row), 'deleteRow', row.content, markRaw(row))
}

const { updateTab } = mapActions('home', ['updateTab'])
console.log('mapActions', updateTab)

</script>
<style lang="scss" scoped>
::v-deep(.search-form--container){
    display: flex;
    flex-wrap: wrap;
}
</style>
