import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import {viewsRouterList} from '@/router/views';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/page/login/index.vue'),
    meta: {
      isNeedToken: false,
      isKeepAlive: true,
    },
  },
  ...viewsRouterList,
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
