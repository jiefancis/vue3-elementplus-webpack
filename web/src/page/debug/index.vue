<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-26 14:39:34
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-26 21:03:22
 style=" height: 500px;"
        class="ag-theme-alpine"
        rowSelection="multiple"
        :columnDefs="columnDefs"
        :rowData="rowData"
-->
<template>
  <!-- <BaseTable/> -->
  <div>debug页面</div>
  <!-- <ag-grid-vue

        style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                id="myGrid"
                :columnDefs="columnDefs"

                :rowData="rowData"
                :autoGroupColumnDef="autoGroupColumnDef"
                :icons="icons"
                :rowSelection="rowSelection"

                @grid-ready="onGridReady"
                :defaultColDef="defaultColDef"
                :frameworkComponents="frameworkComponents"
        >
  </ag-grid-vue>-->
  <ag-grid-vue
    style="width: 100vw; height: 60vh;"
    class="ag-theme-alpine"
    id="myGrid"
    @grid-ready="onGridReady"
    :columnDefs="columnDefs"
    :defaultColDef="defaultColDef"
    :rowData="rowData"
    :suppressMenuHide="true"
    :frameworkComponents="frameworkComponents"
  ></ag-grid-vue>
</template>

<script lang="ts" setup>
import { AgGridVue } from "ag-grid-vue3";
import BaseTable from '@/components/table.vue'
import { withDefaults, defineProps, ref, onMounted, resolveComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import TableHeaderColumn from './tableHeaderColumn.vue'

let frameworkComponents = { agColumnHeader: TableHeaderColumn };
let defaultColDef = ref<Record<string, any>>({
  editable: true,
  sortable: true,
  flex: 1,
  minWidth: 100,
  filter: true,
  resizable: true,
  headerComponentParams: { menuIcon: 'fa-bars' },
})
// })
// data
var myIcons = {
  sortAscending: function () {
    return 'ASC';
  },
  sortDescending: function () {
    return 'DESC';
  },
};
const columnDefs = ref<any>([
  {
    headerName: "Athlete", field: "athlete",
    // headerComponent: TableHeaderColumn,
    headerComponentParams:  {
      customHeader: {
        id: 1,
        isSearch: false,
        headerName: 'custom1'
      }
    }
  },
  { headerName: "Sport", field: "sport",
    // headerComponent: TableHeaderColumn,
    headerComponentParams:  {
      customHeader:
        {
          id:2,
          isSearch: false,
          headerName: 'custom2'
        }
     }
  },

  // this column uses a custom header
  // component specified in frameworkComponents
  {
    // headerName: "Age",
    field: "age",
    // headerComponent: TableHeaderColumn,
    headerComponentParams:  {
      customHeader: {
        id: 3,
        isSearch: false,
        headerName: 'custom3'
      }
    }
  }
])
const rowData = ref<any>([
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 },
])

const autoGroupColumnDef = ref<any>({
  headerName: 'Athlete',
  field: 'athlete',
  rowDrag: true,
  icons: {
    menu: '<i class="fa fa-shower"/>',
    filter: '<i class="fa fa-long-arrow-alt-up"/>',
    columns: '<i class="fa fa-snowflake"/>',
    sortAscending: '<i class="fa fa-sort-alpha-up"/>',
    sortDescending: '<i class="fa fa-sort-alpha-down"/>',
  },
  headerCheckboxSelection: true,
  width: 300,
})
const icons = ref<any>({
  menu: '<i class="fa fa-bath" style="width: 10px"/>',
  filter: '<i class="fa fa-long-arrow-alt-down"/>',
  columns: '<i class="fa fa-handshake"/>',
  sortAscending: '<i class="fa fa-long-arrow-alt-down"/>',
  sortDescending: '<i class="fa fa-long-arrow-alt-up"/>',
  groupExpanded:
    '<img src="https://www.ag-grid.com/example-assets/group/contract.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
  groupContracted:
    '<img src="https://www.ag-grid.com/example-assets/group/expand.png" style="height: 12px; width: 12px;padding-right: 2px"/>',
  columnMovePin: '<i class="far fa-hand-rock"/>',
  columnMoveAdd: '<i class="fa fa-plus-square"/>',
  columnMoveHide: '<i class="fa fa-times"/>',
  columnMoveMove: '<i class="fa fa-link"/>',
  columnMoveLeft: '<i class="fa fa-arrow-left"/>',
  columnMoveRight: '<i class="fa fa-arrow-right"/>',
  columnMoveGroup: '<i class="fa fa-users"/>',
  rowGroupPanel: '<i class="fa fa-university"/>',
  pivotPanel: '<i class="fa fa-magic"/>',
  valuePanel: '<i class="fa fa-magnet"/>',
  menuPin: 'P',
  menuValue: 'V',
  menuAddRowGroup: 'A',
  menuRemoveRowGroup: 'R',
  clipboardCopy: '>>',
  clipboardPaste: '>>',
  rowDrag: '<i class="fa fa-circle"/>',
})
const rowSelection = ref<any>('multiple')
// ts create object type
interface oo {
  a?: string | number
  b: any
}
interface Props {
  o: Record<string, oo>
}

const props = withDefaults(defineProps<Props>(), {
  o: () => ({ c: { b: 1 } })
})
props.o.b = { b: 2 }

function onGridReady(params) {
  console.log('onGridReadyonGridReady', arguments)
}
</script>

<style lang="scss" scoped>
</style>