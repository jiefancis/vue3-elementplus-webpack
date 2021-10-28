<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-26 15:39:08
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-26 17:10:32
-->
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="item.path + index"
        :to="{ path: item.path }"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import {
  watch,
  ref
} from 'vue'
import {
  useRoute,
  RouteRecordNormalized
} from 'vue-router'

// @ts
type Breadcrumb = Array<Partial<RouteRecordNormalized>>

// vars
const route = useRoute()
const breadcrumbs = ref<Breadcrumb>([{ path: '/', meta: { title: '首页' } }])

watch(route, () => {
  getBreadcrumb()
})

const isDashboard = (meta) => {
  const name = meta && meta.name
  if (!name) {
    return false
  }
  return name.trim().toLocaleLowerCase() === 'Home'.toLocaleLowerCase()
}

const getBreadcrumb = () => {
  const matched: Breadcrumb = route.matched.filter((item) => item.meta && item.meta.title)
  // const first = matched[0]

  // if (!isDashboard(first)) {
  //   matched = [{ path: '/', meta: { title: '首页' } }, ...matched] // .concat(matched)
  // }
  breadcrumbs.value.length = 1
  const list = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false) as Breadcrumb
  breadcrumbs.value.push(...list)
}
</script>

<style lang="scss" scoped>
.breadcrumb{
  flex: 1;
  margin: 0 0 0 15px;
}
</style>
