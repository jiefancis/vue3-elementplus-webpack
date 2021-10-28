<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-28 20:10:06
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-28 20:28:43
-->
<template>
  <div>
    <n-input v-model:value="value" type="text"></n-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
let value = ref('input2')
</script>