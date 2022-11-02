import { Router } from "@/router";

Router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});
