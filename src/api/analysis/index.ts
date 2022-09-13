import { request } from "@/utils/request";
import { AnalysisComponentsList } from "@/types";

export function getAnalysisComponentsList(): Promise<{ data: { data: AnalysisComponentsList } }> {
  return request({
    method: "post",
    url: "/jyrncl/analysis/getAnalysisComponentsList"
  });
}
