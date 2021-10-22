/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-10-19 20:16:37
 * @LastEditors: wangjie
 * @LastEditTime: 2021-10-19 20:37:39
 */
export default function useTheme(color = 'lightyellow'){
  const html = document.querySelector('html')
  const body = document.querySelector('body')
  const root = document.querySelector(':root')

  function setTheme(color){
    root.setAttribute['--theme-color'] = color
    // body.setAttribute['--theme-color'] = color
  }

  return {
    setTheme
  }
}