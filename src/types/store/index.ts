import { MenuRow, TabPageRow } from "@/types";
export interface CommonStore {
  isCollapse: boolean;
  breadcrumbList: Array<MenuRow | undefined>;
  menuTree: Array<MenuRow>;
  tabPageList: Array<TabPageRow>;
}
