<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-13 17:33:13
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-13 17:51:57
-->
<template>
  <div class="m-water">

  </div>
</template>
<style lang="scss" scoped>
.m-water{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #fefefe;
  animation: water 5s ease-in-out infinite;
}
@keyframes water{
  from {
    transform: scale(1)
  }
  to {
    transform: scale(2)
  }
}
</style>
