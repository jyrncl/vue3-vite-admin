import { MenuRow, TabPageRow } from "@/types";
export interface CommonStore {
  transitionName: string;
  isCollapse: boolean;
  breadcrumbList: Array<MenuRow>;
  menuTree: Array<MenuRow>;
  tabPageList: Array<TabPageRow>;
}
