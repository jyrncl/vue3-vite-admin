import { defineStore } from "pinia";
import { setItemByLocalStore, getItemByLocalStore } from "@/utils/common";
import type { CommonStoreState, MenuRow, TabPageRow } from "@/types";

export const useCommonStore = defineStore("common", {
  state: (): CommonStoreState => ({
    transitionName: getItemByLocalStore("transitionName") || "left-to-right",
    isCollapse: getItemByLocalStore("isCollapse") || false,
    breadcrumbList: getItemByLocalStore("breadcrumbList") || [],
    menuTree: getItemByLocalStore("menuTree") || [],
    tabPageList: getItemByLocalStore("tabPageList") || [],
    curRoutePath: getItemByLocalStore("curRoutePath") || "/",
    isRefresh: true
  }),
  actions: {
    setTransitionName(transitionName: string) {
      this.transitionName = transitionName;
      setItemByLocalStore("transitionName", this.transitionName);
    },
    setIsRefresh(flag: boolean) {
      this.isRefresh = flag;
    },
    setCurRoutePath(path: string) {
      this.curRoutePath = path;
      setItemByLocalStore("curRoutePath", this.curRoutePath);
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
