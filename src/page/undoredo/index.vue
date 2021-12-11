<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-10 16:52:38
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 17:11:11
-->
<template>
  <div class="reundo">
    <div class="container">
      <div class="target" :style="comp.style" v-for="(comp,index) in components" :key="index" ></div>
      <!-- <v-drag>123456</v-drag> -->
      <div class="target" :style="comp" @mousedown="(e) => onMousedown(e,index)" v-for="(comp,index) in renders" :key="index"></div>
      <div @click="undo">undo</div>
      <div @click="redo">redo</div>
      <div @click="add">add</div>
    </div>
  </div>
</template>
<script lang="ts">
// import dragable from './dragable.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    // 'v-drag': dragable
  },
  setup() {
    const components = ref<Array<Record<string,any>[]>>([])
    const cursor = ref<number>(-1)
    const renders = ref<Array<Record<string,any>>>([])

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
      if(cursor.value > -1) {
        renders.value = components.value[--cursor.value]
      }
      console.log(cursor.value, components.value, 'undo', renders.value)
    }
    function redo() {
      if(cursor.value < components.value.length - 1) {
        renders.value = components.value[++cursor.value]
      }
      console.log(cursor.value, components.value, 'redo', renders.value)
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
      return JSON.parse(JSON.stringify(o))
    }
    function onMousedown(e, index) {
      const undoSnapshot = saveSnapshot()
      const mi = index
      let {top, right, bottom, left, width, height} = getComputedStyleByEl(e.target)
      let sx = e.pageX, sy = e.pageY
      e.target.addEventListener('mousemove',onMousemove)
      e.target.addEventListener('mouseup', onMouseup)
      let curComp = renders.value[mi]
      // functions
      function onMousemove(e) {
        let mx = e.pageX, my = e.pageY
        let dx = mx - sx, dy = my - sy
        curComp.left = (left + dx) + 'px'
        curComp.top = (top + dy) + 'px'
      }
      function onMouseup(e) {
        components.value[cursor.value] = deepclone(undoSnapshot)
        undoSnapshot[mi] = deepclone(curComp)
        components.value[++cursor.value] = undoSnapshot
        renders.value = undoSnapshot
        e.target.removeEventListener('mousemove', onMousemove)
        e.target.removeEventListener('mouseup', onMouseup)
      }
    }

    function saveSnapshot() {
      return deepclone(renders.value || [])
    }
    function createBox() {
      let left = parseInt(`${Math.random() * 1000}`), top =  parseInt(`${Math.random() * 500}`);

      return {
        left: `${left}px`,
        top: `${top}px`
      }
    }
    function add() {
      pureRedo()
      let newO = createBox()
      let snapshot = saveSnapshot()
      snapshot.push(newO)
      renders.value = components.value[++cursor.value] = snapshot
    }

    function pureRedo() {
      while(cursor.value < components.value.length - 1) {
        components.value.pop()
      }
    }

    return {
      style,
      undo,
      components,
      makeAction,
      onMousedown,
      getComputedStyleByEl,
      redo,
      add,
      renders
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
