import type { RouteRecordRaw } from "vue-router";

export const viewsRouterList: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      authorization: false,
      keepAlive: false
    }
  },
  {
    path: "/404",
    name: "404",
    meta: {
      authorization: false,
      keepAlive: false
    },
    component: () => import("@/views/other/404.vue")
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404"
  }
];
