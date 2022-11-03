import { Router } from "@/router";
import { pinia, useUserStore } from "@/store";
import { ElMessage } from "element-plus";

Router.beforeEach((to, from, next) => {
  if (to.meta.authorization) {
    if (useUserStore(pinia).token) {
      if (to.path === "/login") {
        next(false);
        ElMessage.error("请点击退出登录进入登录页面");
      } else {
        next();
      }
    } else {
      if (to.path === "/login") {
        next();
      } else {
        next("/login");
        ElMessage.error("token无效，请先进行登录");
      }
    }
  } else {
    next();
  }
});
