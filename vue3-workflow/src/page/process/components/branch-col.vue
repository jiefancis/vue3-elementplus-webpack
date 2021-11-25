<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 17:50:07
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-23 20:08:06
-->
<template>
  <div class="flow-col" v-for="(cNode,index) in node.conditionNodes" :key="index">
    <div class="clear-left-border" v-show="index === 0"></div>
    <div class="clear-right-border" v-show="index === node.conditionNodes.length - 1"></div>
    <div class="flow-row ">
      <div  class="flow-box">
        <div class="flow-item flow-node-branch">
          <div class="flow-node-box">
            <div  class="node-name">
              <span>分支节点1</span>
              <div class="search-branch-input el-input" style="display: none;">
              <input type="text" autocomplete="off" id="1459067240870576128" class="el-input__inner">
            </div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABrElEQVQ4jaXUvWsVURAF8F+eiUUSFDHmH1iiqyKLaVNEBT8LRcWgNiKKCCoi1kJA0VrTio2gMRDtJIhIbCLY6GKzSrYUERvxCxJJtNgNXh8v2Ze8A9ucM3tm7p2503Z/9IkV4iD68ywdDsn2lbrhBR5FcdKDy3mWzkGtBcMfeIoLeBDFyerlVrgJe7EVPViFvlIbwrooTo40Y9iHO9hXEbcbz6sMj+EeuptIPI+7ixl24RYuBdw3jOMVPuIXzuEEZnAyz9LHoeEGbMMenEZvoI3hIr7UJR4pEx3Ks3SSoilf0YmOBpX+xtXyx3rEZdLBPEvfLpDtWNvw0LzEFbxZRO/EQJ6l0yFZNYd/ltDmGpE1xb38bKAN4rX/GxNiBlNRnGyvN+xVjMUaDOAGPpV6h2IGHyqaFiLDZ0xGcbIzNFzAd0zhGiLcDrTjmFbM5FkcwA68KwuZiOLkKLRVbJuh0qRrqaAS8zhf1ZQx9GOiCcMazjTzlj9gv3/LYQvWK+53IzaXcc9weDnb5n35hRgvDUdxKs/S2Vb2YbeiOSOKdzxLaxt7F27mWXo9JP8CRCZkA/s07y8AAAAASUVORK5CYII=" alt="" style="margin-left: 10px;"></div>
            <div class="branch-main">
              <div class="branch-filter-hint">
                <span>配置筛选条件</span>
              </div>
            </div>
            <div class="close-icon"><i class="el-icon-close"></i></div>
          </div>
        </div>
        <div class="after-node-btn">
          <span><span class="el-popover__reference-wrapper"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QUQxNDBGODYyMEYxMUVCODg5NkUxMUU4RjlCMzM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QUQxNDBGOTYyMEYxMUVCODg5NkUxMUU4RjlCMzM3MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBRDE0MEY2NjIwRjExRUI4ODk2RTExRThGOUIzMzczIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBRDE0MEY3NjIwRjExRUI4ODk2RTExRThGOUIzMzczIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NTYx9wAAAqtJREFUeNqsVs9rE0EU/mZ3MFHTiNAS60kjHkUv9mA99KoUFXPzICIoIhRRxF4kxapVPFSk4MWDRQIeNRTiSfBg/wAVkYDUetAYtbVi86vd3XFnt0lmZye7SZqBRzabed8337yX9x5hl9HuIiG/s3ZAaJsk4idRELGN9yyMnIaQiaaFEFrCc0tSGqBKaxCNjEVxfOIEIn2j0OkQiLYLjK3bmN9gGu9R+zeH3K05vJmpCsSWiphIMRTJuOm4/+MUYgOTNkkyOILWAkrLaYwPvLS/mRuEPlJN4eqS7R+J4OHqXfQlMqFkzlHtPbH+jOPDfZuHRiuFRNhEbcc72LL9CrpZa6VHuBq7aT8ZglImKhSTQ8fU91TXZHxxX47BsbzYHsmuwsNntiKemAoEnDmqORa04ol7DlYz+aBSqCE1fdqOx+5AsC/zxLHgmA7aWCn576T5MjMaH0WvloslJg/xK6SRQz0jpJGDskLqTxqSUMZMdYXXiN543jvMMPbWkq41EZQ0deK1rtQw1lbRp4qKUQTRY5538snryqaZGXgIy/ypqireQmzUPvUshkbtnVxLNaniM6z+zvWMsLSU82ArCC1kzmftqygEAvEE2XOEhRTzAp5fysptiwrN0615+dcVLH9Noz/5pCWYHFPVWlpM42OuLHcNTdFETUzse4Hyn8ddXyX35RjNNuW7UngIuT0Yuo3KytOOySors45vHUfoFOqkcTcZ+PW5ius7x1HMX4C5vhhKxPcU8xdtnxuOr9uaTDlpVB2/2RNd05Ec3oazsyexY/AYaPSAU5jriWFUP+Bv4RWenctiYb7cOLCiF7Y3YnhNHqSYLxTeq/SNGFQxgRFpYx1MCyG0JEXKIYoGDLSWMGtaHY6JrJMxUSYWVQcRYrODsIqUbXbU/y/AAAVBHlwtF3I9AAAAAElFTkSuQmCC" alt="" class="el-popover__reference" aria-describedby="el-popover-4039" tabindex="0"></span></span>
        </div>
      </div>
    </div>
    <!-- <div class="flow-row-container">
      <Process v-if="node.childNode" v-model:node="node"/>
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Card from './card.vue'
import Process from './process.vue'
export default defineComponent({
  components: {
    Card,
    Process
  },
  props: {
    node: Object
  },
  setup(props) {
    console.log('propsssss', props)
    return {
      node: props.node as Record<string, any>
    }
  }
})
</script>

<style lang="scss" scoped>
.flow-col{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: relative;
  .clear-left-border{
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: -5px;
      width: 50%;
      background: #f2f3f5;
      height: 10px;
    }
    &:after{
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 50%;
      background: #f2f3f5;
      height: 10px;
    }
  }
  .clear-right-border{
    &:before{
      content: "";
      position: absolute;
      right: -0.5px;
      top: -5px;
      width: 50%;
      background: #f2f3f5;
      height: 10px;
    }
    &:after{
      content: "";
      position: absolute;
      right: -0.5px;
      bottom: -5px;
      width: 50%;
      background: #f2f3f5;
      height: 10px;
    }
  }
  .flow-row{
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    -webkit-box-flex: 1;
    flex-grow: 1;
    .flow-box {
      -webkit-box-flex: 1;
      flex-grow: 1;
      padding: 0 50px;
      position: relative;
      &:before{
        content: "";
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
      .flow-item{
        margin-top: 20px;
        &:hover{
          .close-icon {
            display: block;
          }
        }
      }
      .flow-node-branch{
        padding-bottom: 10px;
        .node-name {
          color: #575757;
          background-color: #fff;
          border-bottom: 1px solid #dee0e3;
        }
      }
      .flow-node-box{
        cursor: pointer;
        width: 260px;
        height: 118px;
        background-color: #fff;
        box-shadow: 0 2px 6px 0 rgba(75,82,94,20%);
        border-radius: 4px;
        position: relative;
        box-sizing: border-box;
        .close-icon {
          position: absolute;
          display: none;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
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
        .branch-main{
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          height: calc(100% - 44px);
          padding-left: 16px;
          color: #575757;
          border-top: none;
          box-sizing: border-box;
          .branch-filter-hint{
            display: flex;
            -webkit-box-flex: 1;
            flex: 1;
            -webkit-box-align: center;
            align-items: center;
            span {
              color: #ff6901;
            }
          }
        }
      }
      .node-name{
        padding: 15px;
        font-size: 14px;
        font-weight: 700;
        box-sizing: border-box;
        border-radius: 4px 4px 0 0;
        height: 44px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      }
    }
  }
  .after-node-btn{
    position: relative;
    z-index: 10;
  }
}

</style>
