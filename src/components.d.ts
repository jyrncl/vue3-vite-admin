import IconItem from "@/global-components/src/icon-item/index.vue";
import KeepAliveWrapper from "@/global-components/src/keep-alive-wrapper/keep-alive-wrapper.vue";
import { GetImageUrlType } from "@/types";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    IconItem: typeof IconItem;
    KeepAliveWrapper: typeof KeepAliveWrapper;
  }
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $getImageUrl: GetImageUrlType;
    $prefix: string;
    $indexPage: string;
  }
}
