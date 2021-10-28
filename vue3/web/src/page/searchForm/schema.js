/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-07 15:35:51
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-07 15:35:52
 */
export default {
  topForm: {
    ref: null,
    data: {},
    rules: {},
    labelWidth: '110px',
    fieldList: [
      {
        label: '处置单位名称',
        value: 'dispositionId',
        type: 'select',
        api: '相对路径',
        list: 'getDispositionTypeList'
      },
      {
        label: '状态',
        value: 'statusValue',
        type: 'select',
        list: 'getQueryContractList'
      },
      {
        type: 'button',
        label: '',
        btnlabel: '$t(table.search)', // 查询按钮
        btType: 'primary',
        icon: 'el-icon-search',
        event: 'search', // event值为notification.js中定义的方法名
        show: true,
        disabled: '$hasPerm(search)'
      },
      {
        type: 'button',
        label: '',
        btnlabel: '$t(table.reboot)', // 重置按钮
        btType: 'warning',
        icon: 'el-icon-refresh-left',
        event: 'reset', // event值为notification.js中定义的方法名
        show: true,
        disabled: '$hasPerm(search)'
      }
    ]
  },
  listTypeInfo: [],
  buttons: [
    {
      label: '$t(table.add)', // 支持国际化，前端配置
      permisCode: 'add', // '按钮权限编码'
      type: 'primary',
      icon: 'el-icon-folder-add',
      event: 'openAddPage'
    },
    {
      label: '$t(table.add)', // 支持国际化，前端配置
      permisCode: 'add', // '按钮权限编码'
      type: 'primary',
      icon: 'el-icon-folder-add',
      event: 'openAddPage'
    }
  ],
  tableInfo: {
    fieldList: [
      // {label: this.$t('table.id'), type: "selection", width: 50, fixed: 'left'},//选项框
      { label: '$t(table.id)', type: 'index', width: 50 }, // 序列
      { label: '合同编号', prop: 'contractNo', minWidth: 100 },
      { label: '状态', prop: 'statusString', minWidth: 100 },
      { label: '处置单位名称', prop: 'storeName', minWidth: 100 },
      { label: '合同开始时间', prop: 'contractStartTime', minWidth: 100 },
      { label: '合同结束时间', prop: 'contractEndTime', minWidth: 100 },
      { label: '合同剩余时间', prop: 'remainTime', minWidth: 100 },
      { label: '备注', prop: 'remark', minWidth: 100 }
    ],
    // 表格自定义按钮
    handle: {
      fixed: 'right',
      label: '$t(table.actions)', // 操作列名
      width: '100', // 默认操作按钮列宽度
      btList: [// 添加操作按钮
        // 自定义按钮
        {
          label: '编辑',
          type: 'success',
          icon: '',
          event: 'openEditPage',
          show: true,
          disabled: '$hasPerm(edit)'
        }
        // event值为notification.js中定义的方法名
      ]
    }
  }
}
