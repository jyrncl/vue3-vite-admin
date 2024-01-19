import IconItem from "./global/icon-item/index.vue";
import KeepAliveWrapper from "./global/keep-alive-wrapper/index.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { Component, App } from "vue";
import config from "@/config";

const components: Record<string, Component> = { IconItem, KeepAliveWrapper };

const globalComponentsInstall = {
  install(app: App) {
    for (const [key, component] of Object.entries(components)) {
      app.component(key, component);
    }
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(`${config.prefix}${key}`, component);
    }
  }
};

export default globalComponentsInstall;
