/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-13 18:04:23
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-18 17:55:17
 */
import { createI18n } from 'vue-i18n'
// import ZH from './zh'
// import EN from './en'
import lang from '@/hooks/useI18n'

const i18n = createI18n({
  locale: 'zh', // 默认显示的语言
  messages: {
    ...lang
    // en: {
    //   ...EN
    // },
    // zh: {
    //   ...ZH
    // }
  }
})
export default i18n
