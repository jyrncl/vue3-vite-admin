import { MenuRow } from "@/types"
export interface CommonStore {
  isCollapse: boolean;
  breadcrumbList: Array<MenuRow | undefined>;
  menuTree: Array<MenuRow>;
}
