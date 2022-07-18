import IconItem from "@/global-components/src/icon-item/index.vue";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    IconItem: typeof IconItem
  }
}
