import request from "@/utils/request";
import type { LoginUser, RegisteredUser } from "@/types";

export function userLogin(data: LoginUser) {
  return request({
    url: "/api/user/login",
    method: "post",
    data
  });
}

export function registeredUser(data: RegisteredUser) {
  return request({
    url: "/api/user/createUser",
    method: "post",
    data
  });
}

export function getUserDetail(data: { id: number | string }) {
  return request({
    url: "/api/user/getUserDetail",
    method: "post",
    data
  });
}

export function getMenuList() {
  return request({
    url: "/jyrncl/user/getMenuList",
    method: "post"
  });
}
