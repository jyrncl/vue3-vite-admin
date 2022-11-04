import { userLogin, userExit } from "@/api/user";
import type { LoginUser } from "@/types";
import { defineStore } from "pinia";
import { setItemByLocalStore, getItemByLocalStore, clearLocalStore } from "@/utils/common";
import { dynamicRouter } from "@/router";
import { ElMessage } from "element-plus";
import { getMenuList } from "@/api/user";
import type { UserStoreState, MenuRow } from "@/types";

export const useUserStore = defineStore("user", {
  state: (): UserStoreState => ({
    token: getItemByLocalStore("token") || ""
  }),
  actions: {
    userLogin(data: LoginUser): Promise<Array<MenuRow>> {
      return new Promise(async resolve => {
        const { data: result } = await userLogin(data);
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
      const { data: menuData } = await getMenuList();
      dynamicRouter.initRouter(menuData.menuList);
      return menuData.menuList;
    },
    setToken(token: string) {
      this.token = token;
      setItemByLocalStore("token", token);
    }
  }
});
