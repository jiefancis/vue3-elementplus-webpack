<!--
 * @Descripttion: @open="handleOpen"
    @close="handleClose"
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-17 15:27:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:30:02
-->
<template>
  <!-- <el-scrollbar height="100%"> -->
  <el-menu
    :uniqueOpened="true"
    :collapse="props.collapse"
    :show-timeout="200"
    default-active="2"
    router
    class="el-menu-vertical-demo"
    background-color="#195C8E"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <template #title>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/add">
      <i class="el-icon-s-home"></i>
      <template #title>
        <span>add</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/reduce">
      <i class="el-icon-location"></i>
      <template #title>
        <span>reduce</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/home">
      <i class="el-icon-location"></i>
      <template #title>
        <span>查询</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/reduce">
      <i class="el-icon-setting"></i>
      <template #title>
        <span>reduce</span>
      </template>
    </el-menu-item>
  </el-menu>
  <!-- </el-scrollbar> -->
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface Props {
  collapse: boolean
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  text-align: left;
  .el-menu-item i,
  .el-sub-menu i {
    margin-right: 15px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}
:deep(.el-scrollbar__view),
:deep(.el-menu-vertical-demo) {
  height: 100%;
}
</style>
