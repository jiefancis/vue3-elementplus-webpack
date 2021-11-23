<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:19:44
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-23 19:44:59
-->
<template>
<div class="flow-row">
  <div class="flow-box">
    <div class="flow-item" v-if="node">
        <div class="flow-node-box">
          <div class="node-name node-sp">
            <span>{{ node.name }}</span>
            <div class="search-input el-input" style="display: none;">
              <input type="text" autocomplete="off" id="1459067759072641024" class="el-input__inner">
            </div>
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MTdGMUQ3RTg4OTcxMUVCOEM4QThBRTkzNUQ1OUNEQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MTdGMUQ3Rjg4OTcxMUVCOEM4QThBRTkzNUQ1OUNEQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxN0YxRDdDODg5NzExRUI4QzhBOEFFOTM1RDU5Q0RBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgxN0YxRDdEODg5NzExRUI4QzhBOEFFOTM1RDU5Q0RBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+M6Uh4QAAARNJREFUeNpi/P//PwMOIAzEoUBsDcRSULFnQHwEiFcD8TtsmhhxGGgOxDVAzIPDss9A3ATEZ4gxUAGIZwAxOwN+8BOI04H4IbIgExaFSUQYxgBVk4guiM1AUwbigSkhAxmBmIMEAzkJGfgfPUwIgAfEeHkDCQZuIMbAjUB8gAjD9gHxZmLTISM0UUcCsQCa3AcgXgrEa6FBRNCFsLBcBcQLsMgtBuI12AzDZyAMSGMRU8anAeRlkKGpQGwDxKxo8vxYktFPqLeRwR8gPgXE01iAhAUQR5AQs6AcIo5FPBCIb4Ncp8tAPaDHRChMSAQKoDDUAzKMqGTgWUY8BSxZABQpVUCsRCXz7oAM1ABiWWo5ECDAAE5EOqFnWT67AAAAAElFTkSuQmCC" alt="" style="margin-left: 10px;">
          </div>
          <div class="node-main">
            <span >审批人：</span>
            <div class="flex-box">
              <div class="left">
                <span class="node-face">s</span>
              </div>
              <div class="right">
                <div class="full-name">{{node.type}}</div>
              </div>
            </div>
          </div>
          <div class="node-main" v-show="false">
            <span class="hint-title">设置此节点</span>
          </div>
        <div class="close-icon"><i data-v-25036ad3="" class="el-icon-close"></i>
        </div>
      </div>
    </div>
    <div class="add-node-btn card" >
      <AddIcon v-model:node="node.childNode"/>
    </div>
  </div>
  <!-- <div class="flex-container">
    <Process v-model:node="node" v-if="node.childNode"/>
  </div> -->
</div>

</template>
<script lang="ts">
/**
 * data props
 */
import AddIcon from './addIcon.vue'
import Process from './process.vue'
import { defineComponent, watch } from 'vue'
export default defineComponent({
  name: 'Card',
  components: {
    AddIcon,
    Process
  },
  props: {
    node: Object
  },
  setup(props, ctx) {
    console.log('setup-props.node', props.node)
    let node = props.node
    // if(!props.node) {
    //   node = (props as any).node = { childNode: null}
    // } else {
    //   node = props.node
    // }

    watch(
      () => node,
      (newVal, oldVal) => {
        ctx.emit('update:node', newVal)
        console.log('card--node--watch', (props.node as any).childNode)
      }
    )
    console.log('card--node', (props.node as any).childNode)
    // (props.node as any).childNode = (props.node as any).childNode || {}
    // const nodeOps = inject('nodeOps') as Record<string, any>
    return {
      node: node as Record<string, any>
    }
  }
})



</script>
<style lang="scss" scoped>
.flow-row{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
.flow-box{
  flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 20px 50px 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 1px;
    height: 100%;
    background-color: #cccfdb;
  }
}
.flow-node-box{
  cursor: pointer;
  width: 260px;
  height: 118px;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(75,82,94,0.2);
  box-shadow: 0 2px 6px 0 rgba(75,82,94,20%);
  border-radius: 4px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  &:hover{
    .close-icon{
      display: block;
    }
  }
  .node-name{
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
    height: 44px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    background-color: #ff6a00;
    background-image: linear-gradient(90deg,#ff6a00,#f78b3e),linear-gradient(#ff6a00,#ff6a00);
  }
  .node-main{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: calc(100% - 44px);
    border-top: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: #575757;
    .flex-box {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 14px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-right: 10px;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .right{
        margin-left: 10px;
      }
      .node-face {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 28px;
        height: 28px;
        background-color: #ff6a00;
        border-radius: 28px;
        color: #fff;
        white-space: nowrap;
      }
    }
  }
  .close-icon {
    position: absolute;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    top: -5px;
    left: -5px;
    width: 20px;
    height: 20px;
    background: #9e9e9e;
    color: #fff;
    font-size: 14px;
    border-radius: 16px;
  }
}
.add-node-btn{
  position: relative;
  z-index: 10;
  padding: 20px 0 41px 0;
}
</style>
