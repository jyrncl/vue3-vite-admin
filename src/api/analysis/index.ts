import request from "@/utils/request";
import { AnalysisComponentsList, ResponseResultType } from "@/types";

export function getAnalysisComponentsList(): ResponseResultType<AnalysisComponentsList> {
  return request({
    method: "post",
    url: "/jyrncl/analysis/getAnalysisComponentsList"
  });
}
