<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-02 17:01:54
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-08 13:45:32
-->
<template>
 <div class="m-upload">
  <div class="m-upload--drag">
    <slot name="drag">
      <el-button @click="upload">upload</el-button>
      <div class="m-upload--dragarea" @drop.prevent="onFileDrop" @dragover="onDragover"></div>
      <ul>
        <li v-for="file in files" :key="file.name">{{file.name}}</li>
      </ul>
    </slot>
  </div>
 </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import axios from 'axios'
export default defineComponent({
 name: 'MUpload',
 setup() {
  const files = ref<any[]>([])
  function onFileDrop(e){

    let filesList = Array.from(e.dataTransfer.files)
    files.value.push(...filesList)
    // debugger
    console.log(files.value,'onFileDrop')
  }
  function onDragover(e) {
    console.log('onDragover', e, e.preventDefault())
    e.preventDefault()
  }
  function upload(e) {
    e.preventDefault()
    let fd = new FormData()
    files.value.forEach(file => {
      console.log('append', file)
      fd.append(file.name, file)
    })
    axios.post('http://127.0.0.1:7002/file/upload', fd, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  return {
    onFileDrop,
    onDragover,
    files,
    upload
  }
 }

})

</script>

<style lang='scss' scoped>
.m-upload--dragarea{
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid #ddd;
  // &:before{
  //   content: '';
  //   position: absolute;
  //   width: 70px;
  //   height: 1px;
  //   background: #ddd;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  // }
  // &:after{
  //   content: '';
  //   position: absolute;
  //   width: 1px;
  //   height: 70px;
  //   background: #ddd;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  // }
}

</style>
