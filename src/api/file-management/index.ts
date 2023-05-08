import request from "@/utils/request";
import { ResponseResultType, FileItem, FolderDetailList, CreateFolder, RenameFolder } from "@/types";

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

// 获取当前文件夹详情
export function getCurrentFolderInfo(data: { folderId: number }): ResponseResultType<FolderDetailList> {
  return request({
    url: "/api/file/getUserFolderDetail",
    method: "post",
    data
  });
}

// 新建文件夹
export function createFolder(data: CreateFolder): ResponseResultType {
  return request({
    url: "/api/file/addUserFolder",
    method: "post",
    data
  });
}

// 修改文件夹
export function updateFolder(data: RenameFolder): ResponseResultType {
  return request({
    url: "/api/file/updateUserFolder",
    method: "post",
    data
  });
}

// 上传文件
export function uploadFile(data: FormData): ResponseResultType {
  return request({
    url: "/api/file/addUserFile",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    data
  });
}
// 删除文件
export function deleteFile(data: { id: number }): ResponseResultType {
  return request({
    url: "/api/file/deleteUserFile",
    method: "post",
    data
  });
}

// 修改文件
export function updateFile(data: { id: number; name: string }): ResponseResultType {
  return request({
    url: "/api/file/updateUserFile",
    method: "post",
    data
  });
}
