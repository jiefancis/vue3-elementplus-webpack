<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-08-18 18:26:58
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-20 11:31:10
-->
<template>
<el-row>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
  </el-row>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
  <el-button type="primary" icon="el-icon-search">Search</el-button>
  <el-button type="primary">
    Upload<i class="el-icon-upload el-icon-right"></i>
  </el-button>
  <router-view />
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
  //   axios({
  //     method: 'get',
  //     url: 'http://127.0.0.2:7002/'
  //   }).then(res => {
  //     console.log('res',res)
  //   }).catch(err => {
  //     console.log('err',err)
  //   })
  }
})
</script>
<style>
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
