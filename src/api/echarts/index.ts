import { request } from "@/utils/request";

export function getTrafficLineList() {
  return request({
    method: "post",
    url: "/jyrncl/echarts/getTrafficLineList"
  });
}
