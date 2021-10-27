<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-26 17:03:53
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-26 17:06:10
-->
<!-- <template>
  <div>
    <n-data-table :columns="columns"/>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent
} from 'vue'
import { NDataTable } from 'naive-ui'

export default defineComponent({
  components: {
    NDataTable
  },
  setup() {
    const tableHeaderField = [
      {
        key: 'customName',
        title: '客户名称'
      },
      {
        key: 'customNickname',
        title: '客户简称'
      },
      {
        key: 'customSaleStag',
        title: '客户销售阶段'
      },
      {
        key: 'customRelashipLevel',
        title: '客户关系等级'
      }
    ]
    // const tableHeaderFields = makeTableHeaderFields(tableHeaderField)

    function renderTableHeader(row) {
      console.log('renderTableHeader', row)
    }

    function makeTableHeaderFields(headerFields) {
      return headerFields.map(item => {
        item.isShow = true
        item.isSearch = false
        item.isModify = false
        item.render = renderTableHeader
      })
    }
    return {
      columns: makeTableHeaderFields(tableHeaderField)
    }
  }
})

</script> -->
<template>
  <!-- <div id="microAppContainer"/> -->
<!-- <HelloWorld/> -->
<!-- <div :style="{ display: 'flex', width: '100%'}">
  <div v-for="(item, index) in searchForm" :key="item.value" :style="{ display: 'flex', width: '300px'}">
    <n-select
      v-model:value="searchForm[index].value"
      @update:value="(value, option) => handleSelect(index, value, option)"
      @clear="() => handleSelectClear(index)"
      filterable
      clearable
      tag
      placeholder=""
      :options="options"
    />
    <n-select
      v-show="searchForm[index]?.condition"
      v-model:value="searchForm[index].field1"
      filterable
      placeholder=""
      :options="options"
    />
    <n-input v-model:value="searchForm[index].field2"  type="text" placeholder="基本的 Input" />
    <div class="delete-icon" @click="() => pureCondition(index)">X</div>
  </div>
</div>
<n-button @click="addSearchCondition">Default</n-button>

  <n-data-table :columns="columns" :data="data" :pagination="pagination" /> -->
</template>

<script lang="ts">
// import { computed } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import {
  h,
  defineComponent,
  getCurrentInstance,
  ref,
  resolveComponent,
  watch,
  watchEffect,
  PropType,
  computed
} from 'vue'
import { NTag, NButton  } from 'naive-ui'

import { useColumns } from './index'
const COLUMNS = [
  {
    title: 'name',
    titleText: 'name',
    key: 'name',
    isSearch: false,
    isDel: false,
    isModify: false,
    isOver: false,
    modifyEl: 'span'
  },
  {
    title: 'tag',
    titleText: 'tag',
    key: 'tag',
    isSearch: false,
    isDel: false,
    isModify: false,
    isOver: false,
    modifyEl: 'span'
  }
]

const createData = () => [
  {
    key: 0,
    name: 'John Brown',
    tag: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 1,
    name: 'Jim Green',
    tag: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 2,
    name: 'Joe Black',
    tag: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

// ts
interface Props {
  a: 1
  b: 2
}


export default defineComponent({
  setup () {
    let searchForm = ref<any>([{field1:'',field2: '', value: ''}])
    let searchList = ref<any>([{field1:'',field2: ''}])

    let {columns} = useColumns(COLUMNS)
    let clearSelectLabel = ref<string>('')
    let selectItem = {
      field: 'value'// contain less than greater than
    }
    let selectFields = [

    ]
    let options = ref<any>([
      { label: '各类编号', value: 'code', placeholder: '请选择筛选类型', field1: '', field2: ''},
      { label: '结算单位', value: 'unit', placeholder: '请选择筛选类型', condition: true, field1: '', field2: ''},
      { label: '币种', value: 'current', placeholder: '请选择筛选类型', field1: '', field2: ''}
    ])
    // computed
    const getKey = computed(() => {
      return function(o) {
        return `id_${o}`
      }
    })
    // function
    function handleSelect(index, value, option) {
      console.log(searchForm.value, 'select',value, option)
      if(value) {
        let selected = searchForm.value[index]
        if(selected) {
          selected.disabled = selected.label === option.label
        }
        option.disabled = true
        searchForm.value[index] = option
      }
    }
    function handleSelectClear(index) {
      let option = searchForm.value[index]
      option.disabled = false
      searchForm.value.splice(index, 1)
      console.log('handleSelectClear', index)
    }

    function makeSearchParams() {

    }
    function pureCondition(index) {
      let item = searchForm.value.splice(index, 1)
      item[0].disabled = false
    }
    function addSearchCondition(){
      let param = { field1: '', field2: '', value: ''}
      searchList.value.push(param)
      searchForm.value.push(param)
    }

    return {
      data: createData(),
      columns,
      searchForm,
      handleSelect,
      handleSelectClear,
      searchList,
      getKey,
      addSearchCondition,
      pureCondition,
      options,
      // createColumns({
      //   sendMail (rowData) {
      //     console.info('send mail to ' + rowData.name)
      //   }
      // }),
      pagination: {
        pageSize: 10
      }
    }
  }
})
</script>
<style scoped>
img{
  width: 10px;
  height: 10px;
}
</style>