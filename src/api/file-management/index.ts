import request from "@/utils/request";
import { ResponseResultType, FileItem, FolderDetailList } from "@/types";

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

export function getCurrentFolderInfo(data: { folderId: number }): ResponseResultType<FolderDetailList> {
  return request({
    url: "/api/file/getUserFolderDetail",
    method: "post",
    data
  });
}
