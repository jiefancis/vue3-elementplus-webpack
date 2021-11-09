<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 11:27:26
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 15:08:55
-->
<!--
  usage
    <m-table-column
      prop="name"
      label="用户名"/>
-->

<template>
  <div class="m-table__column" >
    <div
      class="m-table__column--data"
      v-for="item in tableData"
      :key="Symbol(item)"
    >
      <slot>111</slot>
    </div>
  </div>
</template>


<!-- setup -->
<script lang="ts" setup>
import { defineProps, useAttrs } from 'vue'

// @ts-check
interface Props{
  prop: string,
  label?: string,
  data?: Array<Record<string, any>>
}
const props = defineProps<Props>()
const data =
console.log('props--column', props)
</script>

<!-- defineComponent -->
<!-- <script lang="ts"></script> -->

<style lang="scss" scoped>
.m-table__column{
  min-width: 100px;
  min-height: 30px;
}
</style>