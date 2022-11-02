import type { RouteRecordRaw } from "vue-router";

export const viewsRouterList: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/page/login/index.vue"),
    meta: {
      authorization: true,
      keepAlive: true
    }
  },
  {
    path: "/404",
    name: "404",
    meta: {
      authorization: false,
      keepAlive: false
    },
    component: () => import("@/page/other/404.vue")
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404"
  }
];
