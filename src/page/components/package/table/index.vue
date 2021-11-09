<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 15:24:01
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 16:22:59
-->
<template>
  <div class="m-table">
    <div class="m-table__header">
      <mTableHeader :columns="props.columns"/>
    </div>
    <div class="m-table__body">
      <mTableBody v-for="cell in props.data" :data="cell"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import mTableHeader from './m-table--header.vue'
import mTableBody from './m-table--body.vue'
import { defineProps } from 'vue'

// @ts-check
interface Props{
  columns: Record<string, any>[],
  data: Record<string, any>[]
}
const props = defineProps<Props>()
console.log('index.vue', props)

</script>
<style lang="scss" scoped>
.m-table__header,
{
  display: flex;
  justify-content: space-between;
  border: 1px solid #fff;
  border-left: none;
  border-right: none;
}
</style>