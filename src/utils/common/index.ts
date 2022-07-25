import type { LocalStoreItem } from "@/types"
/**
 * 判断菜单树的某一个节点是否有子节点
 */
export function isHaveChildren(data: { children: Array<any>; [prop: string]: any }): boolean {
  return Boolean(data.children && data.children.length);
}

/**
 * 将数据存入local store中
 */
export function setItemByLocalStore(key: string, value: any): void {
  console.log(key, value);
  window.localStorage.setItem(key, JSON.stringify({ key, value }));
}

/**
 * 将数据从local store中取出
 */
export function getItemByLocalStore(key: string): LocalStoreItem | null {
  const item = window.localStorage.getItem(key)
  console.log(item);
  return item ? JSON.parse(item) : item;
}

/**
 * 清空local store
 */
export function clearLocalStore(): void {
  window.localStorage.clear();
}
