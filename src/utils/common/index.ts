import type { LocalStoreItem } from "@/types";
import { MenuRow } from "@/types";
/**
 * 判断菜单树的某一个节点是否有子节点
 */
export function isHaveChildren(data: { children: Array<any>; [prop: string]: any }): boolean {
  return Boolean(data.children && data.children.length);
}

/**
 * 返回指定path的节点
 */
export function getThisData(tree: Array<MenuRow>, path: string): MenuRow | undefined {
  for (const ele of tree) {
    if (ele.path === path) {
      return ele;
    } else if (ele.children.length) {
      return getThisData(ele.children, path);
    }
  }
}

/**
 * 返回树中与之相关的节点组成的字符串数组
 */
export function getPathList(pathList: Array<string>, menuTree: Array<MenuRow>): Promise<Array<MenuRow | undefined>> {
  return new Promise(resolve => {
    const result: Array<MenuRow | undefined> = [];
    pathList.forEach(ele => {
      result.push(getThisData(menuTree, ele));
    });
    resolve(result);
  });
}

/**
 * 将数据存入local store中
 */
export function setItemByLocalStore(key: string, value: any): void {
  window.localStorage.setItem(key, JSON.stringify({ key, value }));
}

/**
 * 将数据从local store中取出 LocalStoreItem
 */
export function getItemByLocalStore(key: string): any {
  const item: string | null = window.localStorage.getItem(key);
  const result: LocalStoreItem | null = item ? JSON.parse(item) : item;
  return result ? result.value : null;
}

/**
 * 清空local store
 */
export function clearLocalStore(): void {
  window.localStorage.clear();
}
