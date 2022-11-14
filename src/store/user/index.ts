import type { LoginUser, UserStoreState, MenuRow } from "@/types";
import { defineStore } from "pinia";
import { dynamicRouter } from "@/router";
import { ElMessage } from "element-plus";
import { dealResponseNull } from "@/utils/common";
import { userLogin, userExit, getMenuList } from "@/api/user";
import { setItemByLocalStore, getItemByLocalStore, clearLocalStore } from "@/utils/common";

export const useUserStore = defineStore("user", {
  state: (): UserStoreState => ({
    token: getItemByLocalStore("token") || ""
  }),
  actions: {
    userLogin(data: LoginUser): Promise<Array<MenuRow>> {
      return new Promise(async resolve => {
        const {
          data: { data: result }
        } = await userLogin(data);
        if (result.userInfo) {
          this.setToken(result.userInfo.authorization);
          const menuList = await this.getMenuList();
          resolve(menuList);
        } else {
          ElMessage.error(result.msg);
        }
      });
    },
    async userExit() {
      await userExit();
      await clearLocalStore();
    },
    async getMenuList(): Promise<Array<MenuRow>> {
      const {
        data: { data: menuData }
      } = await getMenuList();
      const menuList = dealResponseNull(menuData, { menuList: [] }).menuList;
      dynamicRouter.initRouter(menuList);
      return menuList;
    },
    setToken(token: string) {
      this.token = token;
      setItemByLocalStore("token", token);
    }
  }
});
