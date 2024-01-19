import IconItem from "@/components/global/icon-item/index.vue";
import KeepAliveWrapper from "@/components/global/keep-alive-wrapper/index.vue";
import { GetImageUrlType } from "@/types";
declare module "vue" {
  export interface GlobalComponents {
    IconItem: typeof IconItem;
    KeepAliveWrapper: typeof KeepAliveWrapper;
  }

  interface ComponentCustomProperties {
    $getImageUrl: GetImageUrlType;
    $prefix: string;
    $indexPage: string;
  }
}
