<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-10 14:15:02
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 15:38:22
-->
<template>
    <span>{{state.a}}</span>
    <button>+1</button>
</template>
<script lang="ts" setup>
import {
  reactive
} from 'vue'

const state = reactive({
  a: 1
})

</script>
