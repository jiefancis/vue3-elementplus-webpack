<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-29 17:56:50
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:29:42
-->
<template>
  <div class="menu-wrapper--flex">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      @select="handleOpen"
    >
      <template v-for="(menu, index) in [menus]" :key="index">
        <el-sub-menu v-if="menu.childMenus && isCollapse" :index="index + 1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>{{ menu.menuName }}</span>
          </template>
          <el-menu-item
            v-for="(subMenu, subIndex) in menu.childMenus"
            v-show="isCollapse"
            :key="subIndex + 1"
            :index="index + 1 - (subIndex + 1)"
            >{{ subMenu.menuName }}</el-menu-item
          >
        </el-sub-menu>
        <el-menu-item
          :index="index + 1"
          v-else-if="!isCollapse && menu.childMenus"
        >
          <i class="el-icon-setting"></i>
          <template #title>{{ menu.menuName }}</template>
        </el-menu-item>
        <el-menu-item :index="index + 1">
          <i class="el-icon-setting"></i>
          <template #title>{{ menu.menuName }}</template>
        </el-menu-item>
      </template>
    </el-menu>

    <transition name="slide">
      <div class="side-sub-menu" v-if="isSubCollapse">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
        >
          <template v-for="(menu, index) in [menus]" :key="index">
            <el-sub-menu v-if="menu.childMenus" :index="index + 1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>{{ menu.menuName }}</span>
              </template>
              <el-menu-item
                v-for="(subMenu, subIndex) in menu.childMenus"
                :key="subIndex + 1"
                :index="index + 1 - (subIndex + 1)"
                >{{ subMenu.menuName }}</el-menu-item
              >
            </el-sub-menu>
            <el-menu-item :index="index + 1">
              <i class="el-icon-setting"></i>
              <template #title>{{ menu.menuName }}</template>
            </el-menu-item>
          </template>
        </el-menu>
        <div class="menu-slide--arrow" @click="toggleSubCollapse">《</div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import menuJson from '@/test.js'
import { defineComponent, ref, watch, computed } from 'vue'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    // ref
    const isCollapse = computed(() => props.isCollapse)
    const isSubCollapse = ref(false)
    const menus = ref(menuJson.menus)
    // watch
    watch(
      () => props.isCollapse,
      (newVal, oldVal) => {
        newVal && (isSubCollapse.value = false)
      }
    )


    // functions
    /**
     * 菜单展开与收缩
     */
    function toggleSubCollapse() {
      isSubCollapse.value = !isSubCollapse.value
    }
    /**
     * 菜单展开
     */
    const handleOpen = (key, keyPath) => {
      isSubCollapse.value = true
    }
    /**
     * 菜单收缩
     */
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      isSubCollapse,
      handleOpen,
      handleClose,
      menus,
      toggleSubCollapse
    }
  }
})
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menu-wrapper--flex {
  display: flex;
  padding-right: 50px;
}
.side-sub-menu {
  position: relative;
}
.menu-slide--arrow {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  background: #ccc;
  width: 30px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 0 4px 4px 0;
}
/* .slide-enter-active{
  transform: translate(200px, 0px)
} */
.slide-enter-active, .slide-leave-active {
  transform: translate(0px, 0px);
  transition: transform .5s ease;
  position: relative;
  z-index: -1;
}

.slide-enter-from,
.slide-leave-to {
  /* opacity: 0; */
  transform: translate(-200px, 0px)
}
/* @keyframes slide */
/* .slide-enter-from,
.slide-leave-to {
  transform: translateX(0);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(200px);
}
.slide-enter-active {
  transition: all 1s easy-out;
  opacity: 1;
}

.slide-leave-active {
  transform: translateX(0);
  transition: all 1s easy-out;
  opacity: 1;
} */
</style>
