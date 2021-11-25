<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 15:25:04
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 16:26:45
-->

<template>
  <div class="m-table__body">
    <div class="m-table__body--cell"
      v-for="value in Object.values(data)"
      :key="() => Symbol(value)"
    >
      {{ value }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  props: {
    data: Object
  },
  setup(props, ctx) {
    console.log('m-table-header', props, ctx)
    return {
      data: props.data
    }
  }
})
</script>
<style lang="scss" scoped>
.m-table__body{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  &--cell{
    flex:1
  }
}
</style>