import { request } from '@/utils/request'

export function userLogin(data: { username: string, password: string }) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}