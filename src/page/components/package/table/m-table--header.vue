<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 15:25:04
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 16:20:19
-->

<template>
  <!-- <div class="m-table__header"> -->
    <div class="m-table__header--cell"
      v-for="cell in columns"
      :key="cell.key"
    >
      {{cell.title}}
    </div>
  <!-- </div> -->
</template>
<script lang="ts">
import { defineComponent } from "vue"
// @ts-check
type ColumnsType = Record<string, any>[]
export default defineComponent({
  props: {
    columns: Array
  },
  setup(props, ctx) {
    console.log('m-table-header', props, ctx)
    return {
      columns: props.columns
    }
  }
})
</script>
<style lang="scss" scoped>
.m-table__header--cell{
  flex: 1
}
</style>