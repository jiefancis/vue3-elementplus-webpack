<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-28 18:46:11
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-28 21:03:42
-->
<template>
  <div class="container">
    <div class="component-area">
      <div class="component"
        v-for="(text,index) in componentList"
        :key="index"
        draggable="true"
        @dragstart="(e) => ondragstart(e, text)"
      >{{text}}</div>
    </div>
    <div class="center"
      @drop="ondrop"
      @dragover="ondragover"
      >
      <div
        class="component absolute"
        v-for="name in list"
        @mousedown.stop.prevent="onmousedown"
        @mousemove="onmousemove"
        @mouseup="onmouseup"
      >
        <component :is="name" class="component"/>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { c } from 'naive-ui'
import { ref, defineComponent } from 'vue'
import Input from '../components/input.vue'
import Input1 from '../components/input1.vue'
import Input2 from '../components/input2.vue'
export default defineComponent({
  components: {
    Input,
    Input1,
    Input2
  },
  setup() {
    const componentList = ref<Array<string>>(['Input', 'Input1', 'Input2'])
    const list = ref<Array<string>>([])
    let dragEl = ''
    function ondragstart(e, text) {
      e.dataTransfer.setData('dragEl', e.target)
      console.log('ondragstart', e)
      dragEl = text
    }

    function ondragover(e) {
      e.preventDefault()
    }
    function ondrop(e) {
      e.preventDefault()
      list.value.push(dragEl)
      console.log('ondrop', e)
    }

    // mouseEvent
    let startY:any = 0
    let startX: any = 0
    function onmousedown(e) {
      startY = e.pageY
      startX = e.pageX
      console.log('onmousedown', e)
    }
    function onmousemove(e) {
      console.log('mousemove', e)
      let moveX = e.pageX, moveY = e.pageY;
      let dx = startX + (moveX - startX)
      let dy = startY + (moveY - startY)
      e.target.style.top = `${dy}px`
      e.target.style.left = `${dx}px`
    }
    function onmouseup(e) {
      console.log('onmouseuponmouseup', e)
      // e.onmousemove = null
      e.target.style.top = `${e.pageY}px`
      e.target.style.left = `${e.pageX}px`
    }

    return {
      ondragstart,
      ondrop,
      ondragover,
      list,
      componentList
    }
  }
})
// const componentList = ref<Array<string>>([
//  'Input',
//  'Input1',
//  'Input2',
// ])

// const list = ref<Array<string>>([])
// let dragEl = ''
// function ondragstart(e, text) {
//   console.log('ondragstart', e)
//   dragEl = text
// }

// function ondragover(e) {
//   e.preventDefault()
// }
// function ondrop(e) {
//   e.preventDefault()
//   list.value.push(dragEl)
//   console.log('ondrop', e)
// }
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: space-between;
  height: 100vh;
  .component-area{
    width: 300px;
    height: 100%;

  }
  .component{
      width: 100px;
      height: 50px;
      background: #ccc;
      border: 1px solid #ccc;
      margin: 10px;
    }
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    &:hover{
      cursor: pointer;
    }
  }
  .center{
    position: relative;
    flex: 1;
    background: #fff;
  }
}
</style>