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

// 默认右键菜单
export type ContextMenu = {
  name: string;
  icon: string;
  callback: <T>(...arg: Array<T>) => void;
};
