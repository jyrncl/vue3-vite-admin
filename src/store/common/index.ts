import { defineStore } from "pinia";
import { setItemByLocalStore, getItemByLocalStore } from "@/utils/common";
import type { CommonStore, MenuRow, TabPageRow } from "@/types";

export const useCommonStore = defineStore("common", {
  state: (): CommonStore => ({
    transitionName: getItemByLocalStore("transitionName") || "slide-in-left",
    isCollapse: getItemByLocalStore("isCollapse") || false,
    breadcrumbList: getItemByLocalStore("breadcrumbList") || [],
    menuTree: getItemByLocalStore("menuTree") || [],
    tabPageList: getItemByLocalStore("tabPageList") || []
  }),
  actions: {
    setTransitionName(transitionName: string) {
      this.transitionName = transitionName;
      setItemByLocalStore("transitionName", this.transitionName);
    },
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
      setItemByLocalStore("isCollapse", this.isCollapse);
    },
    setBreadcrumbList(breadcrumbList: Array<MenuRow>) {
      this.breadcrumbList = breadcrumbList;
      setItemByLocalStore("breadcrumbList", breadcrumbList);
    },
    setMenuTree(menuTree: Array<MenuRow>) {
      this.menuTree = menuTree;
      setItemByLocalStore("menuTree", menuTree);
    },
    setTabPageList(tabPageRow: TabPageRow): Promise<TabPageRow | undefined> {
      return new Promise(resolve => {
        const index = this.tabPageList.findIndex(item => item.id === tabPageRow.id);
        if (index === -1) {
          this.tabPageList.push(tabPageRow);
          setItemByLocalStore("tabPageList", this.tabPageList);
        } else {
          resolve(tabPageRow);
        }
      });
    },
    closeTabPage(tabPageRow: TabPageRow): Promise<{ curPath: string; nextPath: string }> {
      return new Promise(resolve => {
        const index = this.tabPageList.findIndex(item => item.id === tabPageRow.id);
        if (index !== -1) {
          this.tabPageList.splice(index, 1);
          setItemByLocalStore("tabPageList", this.tabPageList);
          resolve({ curPath: tabPageRow.path, nextPath: this.tabPageList.at(-1)?.path || "" });
        }
      });
    }
  }
});
