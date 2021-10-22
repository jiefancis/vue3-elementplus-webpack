/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-27 15:04:21
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-27 16:28:57
 */
export interface MenuItem {
  path?: string;
  menuNameNick?: string;
  menuName?: string;
  hasChild?: string;
  isRoot?: true;
  childMenus?: Array<MenuItem>;
}

export interface GetTokenByCode {
  code: number | string;
  obj: any;
  msg: string | null;
}
