import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "@/style/default.scss"
import globalComponents from "@/global-components/index";
import { router } from "@/router";
import type { getImageUrlByModulesType } from "@/types";
import { getImageUrlByModules } from "@/utils/importImageHook";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $getImageUrlByModules: getImageUrlByModulesType;
    $prefix: string;
  }
}

const app = createApp(App);
app.config.globalProperties.$getImageUrlByModules = getImageUrlByModules;
app.config.globalProperties.$prefix = import.meta.env.VITE_SCSS_CLASS_PREFIX;
app.use(router);
app.use(ElementPlus);
app.use(globalComponents);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`${import.meta.env.VITE_SCSS_CLASS_PREFIX}${key}`, component);
}

app.mount("#app");
