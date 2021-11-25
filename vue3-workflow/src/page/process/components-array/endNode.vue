<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-13 18:06:19
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-15 14:31:45
-->
<template>
  <div class="flow-row">
    <div class="flow-end-box">
      <div class="flow-item">
        <div class="flow-end">结束</div>
      </div>
    </div>
  </div>
</template>
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
  &.flow-row .flow-box:before {
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
.flow-end-box{
  padding-bottom: 120px;
}
.flow-end {
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
  background-image: linear-gradient(-30deg,#bbbbc4,#d5d5de),linear-gradient(#bcbcc5,#bcbcc5);
  background-blend-mode: normal,normal;
  box-shadow: 0 2px 10px 0 rgba(145,145,153,50%);
  font-size: 18px;
}
</style>
