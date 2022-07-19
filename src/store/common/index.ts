import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => ({
    isCollapse: false
  }),
  actions: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
});
