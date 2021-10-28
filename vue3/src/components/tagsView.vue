<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-10 18:05:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-22 11:25:50
-->
<template>
    <div class="tags-view">
        <el-tag
            @click="toPage(item.path)"
            v-for="(item, index) in state.tagList"
            :key="index"
            closable
            @close="closeTag"
            :effect="state.current === index ? 'dark': ''"
        >{{item.title}}</el-tag>
    </div>
</template>
<script lang="ts" setup>
import {
  State
} from '../utils/types/tagsview'

import {
  ElMessage
} from 'element-plus'

import {
  watch,
  reactive
  // getCurrentInstance,
  // ComponentInternalInstance
} from 'vue'
import {
  useRoute,
  useRouter,
  onBeforeRouteUpdate
} from 'vue-router'
const route = useRoute()
const router = useRouter()
// const ctx = (getCurrentInstance() as ComponentInternalInstance)

const state = reactive<State>({
  tagList: [
    { title: '首页', path: '/home' },
    { title: '标签一222', path: '/index11' },
    { title: '标签二', path: '/reduce' }
  ],
  current: 0
})

watch(() => route.fullPath, (newVal, oldVal) => {
  const hasTag = state.tagList.some(({ path }) => path === newVal)
  if (!hasTag) {
    state.tagList.push({
      title: route.meta.title,
      path: route.path
    })
    state.current = state.tagList.length - 1
  }
  // state.current = state.tagList.length - 1
})
watch(() => state, (newVal, oldVal) => {
  console.log('state.current', newVal, 123456, oldVal)
})

// function
function toPage (_path) {
  const index = state.tagList.findIndex(({ path }) => path === _path)
  console.log('切换', state.current, typeof state.current, _path, index, typeof index)
  console.log('切换--after', state.current, typeof state.current)
  router.push(_path)
  state.current = index
}

function closeTag (index: number) {
  if (state.tagList.length === 1) {
    ElMessage.warning({
      message: '最少出现一个',
      type: 'warning',
      showClose: true
    })
  } else {
    state.tagList.splice(index, 1)
  }
}

</script>
<style lang="scss" scoped>
.tags-view{
    height: 50px;
    line-height: 50px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    ::v-deep(.el-tag) {
        margin: 0 5px;
    }
}

</style>
