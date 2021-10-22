<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-26 15:39:08
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-07 16:26:35
-->
<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- :key="item.path + index" -->
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbs"
        :key="index"
        :to="{ path: item.path }"
        >{{ item.meta?.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import { useRoute, RouteRecordNormalized } from 'vue-router'

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
  const matched = route.matched.filter(
    (item) => item.meta && item.meta.title
  ) as Breadcrumb
  // const first = matched[0]

  // if (!isDashboard(first)) {
  //   matched = [{ path: '/', meta: { title: '首页' } }, ...matched] // .concat(matched)
  // }
  breadcrumbs.value.length = 1
  const list = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  ) as Breadcrumb
  // const list: Breadcrumb = matched.filter((item) => item.meta && item.meta.title).map(({ path, meta }) => { return { path, meta } })
  breadcrumbs.value.push(...list)
  console.log('面包屑导航', breadcrumbs.value)
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  flex: 1;
  margin: 0 0 0 15px;
}
</style>
