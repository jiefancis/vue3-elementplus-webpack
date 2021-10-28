<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-27 16:09:28
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-27 16:09:28
-->
<template>
  <div class="global-loading">
    <div class="loading-logo"></div>
    <div class="loading-bg"></div>
    <div class="global-loading-cont">
      <div id="loading-center-absolute">
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
        <div class="object"></div>
      </div>
      <p class="text">加载中...</p>
    </div>
    <div class="ft-record">Copyright@2020 深圳市智汇奇策科技有限公司 版权所有 <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备17140632号-1</a></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'index'
})
</script>

<style lang="scss" scoped>
.global-loading{
  width: 100%;
  height:100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.loading-logo{
  position: absolute;
  top:20px;
  left: 20px;
  width: 220px;
  height: 66px;
  background-image: url('~@/assets/images/log.png');
  background-repeat: no-repeat;
  background-size: 220px;
  z-index: 2;
}
.global-loading .loading-bg{
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url('~@/assets/images/baiyyy-bg.jpg');
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  animation: myfirst 2s linear 1s infinite alternate;
  /* Firefox: */
  -moz-animation: myfirst 2s linear 1s infinite alternate;
  /* Safari 和 Chrome: */
  -webkit-animation: myfirst 2s linear 1s infinite alternate;
}
@keyframes myfirst
{
  from {background-position: center 0;}
  to {background-position: center -20px;}
}

@-moz-keyframes myfirst /* Firefox */
{
  from {background-position: center 0;}
  to {background-position: center -20px;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
  from {background-position: center 0;}
  to {background-position: center -20px;}
}
.global-loading .loading-bg:after{
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  background: #0068b7;
  background-image: -webkit-linear-gradient(45deg,#00b78e,#0068b7);
  background-image: linear-gradient(45deg,#00b78e,#0068b7);
  background-repeat: repeat-x;
  opacity: .92;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
}

.global-loading-cont{
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border-radius: 8px;
  position: relative;
  z-index: 100;
  width: 100px;
  text-align: center;
  color: #fff;
  margin-top: 120px;
}
.global-loading-cont .text{
  font-size: 18px;
  font-weight: 700;
}

.global-loading .ft-record{
  position: absolute;
  width: 100%;
  padding: 10px 0;
  bottom: 0;
  z-index: 2;
  text-align: center;
  color: #fff;
  font-size: 12px;
  background-color: rgba(0,0,0,0.1);
}
.global-loading .ft-record a{
  color: #fff;
}
/*加载动画*/
#loading-center-absolute {
  height: 110px;
}
.object{
  position: absolute;
  height: 10px;
  width: 50px;
  background-color: rgba(255,255,255,0.6);
}
.object:nth-child(2n+0) {
  -webkit-animation: animate_right 2s infinite;
  animation: animate_right 2s infinite;
}
.object:nth-child(2n+1) {
  -webkit-animation: animate_left 2s infinite;
  animation: animate_left 2s infinite;
}
.object:nth-child(1){
  top: 0px;
  left: 0px;
}
.object:nth-child(2){
  top: 0px;
  left: 50px;
}
.object:nth-child(3){
  top: 10px;
  left: 0px;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.object:nth-child(4){
  top: 10px;
  left: 50px;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.object:nth-child(5){
  top: 20px;
  left: 0px;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.object:nth-child(6){
  top: 20px;
  left: 50px;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.object:nth-child(7){
  top: 30px;
  left: 0px;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.object:nth-child(8){
  top: 30px;
  left: 50px;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.object:nth-child(9){
  top: 40px;
  left: 0px;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.object:nth-child(10){
  top: 40px;
  left: 50px;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.object:nth-child(11){
  top: 50px;
  left: 0px;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.object:nth-child(12){
  top: 50px;
  left: 50px;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.object:nth-child(13){
  top: 60px;
  left: 0px;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.object:nth-child(14){
  top: 60px;
  left: 50px;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
.object:nth-child(15){
  top: 70px;
  left: 0px;
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}
.object:nth-child(16){
  top: 70px;
  left: 50px;
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}
.object:nth-child(17){
  top: 80px;
  left: 0px;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.object:nth-child(18){
  top: 80px;
  left: 50px;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
.object:nth-child(19){
  top: 90px;
  left: 0px;
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
.object:nth-child(20){
  top: 90px;
  left: 50px;
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}
@-webkit-keyframes animate_right {
  50% {
    -ms-transform: translate(200px,-200px) rotate(180deg);
    -webkit-transform: translate(200px,-200px) rotate(180deg);
    transform: translate(200px,-200px) rotate(180deg);
  }
}
@keyframes animate_right {
  50% {
    -ms-transform: translate(200px,-200px) rotate(180deg);
    -webkit-transform: translate(200px,-200px) rotate(180deg);
    transform: translate(200px,-200px) rotate(180deg);
  }
}
@-webkit-keyframes animate_left {
  50% {
    -ms-transform: translate(-200px,-200px) rotate(180deg);
    -webkit-transform: translate(-200px,-200px) rotate(180deg);
    transform: translate(-200px,-200px) rotate(180deg);
  }
}

@keyframes animate_left {

  50% {
    -ms-transform: translate(-200px,-200px) rotate(180deg);
    -webkit-transform: translate(-200px,-200px) rotate(180deg);
    transform: translate(-200px,-200px) rotate(180deg);
  }
}

@media screen and (max-width:640px){
  .loading-logo{top:15px;left: 15px;width: 180px;height: 54px;background-size: 180px;}
}
</style>
