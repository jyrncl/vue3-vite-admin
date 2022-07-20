/**
 * 判断菜单树的某一个节点是否有子节点
 */
export function isHaveChildren(data: { children: Array<any>; [prop: string]: any }): boolean {
  return Boolean(data.children && data.children.length);
}
