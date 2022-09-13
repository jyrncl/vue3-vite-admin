import type { RouteRecordRaw, Router, RouteLocationNormalizedLoaded } from "vue-router";
import { useRouter, useRoute } from "vue-router";

interface DynamicRouterType {}

export default class DynamicRouter {
  route: RouteLocationNormalizedLoaded;
  router: Router;
  constructor() {
    this.router = useRouter();
    this.route = useRoute();
  }
}
