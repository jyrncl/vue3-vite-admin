import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/page/login/index.vue"),
    meta: {
      isNeedToken: false,
      isKeepAlive: true,
    },
  },
  {
    path: '/home',
    component: () => import("@/page/home/index.vue"),
    meta: {
      isNeedToken: false,
      isKeepAlive: false,
    },
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
