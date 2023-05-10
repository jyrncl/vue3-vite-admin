// 文件面包屑
import { Ref } from "vue";

export type FileRouterItem = {
  id: number;
  parentId?: string | number;
  name: string;
};

// 文件
export type FileItem = {
  id: number;
  parent_id: number;
  file_name: string;
  file_size: string;
  file_path: string;
  file_type: string;
  original_name: string;
  create_time: string;
  update_time: string;
  is_folder: number;
};

// 列表项
export type FolderDetailItem = {
  id: number;
  parentId: number;
  name: string;
  isFolder: number;
  createTime: string;
  updateTime: string;
};

// 默认右键菜单
export type ContextMenu = {
  name: string;
  icon: string;
  callback: <T>(...arg: Array<T>) => void;
};

// 当前文件夹下的列表
export type FolderDetailList = Array<FolderDetailItem>;

// 重命名或者新建文件夹表单类型
export type RenameForm = {} | CreateFolder | RenameFolder;

export type FormStatus = "create" | "detail" | "update";

// 新增文件夹
export type CreateFolder = {
  name: string;
  parentId: number;
};

// 重命名文件夹
export type RenameFolder = {
  name: string;
  id: number;
  isFolder: number;
  parentId: number;
};

// 文件详情
export type FileDetail = {
  name: string;
  id: number;
  isFolder: number;
  createTime: string;
  updateTime: string;
  size?: string;
};

// 文件管理列表provider key类型
export interface FileManagementProviderKey {
  curFolderId: Ref<number>;
  fileLayout: Ref<string>;
  setCurFolderId: (id: number) => void;
  refreshPage: () => void;
  addFileRouter: (fileRouterItem: FileRouterItem) => void;
  spliceFileRouter: (fileRouterItem: FileRouterItem) => void;
  setLoading: (loading: boolean) => void;
}
