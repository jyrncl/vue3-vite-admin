import { defineStore } from "pinia";
import { CommonStore, MenuRow } from "@/types"

export const useCommonStore = defineStore("common", {
  state: (): CommonStore => ({
    isCollapse: false,
    breadcrumbList: [],
    menuTree: [],
  }),
  actions: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setBreadcrumbList(breadcrumbList: Array<MenuRow | undefined>) {
      this.breadcrumbList = breadcrumbList;
    },
    setMenuTree(menuTree: Array<MenuRow>) {
      this.menuTree = menuTree;
    },
  }
});
