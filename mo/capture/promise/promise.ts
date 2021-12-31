/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-12-27 13:58:19
 * @LastEditors: wangjie
 * @LastEditTime: 2021-12-30 18:00:06
 */
import { uploadParams, Navigator } from '../../types/promise'
export function capturePromise() {
  window.addEventListener('unhandledrejection', onUnhandledrejection)
  window.addEventListener('rejectionHandled', onRejectionHandled)
}

export function onUnhandledrejection(event) {
  let uploadData = formatParams(event)
  console.log(uploadData, 'onUnhandledrejection', event)
}
export function onRejectionHandled(event) {
  console.log('onRejectionHandled', event)

}

// format
function formatParams(event): uploadParams{
  let params = {} as uploadParams
  params.message = event.reason?.message
  params.stack = event.reason?.stack
  params.type = event.type
  params.navigator = getNavigator(event.target.navigator)
  let [lineNo, columnNo] = getLineAndColumn(event.reason.stack)
  params.lineNo = lineNo
  params.columnNo = columnNo
  return params
}

function getLineAndColumn(message) {

  let list = message.split('\n')[1]?.split(':')
  let len = list.length - 1
  return [list[len - 1], list[len]]
}

function getNavigator(navigator): Navigator{
  const { appCodeNAme, appName, appVersion, language, userAgent } = navigator
  return { appCodeNAme, appName, appVersion, language, userAgent }
}
