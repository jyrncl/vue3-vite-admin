import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/page/login/index.vue"),
  },
  {
    path: '/home',
    component: () => import("@/page/home/index.vue"),
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
