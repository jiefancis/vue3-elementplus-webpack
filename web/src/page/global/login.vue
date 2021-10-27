<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-29 17:25:36
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 15:49:53
-->
<template>
  <div>
    <zhqc-transit></zhqc-transit>
  </div>
</template>

<script lang="ts" setup>
import {
  onBeforeMount
} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import zhqcTransit from '@/zhqc/zhqcTransit/index.vue'
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #036fe8;
  .login-form {
    position: relative;
    width: 420px;
    max-width: 100%;
    padding: 50px 35px 0;
    margin: 0 auto;
    margin-top: 13%;
    /*overflow: hidden;*/
    background: #fff;
    border-radius: 10px;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    position: absolute;
    top: 3px;
    z-index: 1000;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 32px;
      margin: 0px auto 18px auto;
      text-align: center;
      font-weight: bold;
      color: #409eff;
    }
    .set-language {
      position: absolute;
      top: 3px;
      font-size: 18px;
      right: 0px;
      cursor: pointer;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
}
</style>
