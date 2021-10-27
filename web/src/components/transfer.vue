<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-11 14:47:33
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 15:47:40
-->
<template>
  <div class="transfer-wrapper">
    <div class="left" @dragover="ondragover" @drop="ondrop">
      <el-checkbox-group v-model="state.leftCheckedList">
        <el-checkbox
          draggable="true"
          v-for="(item, index) in state.left"
          :key="index"
          v-model="item.checked"
          :label="item.label"
          @dragstart="(e) => ondragstart(e, index, 'left')"
        ></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="action">
      <el-button
        :type="state.rightCheckedList.length ? 'primary' : ''"
      >
        《
      </el-button>
      <el-button
        :type="state.leftCheckedList.length ? 'primary' : ''"
      >
        》
      </el-button>
    </div>
    <div class="right" @dragover="ondragover" @drop="ondrop">
      <el-checkbox-group v-model="state.rightCheckedList" border>
        <el-checkbox
          draggable="true"
          v-for="(item, index) in state.right"
          :key="index"
          v-model="item.checked"
          :label="item.label"
          @dragstart="(e) => ondragstart(e, index, 'right')"
        ></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  toRaw,
  ref
} from 'vue'

const state = reactive({
  leftCheckedList: [],
  rightCheckedList: [],
  left: [
    { label: '备选项1', checked: false },
    { label: '备选项2', checked: false },
    { label: '备选项3', checked: false },
    { label: '备选项4', checked: false },
    { label: '备选项5', checked: false },
    { label: '备选项6', checked: false }
  ],
  right: [{ label: '备选项7', checked: false }]
})

// drag
let curIndex = -1
let curType = ''
let checkedList: any = null
let checked = null

/**
 * 拖拽开始
 */
function ondragstart(e, index, type) {
  curIndex = index
  curType = type
  checkedList = state[type + 'CheckedList']
  checked = state?.[type]?.[index]
  checkedList.push(toRaw(checked))
}
function ondragover(e) {
  e.preventDefault()
}
interface CheckedItem {
  label: string
  checked: boolean
}
/**
 * 放下拖拽
 */
function ondrop(e) {
  let from: any = null
  let to: any = null

  if (curType === 'left') {
    from = state.left
    to = state.right
  }
  if (curType === 'right') {
    from = state.right
    to = state.left
  }
}

const a = 1
const b = ref(2)
</script>

<style lang="scss" scoped>
.transfer-wrapper {
  display: flex;
  width: 400px;
  .action {
    display: flex;
    height: 50px;
    width: 132px;
    align-items: center;
  }
}
.left,
.right {
  border: 1px solid #ccc;
  padding: 5px 40px;
}
</style>
