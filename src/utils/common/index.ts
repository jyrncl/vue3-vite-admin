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
  window.localStorage.setItem(key, JSON.stringify({ key, value }));
}

/**
 * 将数据从local store中取出 LocalStoreItem
 */
export function getItemByLocalStore(key: string): any {
  const item: string | null = window.localStorage.getItem(key)
  const result: LocalStoreItem | null = item ? JSON.parse(item) : item;
  return result ? result.value : null;
}

/**
 * 清空local store
 */
export function clearLocalStore(): void {
  window.localStorage.clear();
}
