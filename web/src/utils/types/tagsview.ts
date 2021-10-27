/*
 * @Descripttion:
 * @version:
 * @Author: wangjie
 * @Date: 2021-09-11 09:33:30
 * @LastEditors: wangjie
 * @LastEditTime: 2021-09-18 18:22:57
 */
export interface Tag {
  title: string | unknown;
  path?: string;
}

export type TagList = Array<Tag>;

export interface State {
  tagList: TagList;
  current: number;
  effect: boolean;
}

export interface ILengthwise {
  length: number;
}
