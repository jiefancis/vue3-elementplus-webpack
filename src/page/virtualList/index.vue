<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-08 11:50:08
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-08 17:07:41

 <div class="virsual-item"
    v-for="item in list"
    :style="{
      top: item.top
    }"
    >
    一个虚拟列表是指当我们有成千上万条数据需要进行展示但是用户的“视窗”（一次性可见内容）又不大时我们可以通过巧妙的方法只渲染用户最大可见条数+“BufferSize”个元素并在用户进行滚动时动态更新每个元素中的内容从而达到一个和长list滚动一样的效果但花费非常少的资源。
    一个虚拟列表是指当我们有成千上万条数据需要进行展示但是用户的“视窗”（一次性可见内容）又不大时我们可以通过巧妙的方法只渲染用户最大可见条数+“BufferSize”个元素并在用户进行滚动时动态更新每个元素中的内容从而达到一个和长list滚动一样的效果但花费非常少的资源。
    </div>
-->
<template>
  <div class="container" ref="container"  @scroll="onScroll">
    <div class="virsual-list" :style="{height: '500000px'}">
        <div
          class="virsual-item"
          v-for="item in list"
          :style="{
            top: item.top
          }"
          >
          一个虚拟列表是指当我们有成千上万条数据需要进行展示但是用户的“视窗”（一次性可见内容）又不大时我们可以通过巧妙的方法只渲染用户最大可见条数+“BufferSize”个元素并在用户进行滚动时动态更新每个元素中的内容从而达到一个和长list滚动一样的效果但花费非常少的资源。
          一个虚拟列表是指当我们有成千上万条数据需要进行展示但是用户的“视窗”（一次性可见内容）又不大时我们可以通过巧妙的方法只渲染用户最大可见条数+“BufferSize”个元素并在用户进行滚动时动态更新每个元素中的内容从而达到一个和长list滚动一样的效果但花费非常少的资源。
        </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
let startIndex:number = 0, endIndex:number = 0, size: number = 0;
const bufferSize: number = 0;
const container = ref()
const datas = ref<Array<number>>([])
let list = ref<any>([])
function createList() {
  for(let item = 0; item < 10000; item++) {
    datas.value.push(item)
  }
}
createList()
function onScroll (e) {
  console.log(list, 'onscroll', e.target.scrollTop)
  let scrollTop = e.target.scrollTop
  renderList(scrollTop)
}

function renderList(scrollTop = 0) {
  startIndex = Math.floor(scrollTop/50)
  if (startIndex >= 50) {
    startIndex -= bufferSize
  }
  endIndex = size + startIndex + bufferSize
  list.value = datas.value.slice(startIndex, endIndex).map(index => {
    return {
      top: `${(index * 50)}px`,
      text: `item-${index}`
    }
  })
  console.log('onMounted--list.value', list.value)
}
onMounted(() => {
  let clientHeight = container.value.clientHeight
  console.log('clientHeight', clientHeight)
  size = Math.ceil(clientHeight/50)
  endIndex = size
  renderList()
})
</script>
<style lang="scss" scoped>
.container{
  position: relative;
  overflow-y: scroll;
  height: 600px;
  background: #fff;
}
.virsual-item{
  position: absolute;
  width: 100%;
  height: 50px;
}
</style>