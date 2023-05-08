import type { InjectionKey } from "vue";
import type { FileManagementProviderKey } from "@/types";

// 文件管理列表provider key
export const FILE_MANAGEMENT_PROVIDER_KEY = Symbol("fileManagementListProvider") as InjectionKey<FileManagementProviderKey>;
