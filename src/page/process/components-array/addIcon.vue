<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:12:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-15 15:57:31
-->
<template>
  <div class="add-icon">
    <span class="add-icon__circle" @click.stop.prevent="addFlowNode">
      +
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue"
export default defineComponent({
  props: {
    index: Number
  },
  setup(props) {
    const nodeOps = inject('nodeOps') as Record<string, any>

    console.log('nodeOps in addIcon', nodeOps)
    return {
      addFlowNode: (...args) => nodeOps.addFlowNode(...args, props.index)
    }
  }
})
</script>
<Style lang="scss" scoped>
.add-icon{
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &__circle{
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #ff6a00;
    background: #fff;
    border-radius: 50%;
  }
}
</Style>
