<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-08 19:58:23
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-07 16:04:43
-->
<template>
  <div class="demo">
    <div>{{inputValue}}</div>
    <mInput v-model:value="inputValue"/>
    <m-table :columns="columns" :data="tableData"/>
    <m-checkbox v-model:value="checked"><template #label><span>备选项1</span></template><template #label2><span>{{checked}}</span></template></m-checkbox>
    <!-- <mTable :data="data">
      <m-table-column prop="name" label="姓名"></m-table-column>
      <mTableColumn prop="account" label="账号"/>
      <mTableColumn prop="pwd" label="密码"/>
    </mTable> -->
    <!-- <mCheckboxGroup v-model:checked="allChecked"> -->
      <m-checkbox
        v-for="num in 6"
        :value="num"
        :key="num"><template #label><span>备选项{{num}}</span></template></m-checkbox>
    <!-- </mCheckboxGroup> -->
    <mTransfer v-model:options="options" v-model:value="value"/>
    <mButton @click="handleClick">mButton</mButton>
    <mAffix :offset="100" position="top"><span style="color: rgb(225, 0, 255);width: 100px;height: 20px;background: #f0f0f0">affix</span></mAffix>
    <div class="affix-container--wrap">
      <div class="affix-container">
        <div class="affix-content">
          <div class="affix-padding"></div>
          <mAffix :offset="100" target=".affix-container" position="bottom"><span style="color: rgb(225, 0, 255)">affix</span></mAffix>
        </div>
      </div>
    </div>

    <mCarousel width="600px" height="300px">
      <span
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        v-for="num in 4"
        :key="num"
      >{{num}}</span>
      <!-- <span
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >0</span>
      <span
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >1</span>
      <span
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >2</span>
      <span
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >3</span> -->
    </mCarousel>

    <mBackTop/>
    <!-- <n-back-top :right="100" /> -->
    <mUpload/>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, PropType, watch } from 'vue'
import mInput from './package/input/index.vue'
// import { mTable, mTableColumn } from './package/table'
import mTable from './package/table/index.vue'
import mCheckbox from './package/checkbox/index.vue'
import mCheckboxGroup from './package/checkbox/group.vue'
import mTransfer from './package/transfer/index.vue'
import mButton from './package/button/index.vue'
import mAffix from './package/affix/index.vue'
import mCarousel from './package/carousel/index.vue'
import mBackTop from './package/backToTop/index.vue'
import mUpload from './package/upload/index.vue'
import X2JS from 'x2js'
import localforage from 'localforage'
const xml = '<?xml version="1.0" encoding="UTF-8" ?><definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:activiti="http://activiti.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="ff80808163aab2210163ab05d2bb0001"><process id="reimbursementflow1" name="费用报销流程模板(一)"><startEvent id="start1" name="开始" activiti:initiator="applyUserId" /><endEvent id="end1529390930345" name="结束" /><userTask id="task1529390886066" name="填写申请" activiti:assignee="${applyUserId}" activiti:formKey="ff80808163875bde0163877f58810005"><extensionElements><activiti:taskListener id="402881ef4095603b014095c7d6e30009" event="complete" class="com.olymtech.oa.manager.workFlow.listener.task.TurnBackTaskListener" /></extensionElements></userTask><userTask id="task1529390906380" name="部门审批" activiti:assignee="${assigneeUser}" activiti:formKey="ff80808163875bde0163877f58810005"><multiInstanceLoopCharacteristics isSequential="true" activiti:collection="assigneeUserIdList" activiti:elementVariable="assigneeUser"><loopCardinality>${assigneeUserCount}</loopCardinality><completionCondition>${doBackTask==1}</completionCondition></multiInstanceLoopCharacteristics></userTask><userTask id="task1529390915138" name="财务主管" activiti:candidateGroups="ff808081644f677901644f7d73e20004" activiti:formKey="ff80808163875bde0163877f58810005" /><userTask id="task1529391126934" name="行政助理" activiti:candidateGroups="ff808081644f677901644f7ceb420001" activiti:formKey="ff80808163875bde0163877f58810005" /><serviceTask id="task1530068118185" name="业务处理" activiti:expression="${flowUtil.updateApplyInfo(execution)}"><documentation>更新业务数据</documentation></serviceTask><exclusiveGateway id="exclusiveGateway1531459618799" name="exclusive Gateway" /><sequenceFlow id="flow1529390975954" sourceRef="start1" targetRef="task1529390886066" /><sequenceFlow id="flow1529390979849" sourceRef="task1529390906380" targetRef="task1529390915138" /><sequenceFlow id="flow1529390984234" sourceRef="task1529390915138" targetRef="task1530068118185" /><sequenceFlow id="flow1529391174821" sourceRef="task1529390886066" targetRef="task1529391126934" /><sequenceFlow id="flow1529391202443" sourceRef="task1529391126934" targetRef="exclusiveGateway1531459618799" /><sequenceFlow id="flow1530068135628" sourceRef="task1530068118185" targetRef="end1529390930345" /><sequenceFlow id="flow1531459647383" name="有部门审批" sourceRef="exclusiveGateway1531459618799" targetRef="task1529390906380"><conditionExpression xsi:type="tFormalExpression"><#cdata-section>${assigneeUserCount&gt;0}</#cdata-section></conditionExpression></sequenceFlow><sequenceFlow id="flow1531459712313" name="无部门审批" sourceRef="exclusiveGateway1531459618799" targetRef="task1529390915138"><conditionExpression xsi:type="tFormalExpression"><#cdata-section>${assigneeUserCount&lt;1}</#cdata-section></conditionExpression></sequenceFlow></process><bpmndi:BPMNDiagram id="BPMNDiagram_reimbursementflow1"><bpmndi:BPMNPlane bpmnElement="reimbursementflow1" id="BPMNPlane_reimbursementflow1"><bpmndi:BPMNShape bpmnElement="start1" id="BPMNShape_start1"><omgdc:Bounds height="30" width="30" x="36" y="37" /></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="end1529390930345" id="BPMNShape_end1529390930345"><omgdc:Bounds height="30" width="30" x="580" y="369" /></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="task1529390886066" id="BPMNShape_task1529390886066"><omgdc:Bounds height="50" width="90" x="147" y="27" /></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="task1529390906380" id="BPMNShape_task1529390906380"><omgdc:Bounds height="50" width="90" x="531" y="178" /></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="task1529390915138" id="BPMNShape_task1529390915138"><omgdc:Bounds height="50" width="90" x="180" y="247" /></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="task1529391126934" id="BPMNShape_task1529391126934"><omgdc:Bounds height="50" width="90" x="311" y="27" /></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="task1530068118185" id="BPMNShape_task1530068118185"><omgdc:Bounds height="50" width="90" x="395" y="361" /></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="exclusiveGateway1531459618799" id="BPMNShape_exclusiveGateway1531459618799"><omgdc:Bounds height="40" width="40" x="336" y="120" /></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement="flow1529390975954" id="BPMNEdge_flow1529390975954"><omgdi:waypoint x="66" y="52" /><omgdi:waypoint x="142" y="52" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="flow1529390979849" id="BPMNEdge_flow1529390979849"><omgdi:waypoint x="576" y="233" /><omgdi:waypoint x="576" y="272" /><omgdi:waypoint x="275" y="272" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="flow1529390984234" id="BPMNEdge_flow1529390984234"><omgdi:waypoint x="225" y="302" /><omgdi:waypoint x="225" y="386" /><omgdi:waypoint x="390" y="386" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="flow1529391174821" id="BPMNEdge_flow1529391174821"><omgdi:waypoint x="242" y="52" /><omgdi:waypoint x="306" y="52" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="flow1529391202443" id="BPMNEdge_flow1529391202443"><omgdi:waypoint x="356" y="82" /><omgdi:waypoint x="356" y="120" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="flow1530068135628" id="BPMNEdge_flow1530068135628"><omgdi:waypoint x="490" y="386" /><omgdi:waypoint x="535" y="386" /><omgdi:waypoint x="535" y="384" /><omgdi:waypoint x="580" y="384" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="flow1531459647383" id="BPMNEdge_flow1531459647383"><omgdi:waypoint x="376" y="140" /><omgdi:waypoint x="576" y="140" /><omgdi:waypoint x="576" y="173" /></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="flow1531459712313" id="BPMNEdge_flow1531459712313"><omgdi:waypoint x="336" y="140" /><omgdi:waypoint x="225" y="140" /><omgdi:waypoint x="225" y="242" /></bpmndi:BPMNEdge></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></definitions>'
const json = require('./xml.json')
localforage.setItem('test', 'value111').then(function(value) {
  console.log('then-value', value)
}).catch(function(err) {
  console.log('catch-err', err)
})

onMounted(() => {
  // const x2js = new X2JS()
  // console.log('xmlxmlxmlxml', xml)
  // var json = x2js.xml2js(xml)
  // var document = x2js.js2xml(json);
  // console.log(json,'xmllll',document);
})

console.log('mInput', mInput)
let inputValue = ref<string>('1')
let checked = ref<boolean>(false)
let allChecked = ref<Array<any>>([1])
const columns = [
  {
    key: 'name',
    title: '姓名'
  },
  {
    key: 'account',
    title: '账号'
  },
  {
    key: 'pwd',
    title: '密码'
  }
]
function toggleCheckbox() {
  console.log('toggleCheckbox', arguments)
}
function createData(){
  return [
    {
      name: '张三',
      account: 'zhangsan',
      pwd: '123456'
    },
    {
      name: '李四',
      account: 'lisi',
      pwd: '1234567'
    },
    {
      name: '王五',
      account: 'wangwu',
      pwd: '12345678'
    }
  ]
}
const tableData = createData() as Array<Record<string, any>>

function handleClick() {
  console.log('handleClick')
}
// @ts-check
interface Option {
  label: number | string,
  value: number | string,
  disabled: Boolean
}
function createOptions(): any {
  let options: Option[] = []
  for(let i = 1; i <= 10; i++) {
    options.push({
      label: 'Option ' + i,
      value: String(i),
      disabled: i % 5 === 0
    })
  }
  return options
  // return new Array(100).map((v, i) => ({
  //   label: 'Option ' + i,
  //   value: i,
  //   disabled: i % 5 === 0
  // }))
}

let options = ref<any>(createOptions())
let value = ref<any>([])
console.log('index.vue', options, value)

watch(
  [options, value],
  (newVal, oldVal) => {
    console.log(oldVal, 'watch - index - options', newVal)
    // options.value = value[0]
    value.vlaue = newVal[1]
  }
)

</script>
<style lang="scss" scoped>
.demo {
  // height: 300vh;
  height: 100vh;
  overflow: scroll;
}
.affix-container--wrap{
  position: relative;
  height: 300px;

}
.affix-container{
  width: 300px;
  height: 300px;
  overflow: scroll;
  background: #fff;
  margin: auto;
  .affix-padding{
    padding-top: 500px;
  }
  .affix-content{
    height: 1000px;
    background: #f0f0f0;
  }
}
.carousel-img{
  display: inline-block;
  width: 600px;
  height: 300px;
}
</style>
