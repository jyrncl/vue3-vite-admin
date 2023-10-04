import type { InjectionKey } from "vue";
import type { FileManagementProviderKey, KnowledgeBaseProviderKey } from "@/types";

// 文件管理列表provider key
export const FILE_MANAGEMENT_PROVIDER_KEY = Symbol("fileManagementListProvider") as InjectionKey<FileManagementProviderKey>;

// 知识库provider key
export const KNOWLEDGE_BASE_PROVIDER_KEY = Symbol("knowledgeBaseProvider") as InjectionKey<KnowledgeBaseProviderKey>;
