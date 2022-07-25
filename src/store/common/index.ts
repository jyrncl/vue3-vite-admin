import { defineStore } from "pinia";
import { setItemByLocalStore, getItemByLocalStore } from "@/utils/common";
import { CommonStore, MenuRow, TabPageRow } from "@/types"

export const useCommonStore = defineStore("common", {
  state: (): CommonStore => ({
    isCollapse: getItemByLocalStore("isCollapse") || false,
    breadcrumbList: getItemByLocalStore("breadcrumbList") || [],
    menuTree: getItemByLocalStore("menuTree") || [],
    tabPageList: getItemByLocalStore("tabPageList") || [],
  }),
  actions: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
      setItemByLocalStore("isCollapse", this.isCollapse);
    },
    setBreadcrumbList(breadcrumbList: Array<MenuRow | undefined>) {
      this.breadcrumbList = breadcrumbList;
      setItemByLocalStore("breadcrumbList", breadcrumbList);
    },
    setMenuTree(menuTree: Array<MenuRow>) {
      this.menuTree = menuTree;
      setItemByLocalStore("menuTree", menuTree);
    },
    setTabPageList(tabPageRow: TabPageRow) {
      return new Promise((resolve) => {
        const index = this.tabPageList.findIndex((item) => item.id === tabPageRow.id)
        if (index !== -1) {
          this.tabPageList.push(tabPageRow)
          setItemByLocalStore("tabPageList", this.tabPageList);
        } else {
          resolve(tabPageRow);
        }
      })
    },
    closeTabPage(tabPageRow: TabPageRow) {
      const index = this.tabPageList.findIndex((item) => item.id === tabPageRow.id)
      if (index !== -1) {
        this.tabPageList.splice(index, 1)
        setItemByLocalStore("tabPageList", this.tabPageList);
      }
    },
  }
});
