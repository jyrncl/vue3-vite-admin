export interface KnowledgeMenu {
  id?: number;
  parent_id?: number;
  type: "chapter" | "menu";
  title: string;
  sort?: number;
  createTime?: string;
  updateTime?: string;
  children?: Array<Chapter>;
}

export interface Chapter {
  id?: number;
  parent_id?: number;
  content: string;
  type: "chapter" | "menu";
  title: string;
  sort?: number;
  createTime?: string;
  updateTime?: string;
}

export type KnowledgeTree = Array<KnowledgeMenu | Chapter>;

// 知识库provider key类型
export interface KnowledgeBaseProviderKey {
  setLoading: (type: "menu" | "chapter" | "all", flag: boolean) => void;
}
