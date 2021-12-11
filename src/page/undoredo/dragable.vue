<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-11 16:37:24
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 17:11:04
-->
<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-11 16:37:24
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-11 17:09:00
-->
 <!--<template>
  <div class="m-drag" @mousedown="onMousedown" ref="dragDom">
    <div class="m-drag--container">
      <slot>drag</slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'v-drag',
  setup() {
    const dragDom = ref<HTMLElement | null>()
    function getEl(id) {
      return document.querySelector(id)
    }
    function getComputedStyleBy(el) {
      if(el.nodeType === 1) {
        return getComputedStyle(el)
      } else {
        return getComputedStyle(getEl(el))
      }
    }
    function update(style: any, dx: number, dy: number) {

      // let left = style.left
      let { left, right, top, bottom } = style as any;
      console.log(11111111)
      (dragDom.value as HTMLElement).style.left = (parseFloat(left) + dx) + 'px';
      (dragDom.value as HTMLElement).style.top = (parseFloat(top) + dy) + 'px'
      console.log('move', dx, dy, (dragDom.value as HTMLElement).style.left)
    }
    function onMousedown(e) {
      let sx = e.pageX, sy = e.pageY;
      let style = getComputedStyle(e.target) as any
      function onMousemove(e) {
        let mx = e.pageX, my = e.pageY
        let dx = mx - sx, dy = my - sy

        update(style, dx, dy)
      }
      function onMouseup(e) {
        e.target.removeEventListener('mousemove', onMousemove)
        e.target.removeEventListener('mouseup', onMouseup)
      }
      e.target.addEventListener('mousemove', onMousemove)
      e.target.addEventListener('mouseup', onMouseup)
    }
    return {
      onMousedown,
      dragDom
    }
  }
})
</script>
<style lang="scss" scoped>
.m-drag {
  position: absolute;
  cursor: pointer;
}
.m-drag--container{
  display: inline-block;
}
</style> -->
