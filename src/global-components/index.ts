import IconItem from "./src/icon-item/index.vue";
import TransitionWrapper from "./src/transition-wrapper/index.vue";
import KeepAliveWrapper from "./src/keep-alive-wrapper/keep-alive-wrapper.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { Component, App } from "vue";
import config from "@/config";

const components: Array<{ name: string; component: Component }> = [
  {
    name: "IconItem",
    component: IconItem
  },
  {
    name: "TransitionWrapper",
    component: TransitionWrapper
  },
  {
    name: "KeepAliveWrapper",
    component: KeepAliveWrapper
  }
];

const globalComponents = {
  install(app: App) {
    components.forEach(ele => {
      app.component(ele.name, ele.component);
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(`${config.prefix}${key}`, component);
    }
  }
};

export default globalComponents;
