import { defineStore } from "pinia";
import { setItemByLocalStore, getItemByLocalStore } from "@/utils/common";
import type { UserStoreState } from "@/types";

export const useUserStore = defineStore("user", {
  state: (): UserStoreState => ({
    token: getItemByLocalStore("token") || ""
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
      setItemByLocalStore("token", token);
    }
  }
});
