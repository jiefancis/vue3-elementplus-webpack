<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-26 11:40:34
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-26 14:26:20
-->
<template>
  <div class="scroll-pane">
    <el-scrollbar height="40px" ref="$scrollbar" @wheel.prevent="handleScroll">
      <slot />
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const $scrollbar = ref()

function handleScroll(e) {
  const wheelDelta = e.wheelDelta || -e.deltaY * 40
  const $scrollWrapper = $scrollbar.value.$refs.wrap
  $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + wheelDelta / 4
}
</script>

<style lang="scss" scoped>
.scroll-pane {
  height: 40px;
}
::v-deep(.el-scrollbar__bar.is-horizontal) {
  bottom: 0;
  height: 0;
}
::v-deep(.el-scrollbar__view) {
  white-space: nowrap;
  text-align: left;
}
</style>
