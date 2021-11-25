<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-24 15:24:11
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-08 11:00:02
-->
<script lang="tsx">
import { defineComponent, ref, useSlots } from 'vue'

export default defineComponent({
  setup(props, { slots }) {
    const _slots = useSlots()
    console.log(_slots, 'slotsslotsslots', slots)

    const fieldList = ref([
      { label: '订单号', prop: 'orderNo' },
      { label: '详情号', prop: 'detailNo' },
      { label: '订单状态', type: 'slot', prop: 'orderStatus' },
      { label: '发货状态', prop: 'state' },
      { label: '状态', prop: 'status' },
      { label: '订单号', prop: 'orderNo1' }
    ])

    const tableData = ref([
      {
        orderNo: 1,
        detailNo: 2,
        orderStatus: 1,
        state: 4,
        status: 5,
        orderNo1: 6
      },
      {
        orderNo: 2,
        detailNo: 2,
        orderStatus: 2,
        state: 4,
        status: 5,
        orderNo1: 6
      },
      {
        orderNo: 3,
        detailNo: 2,
        orderStatus: 3,
        state: 4,
        status: 5,
        orderNo1: 6
      },
      {
        orderNo: 4,
        detailNo: 2,
        orderStatus: 4,
        state: 4,
        status: 5,
        orderNo1: 6
      },
      {
        orderNo: 5,
        detailNo: 2,
        orderStatus: 5,
        state: 4,
        status: 5,
        orderNo1: 6
      },
      {
        orderNo: 6,
        detailNo: 2,
        orderStatus: 6,
        state: 4,
        status: 5,
        orderNo1: 6
      }
    ])

    function columnRender(item) {
      const { label, prop } = item
      if (slots[prop]) {
        return (
          <el-table-column label={label} prop={prop}>
            {/** enableObjectSlots is not false */}
            {{
              default: (scope) => {
                return slots[prop]?.(scope)
              }
            }}
          </el-table-column>
        )
      } else {
        return <el-table-column label={label} prop={prop}></el-table-column>
      }
    }
    return () => {
      return (
        <el-table data={tableData.value} border>
          {fieldList.value.map((field) => columnRender(field))}
        </el-table>
      )
    }
  }
})
</script>
