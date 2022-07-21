import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { viewsRouterList } from "@/router/views";
import Layout from "@/page/home/index.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import("@/page/login/index.vue"),
    meta: {
      isNeedToken: false,
      isKeepAlive: true
    }
  },
  {
    path: "/home",
    name: "home",
    component: Layout,
    redirect: "/home/indexPage",
    meta: {
      isNeedToken: true,
      isKeepAlive: false
    },
    children: [
      {
        path: "/home/indexPage",
        name: "indexPage",
        component: () => import("@/views/indexPage/index.vue"),
        meta: {
          isNeedToken: true,
          isKeepAlive: false
        }
      }
    ]
  },
  ...viewsRouterList
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
