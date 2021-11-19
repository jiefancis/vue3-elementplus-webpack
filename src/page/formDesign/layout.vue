<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-19 14:25:12
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-19 18:25:31
-->
<template>
  <n-layout width="100%" height="100%">
    <n-layout-content>
      <div class="zhqc-layout--wrapper">
        <div class="layout-components">
          <slot name="component"></slot>
        </div>
        <div class="layout-container">
          <slot name="container"></slot>
        </div>
        <div class="layout-setting">
          <slot name="setting"></slot>
        </div>
      </div>
    </n-layout-content>
  </n-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { NLayout, NLayoutContent } from 'naive-ui'
export default defineComponent({
  components: {
    NLayout,
    NLayoutContent
  }
})
</script>
<style lang='scss' scoped>
.zhqc-layout--wrapper{
  display: flex;
  justify-content: space-between;
  .layout-components{
    width: 400px;
    background: #fff;
  }
  .layout-container{
    flex: 1
  }
  .layout-setting{
    width: 400px;
    background: #fff;
  }
}
</style>
