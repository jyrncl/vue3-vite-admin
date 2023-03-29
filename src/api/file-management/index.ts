import request from "@/utils/request";
import { ResponseResultType, FileItem } from "@/types";

/**
 * 获取文件列表
 */
export function getUserFileList(data: { folderId: number }): ResponseResultType<Array<FileItem>> {
  return request({
    url: "/api/file/getUserFileList",
    method: "post",
    data
  });
}
