// 文件面包屑
export type FileRouterItem = {
  id: number;
  parentId: string;
  path: string;
  name: string;
  type: string;
  createTime: string;
  updateTime: string;
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
export type RenameForm =
  | {
      name: string;
      id: number;
      parentId: number;
    }
  | {};

export type FormStatus = "create" | "detail" | "update";
