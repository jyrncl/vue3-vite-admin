import { defineStore } from "pinia";
import { CommonStore } from "@/types"

export const useCommonStore = defineStore("common", {
  state: (): CommonStore => ({
    isCollapse: false,
    breadcrumbList: [],
  }),
  actions: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setBreadcrumbList(breadcrumbList: Array<string>) {
      this.breadcrumbList = breadcrumbList;
    },
  }
});
