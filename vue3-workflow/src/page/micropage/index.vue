<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-28 11:17:13
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-28 11:47:27
-->
<template>
  <div class="micropage">
    <div id="microApp"></div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { start } from 'qiankun'

onMounted(() => {
  console.log('微应用挂载', window.__POWERED_BY_QIANKUN__)
  if(!window.__POWERED_BY_QIANKUN__) {
    start()
  }
})
</script>