export interface MenuRow {
  id: string,
  name: string,
  path: string,
  icon?: string,
  children: Array<MenuRow>,
}

export interface TabPageRow {
  id: string;
  name: string;
  path: string;
}
