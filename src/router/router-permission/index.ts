// import { Router } from "@/router";
// import { pinia, useCommonStore, useUserStore } from "@/store";
//
// const userStore = useUserStore(pinia);
// const commonStore = useCommonStore(pinia);
// Router.beforeEach((to, from, next) => {
//   // console.log(to, from, "from.redirectedFrom", userStore.token, commonStore.isRefresh);
//   if (userStore.token) {
//     if (commonStore.isRefresh) {
//       userStore.getMenuList().then(menuList => {
//         commonStore.setMenuTree(menuList);
//         commonStore.setIsRefresh(false);
//         console.log(commonStore.curRoutePath);
//         next(commonStore.curRoutePath);
//       });
//     } else {
//       console.log("next", from);
//       next();
//     }
//   } else {
//     if (to.path === "/login") {
//       next();
//     } else {
//       next("/login");
//     }
//   }
//   console.log(to.fullPath);
//   commonStore.setCurRoutePath(to.fullPath);
// });
