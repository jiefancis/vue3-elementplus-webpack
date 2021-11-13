<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:12:17
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-12 16:50:17
-->
<template>
  <div class="add-icon">
    <span class="add-icon__circle">
      +
    </span>
  </div>
</template>
<Style lang="scss" scoped>
.add-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  &__circle{
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #ff6a00;
    background: #fff;
    border-radius: 50%;
  }
}
</Style>
