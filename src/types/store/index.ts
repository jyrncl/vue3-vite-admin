import { MenuRow, TabPageRow } from "@/types";
export interface CommonStoreState {
  transitionName: string;
  isCollapse: boolean;
  breadcrumbList: Array<MenuRow>;
  menuTree: Array<MenuRow>;
  tabPageList: Array<TabPageRow>;
}

export interface UserStoreState {
  token: string;
}
