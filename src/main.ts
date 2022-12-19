import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'element-plus/theme-chalk/display.css'
import "@/style/default.scss";
import globalComponents from "@/global-components/index";
import config from "@/config";
import { pinia } from "@/store";
import { Router, dynamicRouter } from "@/router";
import "@/router/router-permission/index";
import { getImageUrl } from "@/utils/importImageHook";

const app = createApp(App);
app.config.globalProperties.$getImageUrl = getImageUrl;
app.config.globalProperties.$prefix = config.prefix;
app.config.globalProperties.$indexPage = config.indexPage;

// 刷新路由，异步挂载
dynamicRouter.refreshRouter().then(() => {
  app.use(pinia);
  app.use(Router);
  app.use(ElementPlus);
  app.use(globalComponents);

  app.mount("#app");
});
