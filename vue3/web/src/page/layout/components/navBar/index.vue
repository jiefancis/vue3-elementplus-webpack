<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-26 15:39:16
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-26 17:05:01
-->
<template>
<div class="nav-bar">
  <div><i :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="foldHandle()" /></div>
  <breadcrumb />
  <div class="flex-right">
    <el-tooltip effect="dark" content="个人信息" placement="bottom">
      <router-link to="/infos"><i class="el-icon-info vertical-align"/></router-link>
    </el-tooltip>
    <span>admin</span>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item><router-link :to="{path: '/'}">返回首页</router-link></el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</div>
</template>

<script lang="ts" setup>
import {
  defineProps,
  defineEmits,
  withDefaults
} from 'vue'

import Breadcrumb from './breadcrumb.vue'

interface Props{
  isCollapse: boolean
}

interface Emits{
  (event: 'update:isCollapse', bool: boolean): void
}
const props = withDefaults(
  defineProps<Props>(),
  {
    isCollapse: false
  }
)

const emits = defineEmits<Emits>()
function foldHandle () {
  emits('update:isCollapse', !props.isCollapse)
}

// functions
function logout () {
  localStorage.clear()
  sessionStorage.clear()
  document.cookie = ''
}
</script>

<style lang="scss" scoped>
.nav-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 49px;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  .flex-right{
    span{
      display: inline-block;
      padding: 0 10px;
      vertical-align: middle;
    }
  }
  .dropdown-actions{
    padding: 5px 10px;
  }
}
.vertical-align{
  vertical-align: middle
}
</style>
