<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-08 19:58:23
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-08 20:24:58
-->
<template>
  <div class="demo">
    <mInput v-model:value="inputValue"/>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import mInput from './package/input/index.vue'
console.log('mInput', mInput)
let inputValue = ref<string>('1')
</script>