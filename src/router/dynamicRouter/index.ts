import type { RouteRecordRaw, RouteComponent, Router } from "vue-router";
import type { MenuRow } from "@/types";
import { isHaveChildren } from "@/utils/common";
import { pinia, useCommonStore, useUserStore } from "@/store";
import Layout from "@/page/home/index.vue";
import NotFoundPage from "@/page/other/404.vue";
const defaultRouteWrapper: RouteRecordRaw = {
  name: "home",
  path: "/",
  component: Layout,
  children: [],
  meta: {
    authorization: true,
    keepAlive: true
  }
};
export default class DynamicRouter {
  dynamicViewsModules: Record<string, () => Promise<Record<string, any>>>;
  Router: Router;
  constructor(Router: Router) {
    this.Router = Router;
    this.dynamicViewsModules = import.meta.glob("@/views/**/*.{vue,tsx}");
  }

  initRouter(menuList: Array<MenuRow>) {
    this.Router.addRoute(defaultRouteWrapper);
    this.formatRouterList(menuList);
  }

  dynamicImportComponents(component: string): RouteComponent {
    if (!this.dynamicViewsModules[component]) {
      console.warn(`${component}路径不存在`);
      return () => NotFoundPage;
    }
    return this.dynamicViewsModules[component];
  }

  formatRouterItem(menu: MenuRow): RouteRecordRaw {
    const hasChild = isHaveChildren(menu);
    return {
      name: menu.name,
      path: menu.path,
      component: hasChild
        ? () => import("@/page/default/index.vue")
        : this.dynamicImportComponents(`/src/views${menu.path}/index.vue`),
      meta: {
        authorization: true,
        keepAlive: true
      },
      children: hasChild ? menu.children.map(item => this.formatRouterItem(item)) : []
    };
  }

  async refreshRouter() {
    if (useUserStore(pinia).token && useCommonStore(pinia).isRefresh) {
      const menuList = await useUserStore(pinia).getMenuList();
      this.initRouter(menuList || []);
    }
  }

  formatRouterList(menuList: Array<MenuRow>) {
    menuList.forEach(menu => {
      this.Router.addRoute("home", this.formatRouterItem(menu));
    });
  }
}
