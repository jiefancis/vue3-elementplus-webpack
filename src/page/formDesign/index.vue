<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-19 14:23:04
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-19 18:23:21
-->
<template>
  <m-layout>
    <template #component>
      <div class="wrapper">
        <div v-for="text in components" :key="text" class="box" draggable="true" @dragstart="() => ondragstart(text)">{{text}}</div>
      </div>
    </template>
    <template #container>
      <div class="container" @drop="ondrop" @dragover="ondragover">
        <component v-for="(comp,index) in renderComponents" :key="index" :is="comp.target" @mousedown="(e) => onmousedown(e, index)" class="render-box" :style="comp.style" disabled></component>
      </div>
    </template>
    <template #setting>
      setting
    </template>
  </m-layout>
</template>
<script lang="ts">
import { c } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import MLayout from './layout.vue'
export default defineComponent({
  components: {
    MLayout
  },
  setup() {
    const components = ref<Array<string>>([
      'n-input',
      'n-mention',
      'n-radio',
      'n-select',
      'n-rate',
      'n-switch',
      'n-affix'
    ])

    const renderComponents = ref<Array<Record<string, any>>>([])
    let dragTarget = ref<any>()
    function ondragstart(target) {
      dragTarget.value = target
    }
    function ondrop(e){
      console.log('ondrop',e)
      let left = e.pageX - 200 + 'px', top = e.pageY + 'px'
      let renderCell = {
        style: {
          left,
          top,
        },
        target: dragTarget.value
      }
      renderComponents.value.push(renderCell)
      console.log('renderComponents', renderComponents.value)
    }
    function ondragover(e) {
      e.preventDefault()
    }
    function onContainerMouseover(e) {
      console.log('onContainerMouseover', e)
    }
    function onmousedown(e, index) {
      const moveEl = renderComponents.value[index]
      let sx = e.pageX, sy = e.pageY
      let left = parseFloat(moveEl.style.left), top = parseFloat(moveEl.style.top)
      console.log(sx, 'onMouseDown', sy)
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
      function onMouseMove(e) {
        let mx = e.pageX, my = e.pageY;
        let dx = mx - sx, dy = my - sy;
        moveEl.style.left = left + dx + 'px'
        moveEl.style.top = top + dy + 'px'
      }
      function onMouseUp(e) {
          console.log('onMouseUp', e)
          document.removeEventListener('mousemove', onMouseMove)
      }
    }

    return {
      components,
      ondragstart,
      ondrop,
      ondragover,
      onmousedown,
      renderComponents,
      onContainerMouseover
    }
  }
})
</script>
<style lang="scss" scoped>
.box{
  width: 180px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  margin: 0 20 20px 0;
}
.container{
  position: relative;
  width: 100%;
  height: 100%;
}
.render-box{
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 50px;
  background: #fff;
  cursor: pointer;
}
</style>
