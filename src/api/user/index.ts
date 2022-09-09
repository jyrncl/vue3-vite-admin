import {request} from '@/utils/request';

export function userLogin(data: { username: string; password: string }) {
  return request({
    url: '/jyrncl/login',
    method: 'post',
    data,
  });
}

export function getMenuList() {
  return request({
    url: '/jyrncl/getMenuList',
    method: 'post',
  });
}
