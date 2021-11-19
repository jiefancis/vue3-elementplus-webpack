<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-10 15:30:42
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-15 13:42:51
-->
<template>
  <div class="layout-wrapper">
    <nav-bar v-model:isCollapse="state.isCollapse" ref="headerRef" />
    <div class="wrap-style">
      <!-- <sidebar :collapse="state.isCollapse" /> -->
      <side-menu :isCollapse="state.isCollapse" />
      <el-scrollbar class="container">
        <tags-view />
        <!-- <div id="microContainer"></div> -->
        <router-view />
      </el-scrollbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive , computed} from 'vue'
import TagsView from './components/tagsView/index.vue'
import Sidebar from './components/sidebar.vue'
import SideMenu from './components/sideMenu.vue'
import NavBar from './components/navBar/index.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log('routerrouterrouterrouterrouterrouterrouterrouterrouterrouterrouter', route)
const hasMicroMount = computed(() => route.fullPath.startsWith('/vue3/page_pollingSign'))
// function invokeRoute(location) {
//   return () => location.pathname.startsWith('/web-ssdd/page_pollingSign')
// }
interface State {
  isCollapse: boolean
}
const state = reactive<State>({
  isCollapse: false
})
</script>
<style lang="scss" scoped>
.layout-wrapper {
  width: 100vw;
  // display: flex;
  height: 100vh;
}
.wrap-style {
  display: flex;
  width: 100vw;
  // flex: 1;
}
.el-menu-vertical-demo {
  height: 100vh;
  max-width: 190px;
}

.container {
  flex: 1;
  // /deep/ .el-scrollbar__wrap {
  //   height: 626px;
  // }
}
.logo {
  width: 100%;
}
.logo--home {
  height: 70%;
}
</style>
