<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-26 17:03:53
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-23 11:07:51
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
<!-- <HelloWorld/> -->
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import {
  h,
  defineComponent,
  getCurrentInstance,
  ref,
  resolveComponent,
  watch,
  watchEffect
} from 'vue'
import { NTag, NButton  } from 'naive-ui'

// import

const createData = () => [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['wow']
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default defineComponent({
  // components: {
  //   HelloWorld
  // },
  setup () {
    // window.$message = useMessage()
    // const message = useMessage()
    // var
    let inputValue = ref<any>('')
    let columns = ref<any>(null)
    let val = ref<string>('123')
    // watch
    function renderImgIcon(src, style={ width: '15px', height: '15px' }){
      return h('img', {
            src, //: require(url),
            style,
            onClick(e) {
              console.log(inputValue.value, 'click event', e)
              inputValue.value = false
            }
          })
    }

    function renderTitle(column) {
      const instance = getCurrentInstance() as any
      if(inputValue.value) {
        return h('div', {
              style: {
                display: 'flex',
                'justify-content': 'space-between'
              }
              }, [
                h('span', {}, '名字111'),
                renderImgIcon(require('../../assets/search.png')),
                renderImgIcon(require('../../assets/delete_fill.png')),
              ])
      } else {
      return h('div', {
                style: {
                  display: 'flex',
                  'justify-content': 'space-between'
                }
              }, [
                h(HelloWorld, {
                  style: {
                    width: '100px',

                  }
                  // type: 'text',
                  // onChange(e) {
                  //   inputValue.value = !!e.target.value
                  //   console.log(e.target.value,'native element change event', arguments)
                  // },
                  // modelValue: val.value,
                  // 'onUpdate:modelValue': value => {
                  //   val.value = value
                  //   console.log('usage on native element', value)
                  // }
                }),
                h(resolveComponent('n-input'), {
                  type: 'text',
                  style: {
                    width: '100%',
                    height: '100%'
                  },
                  clearable: true,
                  onBlur(e){
                    inputValue.value = true
                    console.log('onBlur.value = e',e)
                  },
                  value: val.value,
                  "onUpdate:value"(value) {
                    val.value = value
                    console.log(val.value, 'onUpdate:value', val.value)
                    // instance.ctx.$emit('onUpdate:value', e?.value)
                  }
                })
              ])
      }
    }
    function createColumns() { // { sendMail }
      return [
        {
          title: renderTitle,
          key: 'name',
          align: 'center',
        },
        {
          title: 'Tags',
          key: 'tags',
          render (row) {
            const tags = row.tags.map((tagKey) => {
              return h(
                NTag,
                {
                  style: {
                    marginRight: '6px'
                  },
                  type: 'info',
                  onClick() {
                    console.log("inputValue.value", inputValue.value)
                    inputValue.value = true
                  }
                },
                {
                  default: () => tagKey
                }
              )
            })
            return tags
          }
        },
        {
          title: 'Action',
          key: 'actions',
          render (row) {
            return h(
              NButton,
              {
                size: 'small'
                // onClick: () => sendMail(row)
              },
              { default: () => 'Send Email' }
            )
          }
        }
      ]
    }
    watchEffect(() => {
      columns = createColumns()
      console.log('inputValue.value', inputValue.value)
      return inputValue.value
    })

    return {
      data: createData(),
      columns: columns,
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