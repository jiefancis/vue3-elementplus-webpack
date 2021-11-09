<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-09 16:27:30
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-09 16:55:52
-->

# usage

<m-transfer v-model:value="transferData" :data="data">

transferData 改变的回调 onUpdate:value 避免跟 vue 本身的 onUpdate:value 冲突
