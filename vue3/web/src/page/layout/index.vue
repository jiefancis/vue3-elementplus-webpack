<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-10 15:30:42
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-26 17:14:41
-->
<template>
  <div class="layout-wrapper">
    <sidebar :collapse="state.isCollapse"/>
    <el-scrollbar class="wrap-style">
      <nav-bar v-model:isCollapse="state.isCollapse" ref="headerRef"/>
      <tags-view/>
      <div class="container">
        <el-scrollbar>
          <router-view/>
        </el-scrollbar>
      </div>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import {
  reactive
} from 'vue'
import TagsView from './components/tagsView/index.vue'
import Sidebar from './components/sidebar.vue'
import NavBar from './components/navBar/index.vue'

interface State {
  isCollapse: boolean
}
const state = reactive<State>({
  isCollapse: false
})
</script>
<style lang="scss" scoped>
.layout-wrapper{
  width: 100vw;
  display: flex;
  height: 100vh;
}
.wrap-style{
  flex: 1;
}
.el-menu-vertical-demo{
  height: 100vh;
  max-width: 190px;
}

.container{
  padding: 0 10px 0;
  /deep/ .el-scrollbar__wrap{
    height: 626px;
  }
}
.logo{
  width: 100%
}
.logo--home{
  height: 70%;
}
</style>
