<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-10 16:52:38
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 14:16:10
-->
<template>
  <div class="reundo">
    <div class="container">
      <!-- <div class="target" :style="comp.style" v-for="(comp,index) in components" :key="index" ></div> -->
      <div class="target" :style="style" @mousedown="onMousedown"></div>
      <div @click="undo">undo</div>
      <div @click="redo">redo</div>
      <div @click="add">add</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const components = ref<Array<Record<string,any>>>([])
    const style = ref<Record<string, any>>({})
    const undostack = ref<Array<Record<string, any>>>([])
    const redostack = ref<Array<Record<string, any>>>([])
    const active = ref<number>(0)
    function initundo() {
      undostack.value = [
        { width: '50px', height: '50px', top: '0px', left: '0px' }
      ]
      active.value = 0
    }
    initundo()
    let i = 0
    function makeAction() {
      let action = { width: '50px', height: '50px', top: '0px', left: '0px', name:'' }
      action.top = parseInt(`${Math.random() * 100}`) + 'px'
      action.left = parseInt(`${Math.random() * 100}`) + 'px'
      let o = {
        name: `comp${i}`,
        style: action
      }
      components.value.push(o)
    }
    function undo() {
      style.value = undostack.value[--active.value]
      console.log(active.value, undostack.value, 'undo', style.value)
    }
    function redo() {
      style.value = undostack.value[++active.value]
      console.log(active.value, undostack.value, 'redo', style.value)
    }
    function getComputedStyleByEl(e) {
      let { top, right, bottom, left, width, height } = getComputedStyle(e)
      return {
        top: parseFloat(top),
        right: parseFloat(right),
        bottom: parseFloat(bottom),
        left: parseFloat(left),
        width: parseFloat(width),
        height: parseFloat(height)
      }
    }
    function deepclone(o) {
      console.log('deepclone', JSON.parse(JSON.stringify(o)))
      return JSON.parse(JSON.stringify(o))
      // let clone = {}
      // for(let key in style.value) {
      //   if(o.hasOwnProperty(key)) {
      //     clone[key] = o[key]
      //   }
      // }
      // return clone
    }
    function onMousedown(e) {
      console.log('eeee',e)
      let {top, right, bottom, left, width, height} = getComputedStyleByEl(e.target)
      let sx = e.pageX, sy = e.pageY
      e.target.addEventListener('mousemove',onMousemove)
      e.target.addEventListener('mouseup', onMouseup)

      // functions
      function onMousemove(e) {
        let mx = e.pageX, my = e.pageY
        let dx = mx - sx, dy = my - sy;
        style.value.left = (left + dx) + 'px'
        style.value.top = (top + dy) + 'px'
      }
      function onMouseup(e) {
        undostack.value.push(deepclone(style.value))
        active.value = undostack.value.length - 1
        console.log('undostack.value 添加', undostack.value)
        e.target.removeEventListener('mousemove', onMousemove)
        e.target.removeEventListener('mouseup', onMouseup)
      }
    }
    function add() {

    }

    return {
      style,
      undo,
      components,
      makeAction,
      onMousedown,
      getComputedStyleByEl,
      redo,
      add
    }
  }
})
</script>
<style lang="scss" scoped>
.reundo,
.container {
  width: 100%;
  height: 100%;
}
.target{
  position: absolute;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
}
</style>
