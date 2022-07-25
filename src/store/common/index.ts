import { defineStore } from "pinia";
import { setItemByLocalStore, getItemByLocalStore } from "@/utils/common";
import { CommonStore, MenuRow } from "@/types"

export const useCommonStore = defineStore("common", {
  state: (): CommonStore => ({
    isCollapse: false,
    breadcrumbList: getItemByLocalStore("breadcrumbList")?.value || [],
    menuTree: [],
  }),
  actions: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setBreadcrumbList(breadcrumbList: Array<MenuRow | undefined>) {
      setItemByLocalStore("breadcrumbList", breadcrumbList);
      this.breadcrumbList = breadcrumbList;
    },
    setMenuTree(menuTree: Array<MenuRow>) {
      this.menuTree = menuTree;
    },
  }
});
