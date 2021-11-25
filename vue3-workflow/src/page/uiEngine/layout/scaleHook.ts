/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-11-05 15:58:57
 * @LastEditors: wangjie
 * @LastEditTime: 2021-11-05 16:02:41
 */
export default function scale() {
  let orient = ''
  let spx = 0, spy = 0;
  let sox = 0, soy = 0;
  let oWidth: number = 0
  let oHeight: number = 0
  let targetPoint: Record<string, any> = {}
  let targetBox: Record<string, any> = {}
  function getOrient(target) {
    return target.className.split('--').pop()
  }

  function setStyle(target, style) {
    style.width && (target.style.width = style.width + 'px')
    style.height && (target.style.height = style.height + 'px')
  }
  function onPointMousemove(e){
    let dx = e.pageX - spx
    let dy = e.pageY - spy
    switch(orient) {
      case 'top':
      case 'bottom':
        setStyle(targetBox, { height: oHeight + dy})
        break;
      case 'left':
      case 'right':
        setStyle(targetBox, { width: oWidth + dx })
        break;
    }
  }
  function onPointMouseup(e) {
    console.log('onPointMouseup', e, e.target)
    e.target.removeEventListener('mousemove', onPointMousemove)
    e.target.removeEventListener('mouseleave', onPointMouseleave)
    targetBox.removeEventListener('mousemove', onPointMousemove)
    targetBox.removeEventListener('mouseleave', onPointMouseleave)
  }
  function onPointMouseleave(e) {
    console.log('onPointMouseleave', e, e.target)
    e.target.removeEventListener('mousemove', onPointMousemove)
    targetPoint.removeEventListener('mousemove', onPointMousemove)
    targetPoint.removeEventListener('mouseleave', onPointMouseleave)
    targetBox.removeEventListener('mousemove', onPointMousemove)
    targetBox.removeEventListener('mouseleave', onPointMouseleave)
  }
  function onPointMousedown(e){
    let style = e.target.style
    console.log(e,'onPointMousedown', style, parseFloat(style.top))
    const canvasEle = e.target?.parentElement?.parentElement
    orient = getOrient(e.target)
    targetPoint = e.target
    targetBox = e.target.parentElement
    oWidth = targetBox.clientWidth
    oHeight = targetBox.clientHeight
    canvasEle.addEventListener('mousemove', onPointMousemove)
    canvasEle.addEventListener('mouseup', onPointMouseup)
    canvasEle.addEventListener('mouseleave', onPointMouseleave)
    targetBox.addEventListener('mouseup', onPointMouseup)
    targetBox.addEventListener('mouseleave', onPointMouseleave)
    e.target.addEventListener('mouseup', onPointMouseup)
    e.target.addEventListener('mouseleave', onPointMouseleave)
    spx = e.pageX
    spy = e.pageY

    sox = parseFloat(style.left) || 0
    soy = parseFloat(style.top) || 0
  }
  return {
    onPointMousedown,
    onPointMouseleave,
    onPointMouseup,
    onPointMousemove
  }
}