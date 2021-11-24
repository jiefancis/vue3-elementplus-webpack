<!--
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-12 16:04:46
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-24 15:02:26
-->
<script lang="tsx">
import { defineComponent, computed, provide, ref, nextTick, watch, resolveComponent } from "vue"
import AddIcon from './addIcon.vue'
export default defineComponent({
  name: 'Process',
  props: {
    node: Object
  },
  setup(props, ctx) {
    let nodes = ref<Record<string, any>>({
      name: "top"
    })
    let template
    watch(
      () => nodes.value,
      (newVal, oldVal) => {
        // ctx.emit('update:node', newVal)
        console.log('process.vue emit', newVal)
        template = renderBox(newVal)
      },
      {
        deep: true
      }
    )


    function addBranch(node) {
      node.conditionNodes.push(createBranchNode())
    }
    function createBranchNode() {
      return {
        name: '分支节点',
        branchId: Date.now(),
        rule: '条件 json格式',
        toNodeId: null
      }
    }
    function delTerm(node, index) {
      if(node.conditionNodes?.length <= 2) {
        // delete node.conditionNodes

        node = node.childNode

      } else {
        node.conditionNodes.splice(index, 1)
      }
    }
    function renderBox(node) {
      console.log(!!node?.childNode, 'renderBox', JSON.parse(JSON.stringify(node)))
      let showNode = node.type !== 'branch' && node.type
      let isBranch = node.type === 'branch'
      // debugger
      return  (
        <div class="box">
          <div class="container">
          {
            showNode && <div>
              <div class="flow-row">
              {
                node && <div class="flow-box">
                  <div class="flow-item" >
                      <div class="flow-node-box">
                        <div class="node-name node-sp">
                          <span>{ node.name }</span>
                          <div class="search-input el-input" style="display: none;">
                            <input type="text" autocomplete="off" id="1459067759072641024" class="el-input__inner"/>
                          </div>
                          <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MTdGMUQ3RTg4OTcxMUVCOEM4QThBRTkzNUQ1OUNEQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MTdGMUQ3Rjg4OTcxMUVCOEM4QThBRTkzNUQ1OUNEQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxN0YxRDdDODg5NzExRUI4QzhBOEFFOTM1RDU5Q0RBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgxN0YxRDdEODg5NzExRUI4QzhBOEFFOTM1RDU5Q0RBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+M6Uh4QAAARNJREFUeNpi/P//PwMOIAzEoUBsDcRSULFnQHwEiFcD8TtsmhhxGGgOxDVAzIPDss9A3ATEZ4gxUAGIZwAxOwN+8BOI04H4IbIgExaFSUQYxgBVk4guiM1AUwbigSkhAxmBmIMEAzkJGfgfPUwIgAfEeHkDCQZuIMbAjUB8gAjD9gHxZmLTISM0UUcCsQCa3AcgXgrEa6FBRNCFsLBcBcQLsMgtBuI12AzDZyAMSGMRU8anAeRlkKGpQGwDxKxo8vxYktFPqLeRwR8gPgXE01iAhAUQR5AQs6AcIo5FPBCIb4Ncp8tAPaDHRChMSAQKoDDUAzKMqGTgWUY8BSxZABQpVUCsRCXz7oAM1ABiWWo5ECDAAE5EOqFnWT67AAAAAElFTkSuQmCC" alt="" style="margin-left: 10px;"/>
                        </div>
                        <div class="node-main">
                          <span>审批人：</span>
                          <div class="flex-box">
                            <div class="left">
                              <span class="node-face">s</span>
                            </div>
                            <div class="right">
                              <div class="full-name">{node.type}</div>
                            </div>
                          </div>
                        </div>
                        <div class="node-main" v-show="false">
                          <span class="hint-title">设置此节点</span>
                        </div>
                      <div class="close-icon"><i data-v-25036ad3="" class="el-icon-close"></i>
                      </div>
                    </div>
                  </div>
                </div>
              }

              </div>
            {/*<div>{JSON.parse(JSON.stringify(node)).name}</div><Card node={JSON.parse(JSON.stringify(node))}/>*/}
            </div>
          }
          {
            isBranch && <div>
              <div class="flow-row">
                <div class="flow-branch">
                  <div class="branch-node" onClick={() => addBranch(node)}>
                    <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MjEzODhCQzYyMEYxMUVCOEQ5OUFBMThGREJDQkRBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MjEzODhCRDYyMEYxMUVCOEQ5OUFBMThGREJDQkRBNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYyMTM4OEJBNjIwRjExRUI4RDk5QUExOEZEQkNCREE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYyMTM4OEJCNjIwRjExRUI4RDk5QUExOEZEQkNCREE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+G/aRRQAAAb5JREFUeNpi/F/IQA5ohdLVpGpkIVE9ExBPBeIMKF8IiHOA+C+xBjCS4EM2IF4AxJFo4iuAOB6If1HTQi4gXg3EXjjktwFxKBB/o4aFAkC8BYitCag7CsQ+QPyBEgslgHgHEOsTGewXgdgDiF+QY6ECEO8GYhUSE9YdIHYF4ge4Uh02oAUNIhUysowKVK8WsRaaAfEhIJbCaWTuYQjGDaSgZpgRyofOQLwBiHnw+kHRhhifCgPxXiAOgNIYPgwC4q0ELSMN8EDNDEK3MAmIVwExOwP1ATvU7CRYKi0B0l0gNt44IxSM948wMEy2xafiPxCXMFHPI4xElcWwfAjy7iwgZibK7L7/ELqIkVjXgAr3NCCeB/PhPCAOJ7YAJhGAzAyD2oGSStcCsTcQf6GiZV+gZq7DlQ/3ALELtPQXwptACMfZO2jtcpKYslQbiHfhLW3wg2dA7AbEVwdt4c0A1QDKWJdIsOwSVM8DfG0UfABUrzkA8TEiLDsGVfuCUKOIEHgPDaIdeNTsgKp5T0wrjBgAaqv4QxtMDFgaUf7EtGdIsRCWgWOAeAaS2AyoGNEFBiMFDWFGaEP4PykaAQIMAPtYZIn4xcpfAAAAAElFTkSuQmCC" alt=""/>
                  </div>
                    <div class="meet-node"></div>
                    {
                      node.conditionNodes && node.conditionNodes.map((cNode, index) => <div class="flow-col" key={index}>
                      <div class="clear-left-border" v-show={!index}></div>
                      <div class="clear-right-border" v-show="index === node.conditionNodes.length - 1"></div>
                      <div class="flow-row ">
                        <div class="flow-box">
                          <div class="flow-item flow-node-branch">
                            <div class="flow-node-box">
                              <div class="node-name">
                                <span>{cNode.name}</span>
                                <div class="search-branch-input el-input" style="display: none;">
                                  <input type="text" autocomplete="off" id="1459067240870576128" class="el-input__inner"/>
                                </div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABrElEQVQ4jaXUvWsVURAF8F+eiUUSFDHmH1iiqyKLaVNEBT8LRcWgNiKKCCoi1kJA0VrTio2gMRDtJIhIbCLY6GKzSrYUERvxCxJJtNgNXh8v2Ze8A9ucM3tm7p2503Z/9IkV4iD68ywdDsn2lbrhBR5FcdKDy3mWzkGtBcMfeIoLeBDFyerlVrgJe7EVPViFvlIbwrooTo40Y9iHO9hXEbcbz6sMj+EeuptIPI+7ixl24RYuBdw3jOMVPuIXzuEEZnAyz9LHoeEGbMMenEZvoI3hIr7UJR4pEx3Ks3SSoilf0YmOBpX+xtXyx3rEZdLBPEvfLpDtWNvw0LzEFbxZRO/EQJ6l0yFZNYd/ltDmGpE1xb38bKAN4rX/GxNiBlNRnGyvN+xVjMUaDOAGPpV6h2IGHyqaFiLDZ0xGcbIzNFzAd0zhGiLcDrTjmFbM5FkcwA68KwuZiOLkKLRVbJuh0qRrqaAS8zhf1ZQx9GOiCcMazjTzlj9gv3/LYQvWK+53IzaXcc9weDnb5n35hRgvDUdxKs/S2Vb2YbeiOSOKdzxLaxt7F27mWXo9JP8CRCZkA/s07y8AAAAASUVORK5CYII=" alt="" style="margin-left: 10px;"/>
                              </div>
                              <div class="branch-main">
                                <div class="branch-filter-hint">
                                  <span>配置筛选条件</span>
                                </div>
                              </div>
                              <div class="close-icon" onClick={() => delTerm(node, index)}><i class="el-icon-close"></i></div>
                            </div>
                          </div>
                          <AddIcon v-model:node={cNode.childNode}/>
                        </div>
                        {
                          cNode.childNode &&　renderBox(cNode.childNode)
                        }
                      </div>
                    </div>)
                    }

                </div>
              </div>
            </div>
          }
          <AddIcon v-model:node={node.childNode}/>
          </div>
          <div class="box-container">
          {
            !!node?.childNode && renderBox(node.childNode)
          }
          </div>

        </div>
      )
    }
    template = renderBox(nodes.value)
    return () => renderBox(nodes.value)
  }
})
</script>
<style lang="scss" scoped>
.process{
  background: #f2f3f5;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.flow-branch{
  display: flex;
  justify-content: center;
}
.branch-col{
    width: 400px;
    margin-right: 100px;
  }

// add-icon
.add-icon{
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 30px 0;
  &__circle{
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #ff6a00;
    background: #fff;
    border-radius: 50%;
  }
}

.node{
  position: relative;
  z-index: 10;
  &:before{
    content: ' ';
    position: absolute;
    width: 1px;
    z-index: 0;
    top: 0;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    background: #cccfdb;
  }
}
.card-node{
  position: relative;
  z-index: 10;
  width: 210px;
  height: 60px;
  background: #fff;
  border-radius: 3px;
  text-align: center;
  line-height: 60px;
  margin: auto;
}

.branch-col{
  width: 210px;
  // height: 60px;
  // background: #fff;
  border-radius: 6px;
}
.add-node-btn{
  position: relative;
  z-index: 100;
  padding: 20px 0 41px 0;
  width: 30px;
  margin: auto;
  &:before{
    content: ' ';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1px;
    height: 100%;
    background: #ccc;
  }
}

// card.vue

.flow-row{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
.flow-box{
  flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 20px 50px 0;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 1px;
    height: 100%;
    background-color: #cccfdb;
  }
}
.flow-node-box{
  cursor: pointer;
  width: 260px;
  height: 118px;
  background-color: #fff;
  box-shadow: 0 2px 6px 0 rgba(75,82,94,0.2);
  box-shadow: 0 2px 6px 0 rgba(75,82,94,20%);
  border-radius: 4px;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  &:hover{
    .close-icon{
      display: block;
    }
  }
  .node-name{
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
    height: 44px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    background-color: #ff6a00;
    background-image: linear-gradient(90deg,#ff6a00,#f78b3e),linear-gradient(#ff6a00,#ff6a00);
  }
  .node-main{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: calc(100% - 44px);
    border-top: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    color: #575757;
    .flex-box {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      font-size: 14px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-right: 10px;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .right{
        margin-left: 10px;
      }
      .node-face {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        width: 28px;
        height: 28px;
        background-color: #ff6a00;
        border-radius: 28px;
        color: #fff;
        white-space: nowrap;
      }
    }
  }
  .close-icon {
    position: absolute;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    top: -5px;
    left: -5px;
    width: 20px;
    height: 20px;
    background: #9e9e9e;
    color: #fff;
    font-size: 14px;
    border-radius: 16px;
  }
}
.add-node-btn{
  position: relative;
  z-index: 10;
  padding: 20px 0 41px 0;
}

// branch
.after-branch-btn{
  padding: 20px 0 41px;
  position: relative;
  text-align: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
}
.flow-row{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.flow-branch {
  position: relative;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #cccfdb;
  border-bottom: 1px solid #cccfdb;
  margin-top: 15px;
  .branch-node{
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 2;
    transform: translate(-50%,-50%);
    .flow-col{
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      position: relative;
    }
  }

}
.flow-col{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: relative;
  .clear-left-border{
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: -5px;
      width: 50%;
      background: #f2f3f5;
      height: 10px;
    }
    &:after{
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 50%;
      background: #f2f3f5;
      height: 10px;
    }
  }
  .clear-right-border{
    &:before{
      content: "";
      position: absolute;
      right: -0.5px;
      top: -5px;
      width: 50%;
      background: #f2f3f5;
      height: 10px;
    }
    &:after{
      content: "";
      position: absolute;
      right: -0.5px;
      bottom: -5px;
      width: 50%;
      background: #f2f3f5;
      height: 10px;
    }
  }
  .flow-row{
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    -webkit-box-flex: 1;
    flex-grow: 1;
    .flow-box {
      -webkit-box-flex: 1;
      flex-grow: 1;
      padding: 0 50px;
      position: relative;
      &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 1px;
        height: 100%;
        background-color: #cccfdb;
      }
      .flow-item{
        margin-top: 20px;
        &:hover{
          .close-icon {
            display: block;
          }
        }
      }
      .flow-node-branch{
        padding-bottom: 10px;
        .node-name {
          color: #575757;
          background-color: #fff;
          border-bottom: 1px solid #dee0e3;
        }
      }
      .flow-node-box{
        cursor: pointer;
        width: 260px;
        height: 118px;
        background-color: #fff;
        box-shadow: 0 2px 6px 0 rgba(75,82,94,20%);
        border-radius: 4px;
        position: relative;
        box-sizing: border-box;
        .close-icon {
          position: absolute;
          display: none;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          top: -5px;
          left: -5px;
          width: 20px;
          height: 20px;
          background: #9e9e9e;
          color: #fff;
          font-size: 14px;
          border-radius: 16px;
        }
        .branch-main{
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          height: calc(100% - 44px);
          padding-left: 16px;
          color: #575757;
          border-top: none;
          box-sizing: border-box;
          .branch-filter-hint{
            display: flex;
            -webkit-box-flex: 1;
            flex: 1;
            -webkit-box-align: center;
            align-items: center;
            span {
              color: #ff6901;
            }
          }
        }
      }
      .node-name{
        padding: 15px;
        font-size: 14px;
        font-weight: 700;
        box-sizing: border-box;
        border-radius: 4px 4px 0 0;
        height: 44px;
        -webkit-box-pack: justify;
        justify-content: space-between;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
      }
    }
  }
  .after-node-btn{
    position: relative;
    z-index: 10;
  }
}
</style>
