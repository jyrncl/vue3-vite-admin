import request from "@/utils/request";
import type { LoginUser, RegisteredUser, ResponseResultType, MenuRow } from "@/types";

export function userLogin(data: LoginUser): ResponseResultType<string> {
  return request({
    url: "/api/user/login",
    method: "post",
    data
  });
}

export function registeredUser(data: RegisteredUser): ResponseResultType {
  return request({
    url: "/api/user/createUser",
    method: "post",
    data
  });
}

export function getUserInfo(): ResponseResultType {
  return request({
    url: "/api/user/getUserInfo",
    method: "post"
  });
}

export function userExit(): ResponseResultType {
  return request({
    url: "/api/user/userExit",
    method: "post"
  });
}

export function getMenuList(): ResponseResultType<{ menuList: Array<MenuRow> }> {
  return request({
    url: "/jyrncl/user/getMenuList",
    method: "post"
  });
}
