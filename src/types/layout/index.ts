export interface MenuRow {
  id: string,
  name: string,
  path: string,
  children: Array<MenuRow>,
}
