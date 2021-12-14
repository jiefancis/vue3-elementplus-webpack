<!--
 * @Descripttion: 
 * @version: 
 * @Author: sea
 * @Date: 2021-07-23 14:32:15
 * @LastEditors: sea
 * @LastEditTime: 2021-07-30 09:13:07
-->
<template>
  <div id="app">
    <canvas id="canvas" width="1024px" height="1024px"></canvas>
  </div>
</template>

<script>
// import server from './utils/axios.interceptors'
// import HelloWorld from './components/HelloWorld.vue'
import diskData from './diskData'
// const echarts =require('echarts')
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
     return {
       diskData
     }
  },
  mounted () {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
      ctx.fillStyle = "rgba(255,210,210,0.5)";
      ctx.strokeStyle = "rgba(255,74,74,0.66)"
      // ctx.fillRect(0, 0, 400, 400);
      // ctx.strokeStyle = "black";
      // ctx.fillStyle = "gray";
      // ctx.lineWidth = 5;
      // ctx.fillRect(0,0,200,300);
      // ctx.strokeRect(0,0,200,200);

      ctx.rect(0, 0, 100, 100)
      ctx.rect(100, 10, 100, 100)
      ctx.stroke();
      ctx.fill();
      ctx.fillStyle = "rgba(255,210,210,0.5)";
      ctx.strokeStyle = "rgba(255,74,74,0.66)"
  }
  // mounted() {
    
  //   var option;
  //   // 基于准备好的dom，初始化echarts实例
  //   var chart = echarts.init(document.getElementById('canvas'));
  //   function getLevelOption() {
  //       return [
  //           {
  //               itemStyle: {
  //                   borderWidth: 0,
  //                   gapWidth: 0
  //               }
  //           },
  //           {
  //               itemStyle: {
  //                   gapWidth: 1
  //               }
  //           },
  //           {
  //               colorSaturation: [0.35, 0.5],
  //               itemStyle: {
  //                   gapWidth: 1,
  //                   borderColorSaturation: 0.6
  //               }
  //           }
  //       ];
  //   }
  //   // // 指定图表的配置项和数据
  //   // function colorMappingChange (value) {
  //   //   var levelOption = getLevelOption(value);
  //   //   chart.setOption({
  //   //       series: [{
  //   //           levels: levelOption
  //   //       }]
  //   //   });
  //   // }

  //   var formatUtil = echarts.format;

  //   chart.setOption(option = {
  //       title: {
  //           text: 'Disk Usage',
  //           left: 'center'
  //       },

  //       tooltip: {
  //           formatter: function (info) {
  //               var value = info.value;
  //               var treePathInfo = info.treePathInfo;
  //               var treePath = [];

  //               for (var i = 1; i < treePathInfo.length; i++) {
  //                   treePath.push(treePathInfo[i].name);
  //               }

  //               return [
  //                   '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
  //                   'Disk Usage: ' + formatUtil.addCommas(value) + ' KB',
  //               ].join('');
  //           }
  //       },
        
  //       series: [
  //           {
  //               name: 'Disk Usage',
  //               type: 'treemap',
  //               visibleMin: 300,
  //               label: {
  //                   show: true,
  //                   formatter: '{b}'
  //               },
  //               itemStyle: {
  //                   borderColor: '#fff'
  //               },
  //               levels: getLevelOption(),
  //               data: this.diskData
  //           }
  //       ]
  //   });

  //       // 使用刚指定的配置项和数据显示图表。
  //       chart.setOption(option);
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
}
</style>
