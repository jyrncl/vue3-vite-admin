import type { LocalStoreItem, MenuRow } from "@/types";
import config from "@/config";
/**
 * 判断菜单树的某一个节点是否有子节点
 */
export function isHaveChildren(data: { children: Array<any>; [prop: string]: any }): boolean {
  return Boolean(data.children && data.children.length);
}

/**
 * 返回指定path的节点
 */
export function getThisData(tree: Array<MenuRow>, path: string, result: Array<MenuRow | undefined>): void {
  for (const menuRow of tree) {
    if (menuRow.path === path) {
      result.push(menuRow);
      return;
    } else if (menuRow.children.length) {
      getThisData(menuRow.children, path, result);
    }
  }
}

/**
 * 返回树中与之相关的节点组成的字符串数组
 */
export function getPathList(pathList: Array<string>, menuTree: Array<MenuRow>): Promise<Array<MenuRow | undefined>> {
  return new Promise(resolve => {
    const result: Array<MenuRow | undefined> = [];
    pathList.forEach(path => {
      getThisData(menuTree, path, result);
    });
    resolve(result);
  });
}

/**
 * 将数据存入local store中
 */
export function setItemByLocalStore(key: string, value: any): void {
  window.localStorage.setItem(`${config.localStoreKey}-${key}`, JSON.stringify({ key, value }));
}

/**
 * 将数据从local store中取出 LocalStoreItem
 */
export function getItemByLocalStore(key: string): any {
  const item: string | null = window.localStorage.getItem(`${config.localStoreKey}-${key}`);
  const result: LocalStoreItem | null = item ? JSON.parse(item) : item;
  return result ? result.value : null;
}

/**
 * 清空local store
 */
export function clearLocalStore(): void {
  window.localStorage.clear();
}

/**
 * 判断是否login
 */

/**
 * 接口返回null处理
 */
export function dealResponseNull<T = any>(data: T | null, defaultValue: T): T {
  return data ? data : defaultValue;
}

/**
 * 通过a标签下载文件
 * @param { string } url 文件下载路径
 */
export function downloadFileByAElement(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.click();
  a.remove();
}

export function convertSizeUnit(bytes: number) {
  if (!bytes) return "";
  const size = 1024;
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  const index = Math.floor(Math.log(bytes) / Math.log(size));
  return (bytes / Math.pow(size, index)).toFixed(2) + " " + units[index];
}
