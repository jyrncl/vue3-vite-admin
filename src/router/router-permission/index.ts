import { Router } from "@/router";
import { pinia, useUserStore } from "@/store";
import { ElMessage } from "element-plus";

Router.beforeEach((to, from, next) => {
  // console.log(useUserStore(pinia).token, to);
  if (to.meta.authorization) {
    if (useUserStore(pinia).token) {
      next();
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
