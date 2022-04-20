import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import { getImageUrlByModules } from "@/utils/importImageHook/index";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $getImageUrlByModules: (moduleName: string, fileName: string) => string;
  }
}

const app = createApp(App);
app.config.globalProperties.$getImageUrlByModules = getImageUrlByModules;
app.use(router);

app.mount("#app");
