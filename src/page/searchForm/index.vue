<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-07 14:44:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-21 18:12:22
-->
<template>
  <div class="wrap">
    <div
      v-for="num in 6"
      :key="num"
      :class="num === curMoveIndex+1 ? 'active item' : 'item'"
      :ref="el => boxs[num-1] = el"
    >{{num-1}}</div>
  </div>
  <div class="wheel" @wheel.prevent="handleWheelScroll" ref="wheelEl">
    <div class="wheel-wrapper">
      <div class="wheel-item" v-for="num in 10" :key="num">{{num}}</div>
    </div>
  </div>

</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  nextTick
} from 'vue'


export default defineComponent({
  setup(props, context) {
    const wheelEl = ref<any>()
    const boxs = ref<any>([])
    const cacheBoxClientRect = ref<any>({})
    let attachValue = 20
    let curMoveIndex = ref(-1)

    const cacheTranslate = ref<any>({})

    // mouseEvents
    let startX = 0, startY = 0
    let dx = 0, dy = 0
    function onMouseDown(e) {
      let rect = e.target.getBoundingClientRect()
      let mt = rect.top,
          mr = rect.right,
          mb = rect.bottom,
          ml = rect.left;
      console.log('拖拽前',mt,mr,mb,ml, '鼠标按下')
      startX = e.pageX
      startY = e.pageY
    }
    function onMouseMove(e) {
      console.log('startX', startX)
      // nextTick(() => {
        let endX = e.pageX, endY = e.pageY;
        dx = endX - startX, dy = endY - startY;
        if(cacheTranslate.value[curMoveIndex.value]) {
          dx = cacheTranslate.value[curMoveIndex.value].dx + dx
          dy = cacheTranslate.value[curMoveIndex.value].dy + dy
        }
        e.target.style.transform = `translate(${dx}px, ${dy}px)`
      // })

    }
    function initClientRect() {
      boxs.value.forEach((el,index) => {
        // console.log(el?.getBoundingClientRect(),'ellllll')
        let clientRect = el.getBoundingClientRect()
        cacheBoxClientRect.value[index] = { target: el, clientRect }
      })
    }

    function abs(num) {
      return Math.abs(num)
    }
    function attachOrientFunc({ml,mr,mb,mt}, {tl, tr, tb, tt}) {
      // console.table({ml,mr,mb,mt,tl, tr, tb, tt})
      let orient = ''
      if(abs(tl - mr) <= attachValue){ // || abs(tl - mr) <= attachValue) {
        console.log(tl , mr,'吸附左边', tl - mr)
        orient = 'left'
        return 'left' // { orient: 'left', diff: tl-mr }
      }
      if(abs(tr - ml) <= attachValue){ // || abs(tr - mr) <= attachValue) {
        console.log(tr , ml,'吸附右边', tr - ml)
        orient = 'right'
        return 'right'//{ orient: 'right', diff: tl-mr }
      }
      if(abs(tb - mt) <= attachValue){ //  || abs(tl - mr) <= attachValue) {
        console.log(tb , mt,'吸附下边', tb - mt)
        orient = 'bottom'

        return 'bottom' // { orient: 'bottom', diff: tl-mr }
      }
      if(abs(tt - mb) <= attachValue){ // || abs(tl - mr) <= attachValue) {
        console.log(tt, mb,'吸附上边', tt - mb)
        orient = 'top'
        return 'top' // { orient: 'top', diff: tl-mr }
      }

    }
    function attachToTarget(el, dx, dy) {
      console.log(dx, dy, '吸附attachToTarget', el.style.transform)
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }

    // 获取吸附对象
    function getAttachTarget(boxs, {ml,mr,mb,mt}) {
      let target
      let attachOrient: any = ''
      let diff
      Object.entries(cacheBoxClientRect.value).forEach(([key, value] , index) => {

        let rect = (value as any).clientRect
        let tl = rect.left,
        tr = rect.right,
        tb = rect.bottom,
        tt = rect.top;

        let orient = attachOrientFunc({ml,mr,mb,mt}, {tl, tr, tb, tt}) as any

        if(orient) {
          attachOrient = orient
          target = (value as any).target
        }

      })
      console.log('吸附对象-getAttachTarget', target)
      return { target, attachOrient }
    }

    function updateCacheBoxClientRect(index, clientRect) {
      cacheBoxClientRect.value[index].clientRect = clientRect
    }
    // initEvent
    function initEvents() {
      // let timer: any
      boxs.value.forEach((el,index) => {
        el.addEventListener('mousedown', e => {
          curMoveIndex.value = index
          // timer = null
          onMouseDown(e)
          el.addEventListener('mousemove', onMouseMove)
          el.addEventListener('mouseleave', () => { el.removeEventListener('mousemove', onMouseMove) })

          el.addEventListener('mouseup',addMouseup)
          function addMouseup(e) {
            console.count('addMouseup执行次数')
            // timer && clearTimeout(timer)
            onMouseup(e)
          }
          function onMouseup(e) {
            console.count('mouseup执行次数')
            if(cacheTranslate.value[curMoveIndex.value]) {
              cacheTranslate.value[curMoveIndex.value].dx = dx
              cacheTranslate.value[curMoveIndex.value].dy = dy
            } else {
              cacheTranslate.value[curMoveIndex.value] = { dx, dy}
            }


            // 移动元素
            let rect = e.target.getBoundingClientRect()
            let mt = rect.top,
                mr = rect.right,
                mb = rect.bottom,
                ml = rect.left;

            console.log('拖拽end',mt,mr,mb,ml)
            let attach = getAttachTarget(boxs.value, {ml,mr,mb,mt})
            console.log('吸附对象 orient', attach)
            rect = attach.target?.getBoundingClientRect() || {}
            let tt = rect.top,
                tr = rect.right,
                tb = rect.bottom,
                tl = rect.left;

            console.log('with(target)',tt,tr,tb,tl, 'with(move)', mt,mr,mb,ml)
            if(['left', 'right'].includes(attach.attachOrient)) {
              let diff = attach.attachOrient === 'left' ? abs(tl-mr) : -abs(tr - ml)
              attachToTarget(e.target, dx + diff, dy)
              cacheTranslate.value[curMoveIndex.value].dx = dx + diff
              updateCacheBoxClientRect(curMoveIndex.value, e.target?.getBoundingClientRect())
            }
            if(['top', 'bottom'].includes(attach.attachOrient)) {
              let diff = attach.attachOrient === 'top' ? abs(tt-mb) : -abs(tb - mt)
              attachToTarget(e.target, dx, dy + diff)
              cacheTranslate.value[curMoveIndex.value].dy = dy + diff
              updateCacheBoxClientRect(curMoveIndex.value, e.target?.getBoundingClientRect())
            }

            let alter = e.target.getBoundingClientRect()
            console.log('拖拽end--operation',alter.top,alter.right,alter.bottom,alter.left)


            // 不清除，会触发多次
            el.removeEventListener('mousemove', onMouseMove)
            el.removeEventListener('mouseup', addMouseup)
          }

        })
      })
    }
    onMounted(() => {
      nextTick(() => {
        initClientRect()
        initEvents()
      })
    })

    function handleWheelScroll(e) {
      const wheelDelta = e.wheelDelta || -e.deltaY * 40
      // const $scrollWrapper = wheelEl.value.$refs.wrap
      wheelEl.value.scrollLeft = wheelEl.value.scrollLeft + wheelDelta / 4
      console.log(wheelEl.value, wheelEl.value.scrollLeft, 'handleWheelScroll', e.wheelDelta, e.deltaX, e.deltaX)
    }

    return {
      boxs,
      curMoveIndex,
      wheelEl,
      handleWheelScroll
    }
  }
})
</script>
<style lang="scss" scoped>
.item{
  // position: relative;
  width: 100px;
  height: 100px;
  background: #ccc;
}

.wrap{
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.active{
  position: relative;
  z-index: 10;
  // transition: all 1s;
}

// test wheel event
.wheel{
  width: 1000px;
  height: 100px;
  overflow-x: scroll
}
.wheel-wrapper{
  white-space:nowrap;
  height: 100px;
  display: inline-block;
}
.wheel-item{
  display: inline-block;
  width: 200px;
  height: 100%;
  background: #ccc;
  margin: 0 30px 0 0;
}
// .wrap{
//   position: relative;
// }
// .flex{
//   display: flex
// }
// .container{
//   width: 100vw;
// }
// .car{
//   width: 20px;
//   height: 20px;
//   background: red;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: all 3s;
// }
// .header{
//   height: 100px;
// }
// .stones{
//   width: 100px;
//   height: 150px;
// }
// .stone{
//   display: inline-block;
//   width: 30px;
//   height: 30px;
//   background: skyblue;
//   margin: 2px;
// }
// .drag-div{
//   display: inline-block;
//   width: 100px;
//   height: 30px;
//   line-height: 30px;
//   text-align: center;
//   background: #ccc;
//   margin: 10px;
// }
</style>