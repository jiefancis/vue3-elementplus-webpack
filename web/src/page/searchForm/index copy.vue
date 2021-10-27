<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-07 14:44:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-21 14:51:12
-->
<template>
  <div class="wrap">
    <div
      v-for="num in 6"
      :key="num"
      :class="num === curMoveIndex+1 ? 'active item' : 'item'"
      :ref="el => boxs[num-1] = el"
    >{{num-1}}</div>
    <!-- <div class="header">
      <el-button @click="() => setTheme('blue')">blue</el-button>
      <el-button @click="() => setTheme('red')">red</el-button>
      <el-button @click="() => setTheme('black')">black</el-button>
    </div>
    <div class="container flex" ref="el">
      <div class="stones" v-for="(list, index) in stones" :key="index">
        <div class="stone"
          v-for="(id, index) in list"
          :key="index"
          :id="getId(id)"
        >{{id}}</div>
      </div>
    </div>
    <div :id="getId(id)" class="car" v-for="id in 6" :key="id" :ref="el => cars[id] = el"></div> -->
  </div>
</template>

<script lang="ts">
import useTheme from '@/hooks/useTheme'
import {
  defineComponent,
  reactive,
  toRefs,
  watch,
  ref,
  onUpdated,
  onMounted,
  nextTick
} from 'vue'


export default defineComponent({
  setup(props, context) {
    const el = ref() as any
    const history = ref<any>({})
    const runs = ref<any>({})
    const stones = ref([
      [1,2,3,4,5,6],
      [],
      [7,8,9,10,11,12,13,14,15,16,17,18],
      [],
      [19,20,21,22,23,24,25,26,27,28,29,30],
      [],
      [31,32,33,34,35,36,37,38,39,40,41,42]
    ])

    const cars = ref<any>({})
    const boxs = ref<any>([])
    const cacheBoxClientRect = ref<any>({})
    let attachValue = 20
    let curMoveIndex = ref(-1)

    const cacheTranslate = ref<any>({})

    // mouseEvents
    let startX = 0, startY = 0
    let dx = 0, dy = 0
    function onMouseDown(e) {
      console.log(cacheTranslate.value, '鼠标按下', e)
      startX = e.pageX
      startY = e.pageY
    }
    function onMouseMove(e) {
      let endX = e.pageX, endY = e.pageY;
      dx = endX - startX, dy = endY - startY;
      if(cacheTranslate.value[curMoveIndex.value]) {
        dx = cacheTranslate.value[curMoveIndex.value].dx + dx
        dy = cacheTranslate.value[curMoveIndex.value].dy + dy
      }
      e.target.style.transform = `translate(${dx}px, ${dy}px)`
      // e.target.style.left = endX + 'px'
      // e.target.style.top = endY + 'px'
      // console.log(e.target.offsetX, endX, '鼠标移动', endY)
    }
    // function initClientRect
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
    function enableAttach({ml,mr,mb,mt}, {tl, tr, tb, tt}) {
      // let res = {
      //   orient: '',
      //   diff: 0
      // }
      let orient = ''
      // attach  target left
      if(abs(tl - mr) <= attachValue){ // || abs(tl - mr) <= attachValue) {
        console.log('吸附左边', tl - mr)
        // res.orient = 'left'
        // res.diff = tl - mr
        // flag = true
        orient = 'left'
        return 'left'
      }
      if(abs(tr - ml) <= attachValue){ // || abs(tr - mr) <= attachValue) {
        console.log('吸附右边', tr - ml)
        // attached = 'right'
        // res.orient = 'right'
        // res.diff = tr - ml
        // flag = true
        orient = 'right'
        return 'right'
      }
      if(abs(tb - mt) <= attachValue){ //  || abs(tl - mr) <= attachValue) {
        console.log('吸附下边', tb - mt)
        orient = 'bottom'
        // attached = 'bottom'
        // res.orient = 'bottom'
        // res.diff = tb - mt
        // flag = true
        return 'bottom'
      }
      if(abs(tt - mb) <= attachValue){ // || abs(tl - mr) <= attachValue) {
        console.log('吸附上边', tt - mb)
        orient = 'top'
        // attached = 'top'
        // res.orient = 'top'
        // res.diff = tt - mb
        // flag = true
        return 'top'
      }

    }
    function attachToTarget(el, dx, dy) {
      console.log(dx, dy, '吸附', el.style.transform)
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }

    function getAttachTarget(list) {

    }
    // initEvent
    function initEvents() {
      boxs.value.forEach((el,index) => {
        el.addEventListener('mousedown', e => {
          curMoveIndex.value = index
          onMouseDown(e)
          el.addEventListener('mousemove', onMouseMove)
          el.addEventListener('mouseup', e => {
            let box = cacheBoxClientRect.value[index]
            let clientRect = e.target.getBoundingClientRect()
            box.clientRect = clientRect
            let ml = clientRect.left,
                mr = clientRect.right,
                mb = clientRect.bottom,
                mt = clientRect.top;
            let tl,tr,tb,tt;
            let diffValue = 0
            let orient = ''
            let attachOrient


            Object.entries(cacheBoxClientRect.value).forEach(([key, value] , index) => {
              // console.log(key, 'value.target', value)
              let rect = (value as any).clientRect
              tl = rect.left,
                  tr = rect.right,
                  tb = rect.bottom,
                  tt = rect.top;

              attachOrient = enableAttach({ml,mr,mb,mt}, {tl, tr, tb, tt})

            if(cacheTranslate.value[curMoveIndex.value]) {
                cacheTranslate.value[curMoveIndex.value].dx = dx
                cacheTranslate.value[curMoveIndex.value].dy = dy
                cacheTranslate.value[curMoveIndex.value].dt = tb + 100
                cacheTranslate.value[curMoveIndex.value].db = tb - 100
              } else {
                cacheTranslate.value[curMoveIndex.value] = { dx: 0, dy: 0, dt: 0, db: 0}
              }

            })

            console.log('attachRes', attachOrient)
            if(attachOrient) {
              console.log('if(attachRes)', attachOrient)
                // let { orient , diff } = attachRes
                // diffValue = diff
                orient = attachOrient
                let diff
                if(orient === 'left') {
                  diff = tl - mr
                  attachToTarget(e.target, dx + diff, dy)
                  cacheTranslate.value[curMoveIndex.value].dx = dx + diff
                }
                if(orient === 'right') {
                  diff = tr - ml
                  attachToTarget(e.target, dx + diff, dy)
                  cacheTranslate.value[curMoveIndex.value].dx = dx + diff
                }
                if(orient === 'top') {
                  diff = tt - mb
                  attachToTarget(e.target, dx, dy + diff)
                  cacheTranslate.value[curMoveIndex.value].dy = dy + diff
                }
                if(orient === 'bottom') {
                  diff = tb - mt
                  attachToTarget(e.target, dx , dy + diff)
                  cacheTranslate.value[curMoveIndex.value].dy = dy + diff
                }
              }


            console.log(e.target.style.transform,'mouseup事件')
            // console.log('移除move事件', e)
            // if(cacheTranslate.value[curMoveIndex.value]) {
            //   cacheTranslate.value[curMoveIndex.value].dx = dx
            //   cacheTranslate.value[curMoveIndex.value].dy = dy
            // } else {
            //   cacheTranslate.value[curMoveIndex.value] = { dx: 0, dy: 0}
            // }
            // cacheTranslate[index] = cacheTranslate[index] ?
            // e.target.style.transform = `translate(${dx}px, ${dy}px)`
            el.removeEventListener('mousemove', onMouseMove)
          })
        })
      })
    }


    /**
     * clientX clientY
     * movementX movementY
     * offsetX offsetY
     * pageX pageY
     * screenX screenY
     * x y
     */


    function initHistory(){
      for(let i = 1; i <= 6; i++) {
        history.value[i] = { x: 0, y: 0 }
      }
    }
    initHistory()

    // watch(
    //   () => runs.value,
    //   (newVal, oldVal) => {
    //     console.trace(newVal, oldVal)
    //   }
    // )

    // 触发动画
    function moveX(el, diffX = 0, duration = '3s'){
      return new Promise((resolve, reject) => {
        let oldVal = el.style.transform
        el.style.transform = oldVal + `translateX(${diffX}px)`
        el.style.transitionDuration = duration
      })
    }
    function moveY(el, diffY = 0, duration = '3s') {
      return new Promise((resolve, reject) => {
        let oldVal = el.style.transform
        el.style.transform = oldVal + `translateY(${diffY}px)`
        el.style.transitionDuration = duration
      })
    }
    // 队列
    function run(queue) {
      const func = (queue.shift() as any)
      func && func()
    }

    // onmessage
    function push(id, carId) {
      setTimeout(() => {
        const el = cars.value[carId]
        const { x, y } = getOffset(getDom(id), carId)
        let queue
        if(!runs.value[id]) {
          queue = runs.value[id] = []
        }
        if(x !== 0) {
          queue.push(function() { moveX(el, x)})
        }
        if(y !== 0){
          queue.push(function() { moveY(el, y)})
        }
        el.addEventListener('webkitTransitionEnd', function() { run(queue) })
      }, 0)
    }
    function walk(id) {
      let queue = runs.value[id] || []
      if(queue?.length) {
        run(queue)
      }
    }
    onMounted(() => {
      nextTick(() => {
        initClientRect()
      })
      initEvents()
      // push(18,1)
      // push(19,2)
      // push(10,3)
      // push(20,4)
      // setTimeout(() => {
      //   walk(18)
      //   walk(10)
      //   walk(20)
      // }, 300)
      // setTimeout(() => {
      //   walk(19)
      // }, 500)

      // setTimeout(() => {
      //   push(6,1)
      //   walk(6)
      // }, 5000)

      nextTick(() => {
        initEvents()
        // push(18,1)
        // push(19,2)
        // push(10,3)
        // push(20,4)

        // new Promise((resolve, reject) => {
        //   walk(18)
        //   walk(10)
        //   walk(20)
        // })
      })
    })


    function getDom(id) {
      return document.querySelector(`#e_${id}`) || document.documentElement
    }
    function getOffset(el, carId) {
      const x = el.offsetLeft;
      const y = el.offsetTop;

      const prev = history.value[carId]

      const diffX = x - prev.x
      const diffY = y - prev.y
      prev.x = x
      prev.y = y

      // console.log('getOffset----',diffX , diffY)
      return {
        x: diffX,
        y: diffY
      }
    }

    function getId(id) {
      return 'e_' + id
    }

    // websocket


    // let maxReconnectTimes = 3
    // let reconnectTimer = null
    // class Socket{
    //   constructor(url, protocol) {
    //     // const ws = new WebSocket(url, protocol)
    //     return new WebSocket(url, protocol) as any
    //   }
    //   open(){
    //     const { resolve, reject, promise } = usePromise()
    //     this?.onopen = function(event) {
    //       resolve(event)
    //     }
    //     return promise
    //   }
    //   close() {
    //     const { resolve, reject, promise } = usePromise()
    //     this?.onclose = function(event) {
    //       if(this.timer) clearTimeout(this.timer)
    //       resolve(event)
    //     }
    //     return promise
    //   }
    //   error() {
    //     const { resolve, reject, promise } = usePromise()
    //     this?.onerror = function(event) {
    //       if(this.timer) clearTimeout(this.timer)
    //       resolve(event)
    //     }
    //     return promise
    //   }
    //   message() {
    //     const { resolve, reject, promise } = usePromise()
    //     this?.onmessage = function(event) {
    //       resolve(event)
    //     }
    //     return promise
    //   }
    //   heart() {
    //     function heart() {
    //       const self = this as any
    //       self.send({})
    //       self.timer = setTimeout(heart, 3000)
    //     }
    //     heart()
    //   }
    // }

    // function usePromise() {
    //   let resolve, reject;
    //   const promise = new Promise((_resolve, _reject) => {
    //     resolve = _resolve
    //     reject = _reject
    //   })
    //   return {
    //     resolve,
    //     reject,
    //     promise
    //   }
    // }

    // function scheduler(id, carId) {
    //   push(id, carId)
    //   setTimeout(() => {
    //     walk(id)
    //   },0)
    // }
    // function reconnectWS() {
    //   if (maxReconnectTimes--) {
    //     reconnectTimer && clearTimeout(reconnectTimer)
    //     reconnectTimer = setTimeout(() => {
    //       socket = new Socket(url)
    //     }, 2000)
    //   }
    // }
    // let socket = new Scoket(url)
    // socket.open().then(res => {
    //   socket.heart()
    //   socket.message().then(res => {
    //     scheduler(res)
    //   }).catch(err => {
    //     console.error(err)
    //   })
    // })
    // socket.error().then(res => {
    //   reconnectWS()
    // })
    // socket.close().then(res => {
    //   reconnectWS()
    // })
    // const { setTheme } = useTheme()
    function setTheme(color){
      const root = document.querySelector('body') as any
      // console.log(root, 'setTheme', color)
      // root.setAttribute['--theme-color'] = color
      root.setAttribute('style', `--theme-color: ${color}`)
      // body.setAttribute['--theme-color'] = color
    }
    return {
      setTheme,
      stones,
      el,
      cars,
      boxs,
      getId,
      curMoveIndex
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