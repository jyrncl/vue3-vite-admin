import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/style/default.scss";
import globalComponents from "@/global-components/index";
import config from "@/config";
import { router } from "@/router";
import { pinia } from "@/store";
import type { getImageUrlByModulesType } from "@/types";
import { getImageUrlByModules } from "@/utils/importImageHook";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $getImageUrlByModules: getImageUrlByModulesType;
    $prefix: string;
    $indexPage: string;
  }
}

const app = createApp(App);
app.config.globalProperties.$getImageUrlByModules = getImageUrlByModules;
app.config.globalProperties.$prefix = config.prefix;
app.config.globalProperties.$indexPage = config.indexPage;

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.use(globalComponents);

app.mount("#app");
