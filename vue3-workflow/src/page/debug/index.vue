<template>
  <ag-grid-vue
    :column-defs="columnDefs"
    :row-height="32"
    :header-height="32"
    :row-data="rowData"
    :style="{height: '100vh'}"
  />
  <!-- :suppress-drag-leave-hides-columns="false" -->
  <!-- :suppressDragLeaveHidesColumns="true" //防止拖动的时候隐藏表格列 -->
  <!-- row-selection="multiple" // 选择多行 -->
</template>

<script lang="ts">
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import customHeader from "./tableHeaderColumn.vue";

import {
  defineComponent,
  PropType,
  reactive,
  ref,
  computed,
  onBeforeMount,
  onMounted,
} from "vue";

interface feild {
  [propsName: string]: any;
}
export default defineComponent({
  name: "DataTable",
  components: {
    AgGridVue,
    customHeader,
    // action,
  },
  setup(props, { emit }) {

    const columnDefs =  [
        { headerName: "Make", field: "make", headerComponent: 'customHeader' },
        { headerName: "Model", field: "model", headerComponent: 'customHeader' },
        { headerName: "Price", field: "price", headerComponent: 'customHeader' },
      ]
    const rowData =  [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
      ]
    // ag-grid 事件分发

    // const onGridReady = (params: any) => {
    //   // 获取gridApi
    //   gridApi = params.api;
    //   gridApi.$agDelivery = agDelivery;
    //   columnApi = params.columnApi;
    //   // 这时就可以通过gridApi调用ag-grid的传统方法了
    //   // gridApi.sizeColumnsToFit();
    // };

    // const onGridSizeChanged = (params: any) => {
    //   const width = params.clientWidth;
    //   const bodyWidth = params.columnApi.columnController.bodyWidth;
    //   const arr = params.columnApi.columnController.displayedColumns;
    //   const obj = arr[arr.length - 1];
    //   let w = 0;
    //   obj.pinned && (w = obj.actualWidth);
    //   if (width > bodyWidth + w) {
    //     gridApi.sizeColumnsToFit();
    //   }
    // };
    // const onSelectionChanged = (event: any) => {
    //   emit("selectionChanged", event);
    // };
    // 编辑事件
    const onCellValueChanged = (event: any) => {
      emit(
        "rowchange",
        {
          data: event.data,
          colId: event.column.colId,
        },
        event
      );
    };
    // const rowClickHandler = (e: any) => {
    //   emit("rowClickedFn", e);
    // };
    // const cellDoubleClickedHandler = (p: any) => {
    //   const selection: any = document.getSelection();
    //   selection.removeAllRanges();
    //   const range = document.createRange();
    //   var rangeNodeDom = p.event.target;
    //   range.selectNode(rangeNodeDom);
    //   selection.addRange(range);
    // };

    return {
      columnDefs,
      rowData,

      onCellValueChanged,

    };
  },
});
</script>
<!-- <srcipt lang="ts" setup>
import { AgGridVue } from "ag-grid-vue3"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-alpine.css"
import customHeader from "./tableHeaderColumn.vue"
import {
  defineComponent,
  PropType,
  reactive,
  ref,
  computed,
  onBeforeMount,
  onMounted,
} from "vue";

const state = reactive({
  columnDefs: [
    { headerName: "Make", field: "make", headerComponent: 'customHeader' },
    { headerName: "Model", field: "model", headerComponent: 'customHeader' },
    { headerName: "Price", field: "price", headerComponent: 'customHeader' },
  ],
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]
})
// const columnDefs = ref([
//     { headerName: "Make", field: "make", headerComponent: 'customHeader' },
//     { headerName: "Model", field: "model", headerComponent: 'customHeader' },
//     { headerName: "Price", field: "price", headerComponent: 'customHeader' },
//   ])
// const rowData =  ref([
//     { make: "Toyota", model: "Celica", price: 35000 },
//     { make: "Ford", model: "Mondeo", price: 32000 },
//     { make: "Porsche", model: "Boxter", price: 72000 },
//   ])

</srcipt> -->
<style lang="scss">
.ag-theme-alpine {
  height: 100%;
  .ag-root-wrapper {
    border: none;
  }
  .ag-cell,
  .ag-full-width-row .ag-cell-wrapper.ag-row-group {
    line-height:31px;
  }
  .ag-ltr {
    .ag-cell {
      font-size: 12px;
      user-select: text;
    }
  }
  .ag-cell-last-left-pinned,
  .ag-pinned-left-header {
    border-right-width: 0 !important;
  }
  .ag-pinned-right-header,
  .ag-cell-first-right-pinned {
    border-left-width: 0 !important;
  }
  .ag-popup {
    height: 0;
  }
  .ag-header {
    border-top: 1px solid;
    background-color: #f5f5f5;
    border-color: #CFCFCF;
  }
  .ag-row-odd {
    background-color: #f5f7fa;
  }
  .ag-row-hover {
    background-color: #eef8ff;
  }
  .ag-header-cell-text {
    font-weight: 400;
    font-size: 14px;
    color: #626262;
  }

  &.ag-theme-border {
    .ag-root-wrapper {
      border: solid 1px #babfc7;
    }
    .ag-header-cell,
    .ag-header-group-cell {
      border-right: 1px solid #ccc;
    }
    .ag-header-cell-resize::after {
      height:100%;
      top:0;
      right:0;
      background:none;
    }
    .ag-row {
      border: none;
    }
    .ag-ltr {
      .ag-cell {
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
    }
    .ag-pinned-left-header,
    .ag-cell-last-left-pinned {
      border-right-width: 1px  !important;
    }
    .ag-pinned-right-header,
    .ag-cell-first-right-pinned {
      border-left-width: 1px  !important;
    }
  }
}
.ag-header-cell-menu-button:not(.ag-header-menu-always-show) {
  opacity: 1;
}
</style>