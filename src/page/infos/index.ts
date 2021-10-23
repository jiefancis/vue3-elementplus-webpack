/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-22 14:18:20
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-23 15:16:06
 */
import { ref , h , resolveComponent } from 'vue'
export default [
  {
    title: 'name',
    key: 'name',
    isSearch: false,
    isDel: false
  },
  {
    title: 'tag',
    key: 'tag',
    isSearch: false,
    isDel: false
  }
]

export function useColumns(COLUMNS) {
  let columns = ref<any>(COLUMNS)

  // functions
  function renderImgIcon({src, onClick, style={ width: '15px', height: '15px' }}){
    return h('img', {
      src,
      style,
      onClick(e) {
        console.log('image click event')
        onClick()
      }
    })
  }

  function makeColumns(columns) {
    // console.log(columns[0], 'makeColumns', columns)
    return columns.map(column => {
      column.title = renderTitle
      return column
    })
  }
  function renderTitleTextEl(column) {
    if(column.isModify) {
      return h(resolveComponent('n-input'), {
        type: 'text',
        style: {
          width: '100px',
          height: '100%'
        },
        clearable: true,
        onBlur(e){
          column.isModify = false
          // console.log('onBlur.value = e',column)
        },
        value: column.titleText,
        "onUpdate:value"(value) {
          column.titleText = value
          // console.log(column.titleText, 'onUpdate:value', column.titleText)
        }
      })
    } else {
      return h('span', {
        onClick() {
          column.isModify = true
        }
      }, column.titleText)
    }
  }
  function renderTitle(column) {
    // console.log('renderTitle', column)
    if(!column.isSearch) {
      return h('div', {
              style: {
                display: 'flex',
                'justify-content': 'space-between'
              },
              onMouseenter(e) {
                // console.log('onMouseenter', e)
                column.isOver = true
              },
              onMouseleave(e) {
                // console.log('onMouseleave', e)
                column.isOver = false
              }
            }, [
              renderTitleTextEl(column),
              column.isOver && renderImgIcon({
                src: require('../../assets/search.png'),
                onClick() {
                  // console.log('isSearch === true',column)
                  column.isSearch = true
                }
              }),
              column.isOver && renderImgIcon({
                src: require('../../assets/delete_fill.png'),
                onClick(){
                  // console.log('isDel === true',column)
                  column.isDel = true
                }
              }),
            ])
    } else {
      return h('div', {
              style: {
                display: 'flex',
                'justify-content': 'space-between'
              }
            }, [
              // h(HelloWorld, {
              //   style: {
              //     width: '100px',

              //   }
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
              // }),
              h(resolveComponent('n-input'), {
                type: 'text',
                style: {
                  width: '100%',
                  height: '100%'
                },
                clearable: true,
                onBlur(e){
                  column.isSearch = false
                  // console.log('onBlur.value = e',column)
                },
                value: column.titleText,
                "onUpdate:value"(value) {
                  column.titleText = value
                  // console.log(column.titleText, 'onUpdate:value', column.titleText)
                  // instance.ctx.$emit('onUpdate:value', e?.value)
                }
              })
            ])
    }
  }
  return {
    columns: makeColumns(columns.value)
  }
}
