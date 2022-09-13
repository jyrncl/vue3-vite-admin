import IconItem from "./src/icon-item/index.vue";
import { Component, App } from "vue";

const components: Array<{ name: string; component: Component }> = [
  {
    name: "IconItem",
    component: IconItem
  }
];

const globalComponents = {
  install(app: App) {
    components.forEach(ele => {
      app.component(ele.name, ele.component);
    });
  }
};

export default globalComponents;
