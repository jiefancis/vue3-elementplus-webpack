<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-15 14:12:23
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-15 14:52:14
-->
<template>
  <div class="flow-row">
    <div class="flow-box">
      <div class="flow-item" style="padding-top: 0px;">
        <div class="node-name node-start">开始</div>
      </div>
      <div class="after-node-btn node-start-btn">
        <AddIcon :index="0"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import AddIcon from './addIcon.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    AddIcon
  },
  setup() {

  }
})
</script>
<style lang="scss" scoped>
.flow-row {
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.flow-box {
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 0 50px;
  position: relative;
  &.flow-box:before {
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
  .node-start {
    position: relative;
    display: flex;
    z-index: 2;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    color: #f8f8fa;
    background-image: linear-gradient(90deg,#ff6a00,#f78b3e),linear-gradient(#ff6a00,#ff6a00);
    background-blend-mode: normal,normal;
    box-shadow: 0 2px 10px 0 rgba(255, 107, 2, 50%);
    font-size: 18px;
  }
  .after-node-btn {
    padding: 20px 0 41px;
    position: relative;
    text-align: center;
  }
  .node-start-btn {
    padding-bottom: 20px;
  }
}
</style>
