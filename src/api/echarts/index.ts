import request from "@/utils/request";
import type { ResponseResultType } from "@/types";

export function getTrafficLineList(): ResponseResultType<Array<any>> {
  return request({
    method: "post",
    url: "/jyrncl/echarts/getTrafficLineList"
  });
}
