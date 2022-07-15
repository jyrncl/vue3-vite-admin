export function isHaveChildren(data: { children: Array<any>; [prop: string]: any }): boolean {
  return Boolean(data.children && data.children.length);
}
