import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import DynamicRouter from "@/router/dynamicRouter/index";
import { viewsRouterList } from "@/router/views";

export const routes: Array<RouteRecordRaw> = [...viewsRouterList];

export const Router = createRouter({
  history: createWebHashHistory(),
  routes
});

export const dynamicRouter = new DynamicRouter(Router);
