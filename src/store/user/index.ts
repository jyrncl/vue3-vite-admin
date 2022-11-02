import { userLogin } from "@/api/user";
import type { LoginUser } from "@/types";
import { defineStore } from "pinia";
import { setItemByLocalStore, getItemByLocalStore } from "@/utils/common";
import DynamicRouter from "@/router/dynamicRouter";
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
    async getMenuList(): Promise<Array<MenuRow>> {
      const { data: menuData } = await getMenuList();
      new DynamicRouter().initRouter(menuData.menuList);
      return menuData.menuList;
    },
    setToken(token: string) {
      this.token = token;
      setItemByLocalStore("token", token);
    }
  }
});
