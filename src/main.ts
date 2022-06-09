import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { router } from "@/router";
import { getImageUrlByModulesType } from '@/types'
import { getImageUrlByModules } from "@/utils/importImageHook";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $getImageUrlByModules: getImageUrlByModulesType;
  }
}

const app = createApp(App);
app.config.globalProperties.$getImageUrlByModules = getImageUrlByModules;
app.use(router);
app.use(ElementPlus)

app.mount("#app");
