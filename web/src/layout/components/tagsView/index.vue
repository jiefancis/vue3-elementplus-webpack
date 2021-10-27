<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-26 11:40:39
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-26 16:38:11
-->
<template>
  <div class="tags-view">
    <scrollPane>
      <router-link
        class="tags-view-item"
        v-for="item in tagList"
        :key="item.path"
        :to="{ path: item.path, query: item.query }"
        :class="isActive(item) ? 'active' : ''"
      >
        {{ item.title }}
        <span
          v-show="isShowClose"
          class="el-icon-close"
          @click.prevent.stop="closeTag(item)"
        />
      </router-link>
    </scrollPane>
  </div>
</template>

<script lang="ts" setup>
import scrollPane from './scrollPane.vue'
import { watch, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// ts
interface TagList {
  title?: string | unknown
  path?: string
  query?: any
}
// vars
const tagList = ref<Array<TagList>>([
  { title: '首页', path: '/', query: { id: 1 } },
  { title: 'add', path: '/add' },
  { title: 'reduce', path: '/reduce' },
  { title: 'debug', path: '/debug' }
  // { title: '首页', path: '/home' },
  // { title: '401', path: '/401' },
  // { title: '标签二', path: '/reduce' },
  // { title: '标签二', path: '/reduce12' },
  // { title: '首页', path: '/home' },
  // { title: '401', path: '/401' },
  // { title: '标签二', path: '/reduce' },
  // { title: '标签二', path: '/reduce12' },
  // { title: '首页', path: '/home' },
  // { title: '401', path: '/401' },
  // { title: '标签二', path: '/reduce' },
  // { title: '标签二', path: '/reduce12' },
  // { title: '首页', path: '/home' },
  // { title: '401', path: '/401' },
  // { title: '标签二', path: '/reduce' },
  // { title: '标签二', path: '/reduce12' },
  // { title: '首页', path: '/home' },
  // { title: '401', path: '/401' },
  // { title: '标签二', path: '/reduce' },
  // { title: '标签二', path: '/reduce12' },
  // { title: '首页', path: '/home' },
  // { title: '401', path: '/401' },
  // { title: '标签二', path: '/reduce' },
  // { title: '标签二', path: '/reduce12' }
])
const route = useRoute()
const router = useRouter()

// computed
const isActive = computed(() => {
  return function (tag) {
    return tag.path === route.path
  }
})
const isShowClose = computed(() => tagList.value.length > 1)
// watch
watch(route, (newVal, oldVal) => {
  console.log(newVal, 'route-watch', route, oldVal)
  if (tagList.value.findIndex((item) => item.path === newVal.path) === -1) {
    tagList.value.push({
      title: route.meta.title,
      path: route.path,
      query: route.query
    })
  }
})

// functions
function closeTag(item) {
  const index = tagList.value.findIndex(({ path }) => path === item.path)
  const next = tagList.value[index + 1] || tagList.value[index - 1]
  router.push({ path: next.path, query: next.query })
  tagList.value.splice(index, 1)
}
</script>

<style lang="scss" scoped>
.tags-view {
  height: 50px;
}
.tags-view-item {
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 26px;
  line-height: 24px;
  border: 1px solid #d8dce5;
  border-radius: 20px;
  color: #495060;
  background: #fff;
  padding: 0 8px 0 10px;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 5px;
  text-decoration: none;
  &:first-of-type {
    margin-left: 15px;
  }
  &:last-of-type {
    margin-right: 15px;
  }
  &.active {
    color: #fff;
    background: #195c8e;
    background-image: -webkit-linear-gradient(45deg, #4697d2, #195c8e);
    background-image: linear-gradient(45deg, #4697d2, #195c8e);
    border-color: #195c8e;
  }
  .el-icon-close {
    width: 16px;
    height: 16px;
    vertical-align: 2px;
    border-radius: 10px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: 100% 50%;
    &:before {
      transform: scale(0.6);
      display: inline-block;
      vertical-align: -3px;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      color: #fff;
    }
  }
}
</style>
