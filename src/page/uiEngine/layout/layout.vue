<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-28 18:46:11
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-30 10:40:06
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
      ref="canvasRef"
      @drop="ondrop"
      @dragover="ondragover"
      @mousedown.stop.prevent="onmousedown"
      >
      <div
        class="absolute"
        v-for="(name, index) in list"
        @mousedown="onmousedown"
        :ref="el => dropRefs[index] = el"
      >
        <div class="scale-point scale-point--top" @mousedown.stop.prevent="onPointMousedown"></div>
        <div class="scale-point scale-point--right" @mousedown.stop.prevent="onPointMousedown"></div>
        <div class="scale-point scale-point--bottom" @mousedown.stop.prevent="onPointMousedown"></div>
        <div class="scale-point scale-point--left" @mousedown.stop.prevent="onPointMousedown"></div>
        <component :is="name" class="component"/>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, nextTick } from 'vue'
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
    const dropRefs = ref([]) as any
    const canvasRef = ref<HTMLElement>() as any
    const componentList = ref<Array<string>>(['Input', 'Input1', 'Input2'])
    const list = ref<Array<string>>([])
    let canvasPos: Record<string, any> = {}

    function setData(target, source) {
      for(let key in source) {
        if(source?.hasOwnProperty(key)) {
          target[key] = source[key]
        }
      }
    }
    // lifecycle
    onMounted(() => {
      canvasPos  = canvasRef.value.getBoundingClientRect()
      console.log('rectrectrect', canvasPos)
    })
    let dragEl = ''
    function ondragstart(e, text) {
      e.dataTransfer.setData('dragEl', text)
      console.log('ondragstart', e.dataTransfer)
      dragEl = text
    }

    function ondragover(e) {
      e.preventDefault()
      console.log('dragover', dragEl)
    }
    function ondrop(e) {
      e.preventDefault()
      list.value.push(dragEl)
      nextTick(() => {
        let index = dropRefs.value.length - 1
        console.log(e.pageY - canvasPos.top, 'ondrop', dropRefs.value[index].style.top)

        dropRefs.value[index].style.top = (e.pageY - canvasPos.top )+ 'px'
        dropRefs.value[index].style.left = (e.pageX - canvasPos.left )+ 'px'
      })
    }

    // mouseEvent
    let startY:any = 0
    let startX: any = 0
    let ox: any = 0
    let oy: any = 0
    let curMoveEl:any = null
    function onmousedown(e) {
      console.log('container - onmousedown', e, e.target)
      ox = parseFloat(e.target.style.left)
      oy = parseFloat(e.target.style.top)
      startY =  e.pageY
      startX =  e.pageX
      curMoveEl = e.target
      // e.target.addEventListener('mousemove', onmousemove)
      e.target.addEventListener('mouseup', onmouseup)
      e.target.addEventListener('mouseleave', onmouseleave)
      e.target.parentNode?.addEventListener('mousemove', onmousemove)
      e.target.parentNode?.addEventListener('mouseup', onmouseup)
      e.target.parentNode?.addEventListener('mouseleave', onmouseleave)
    }
    function onmousemove(e) {
      let parentX = startX - canvasPos.left
      let parentY = startY - canvasPos.top
      let moveX = e.pageX, moveY = e.pageY;
      let dx = e.pageX - startX + ox
      let dy = e.pageY - startY + oy
      curMoveEl.style.top = `${dy}px`
      curMoveEl.style.left = `${dx}px`
    }
    function onmouseup(e) {
      if(e.target.parentNode) {
        e.target.parentNode.removeEventListener('mousemove', onmousemove)
        e.target.parentNode.removeEventListener('mouseup', onmouseup)
      }
      e.target.removeEventListener('mousemove', onmousemove)
      e.target.removeEventListener('mouseup', onmouseup)
    }
    function onmouseleave(e) {
      e.target.removeEventListener('mousemove', onmousemove)
      e.target.removeEventListener('mouseleave', onmouseleave)
    }

    // point mouse event
    let orient = ''
    let spx = 0, spy = 0;
    let sox = 0, soy = 0;
    function getOrient(target) {
      return target.className.split('--').pop()
    }

    function setStyle(target, style) {
      style.width && (target.style.width = style.width + 'px')
      style.height && (target.style.height = style.height + 'px')
    }
    function onPointMousemove(e){
      console.log('onPointMousemove', e.target.parentElement.style.height)
      let dx = -Math.abs(e.pageX - spx);
      let dy = -Math.abs(e.pageY - spy);
      let clientWidth = e.target.parentElement.clientWidth
      let clientHeight = e.target.parentElement.clientHeight
      let parentEl = e.target.parentElement

      switch(orient) {
        case 'top':
          soy = soy || -10
          e.target.style.top = (dy + soy) + 'px'
          setStyle(e.target.parentElement, {height: clientHeight - dy})
          break;
        case 'bottom':
          soy = soy || -10
          e.target.style.bottom = (dy + soy) + 'px'
          setStyle(e.target.parentElement, { height: clientHeight - dy})
          break;
        case 'left':
          sox = sox || -10
          e.target.style.left = (dx + sox) + 'px'
          setStyle(e.target.parentElement, { width: clientWidth - dx })
          break;
        case 'right':
          sox = sox || -10
          e.target.style.right = (dx + sox) + 'px'
          setStyle(e.target.parentElement, { width: clientWidth - dx })
          break;
      }
    }
    function onPointMouseup(e) {
      console.log('onPointMouseup', e, e.target)
      e.target.removeEventListener('mousemove', onPointMousemove)
      e.target.removeEventListener('mouseleave', onPointMouseleave)
    }
    function onPointMouseleave(e) {
      console.log('onPointMouseleave', e, e.target)
      e.target.removeEventListener('mousemove', onPointMousemove)
    }
    function onPointMousedown(e){
      let style = e.target.style
      console.log(e,'onPointMousedown', style, parseFloat(style.top))
      orient = getOrient(e.target)
      e.target.addEventListener('mousemove', onPointMousemove)
      e.target.addEventListener('mouseup', onPointMouseup)
      e.target.addEventListener('mouseleave', onPointMouseleave)
      spx = e.pageX
      spy = e.pageY

      sox = parseFloat(style.left) || 0
      soy = parseFloat(style.top) || 0
    }

    return {
      ondragstart,
      ondrop,
      ondragover,
      list,
      componentList,
      onmousedown,
      canvasRef,
      canvasPos,
      dropRefs,
      onPointMousedown
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
      // width: 100px;
      // height: 50px;
      background: #ccc;
      border: 1px solid #ccc;
      margin: 10px;
    }
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 130px;
    height: 80px;
    background: #ccc;
    border: 1px solid #ccc;
    margin: 10px;
    &:hover{
      cursor: pointer;
    }

    .scale-point {
      position: absolute;
      width: 10px;
      height: 10px;
      border: 1px solid #000;
      border-radius: 50%;
      &--top {
        top: -10px;
        left: 50%;
        transform: translate(-50%, 0);
        cursor: s-resize;
      }
      &--right {
        top: 50%;
        right: -10px;
        transform: translate( 0,-50%);
        cursor: w-resize;
      }
      &--bottom {
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 0);
        cursor: s-resize;
      }
      &--left {
        top:50%;
        left: -10px;
        transform: translate(0,-50%);
        cursor: w-resize;
      }
    }
  }
  .center{
    position: relative;
    flex: 1;
    background: #fff;
  }
}
</style>