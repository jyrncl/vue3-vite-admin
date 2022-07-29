import type { RouteRecordRaw } from "vue-router";
import Layout from "@/page/home/index.vue";
import Default from "@/page/default/index.vue";
export const viewsRouterList: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Layout,
    redirect: "/dashboard/analysis",
    meta: {
      isNeedToken: true,
      isKeepAlive: false
    },
    children: [
      {
        path: "/dashboard/analysis",
        name: "analysis",
        component: () => import("@/views/dashboard/analysis/analysis.vue"),
        meta: {
          isNeedToken: true,
          isKeepAlive: false
        }
      },
      {
        path: "/dashboard/workbench",
        name: "workbench",
        component: () => import("@/views/dashboard/workbench/index.vue"),
        meta: {
          isNeedToken: true,
          isKeepAlive: false
        }
      }
    ]
  },
  {
    path: "/charts",
    name: "charts",
    component: Layout,
    redirect: "/charts/echarts",
    meta: {
      isNeedToken: true,
      isKeepAlive: false
    },
    children: [
      {
        path: "/charts/echarts",
        name: "line",
        redirect: "/charts/echarts/line",
        component: Default,
        meta: {
          isNeedToken: true,
          isKeepAlive: false
        },
        children: [
          {
            path: "/charts/echarts/line",
            name: "line",
            component: () => import("@/views/charts/echarts/line/index.vue"),
            meta: {
              isNeedToken: true,
              isKeepAlive: false
            },
          }
        ]
      },
    ]
  }
];
