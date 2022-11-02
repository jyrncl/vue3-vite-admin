import IconItem from "@/global-components/src/icon-item/index.vue";
import TransitionWrapper from "@/global-components/src/transition-wrapper/index.vue";
import KeepAliveWrapper from "@/global-components/src/keep-alive-wrapper/keep-alive-wrapper.vue";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    IconItem: typeof IconItem;
    TransitionWrapper: typeof TransitionWrapper;
    KeepAliveWrapper: typeof KeepAliveWrapper;
  }
}
