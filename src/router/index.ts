import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/page/login/index.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
