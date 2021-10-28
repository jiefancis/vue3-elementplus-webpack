<!--
 * @Descripttion: @open="handleOpen"
    @close="handleClose"
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-17 15:27:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-26 17:38:04
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

      <!---->
      <!-- <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-sub-menu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
    </el-menu>
  <!-- </el-scrollbar> -->
</template>

<script lang="ts" setup>
import {
  defineProps
} from 'vue'

interface Props {
  collapse: boolean
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo{
  text-align: left;
  .el-menu-item i,
  .el-sub-menu i{
    margin-right: 15px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
}
:deep(.el-scrollbar__view),
:deep(.el-menu-vertical-demo){
  height: 100%
}
</style>
