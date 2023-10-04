import request from "@/utils/request";
import type { ResponseResultType, KnowledgeTree, KnowledgeMenu, Chapter } from "@/types";

export function getTree(): ResponseResultType<KnowledgeTree> {
  return request({
    method: "get",
    url: "/api/knowledgeBase/getTree"
  });
}

export function create(data: KnowledgeMenu) {
  return request({
    method: "post",
    url: "/api/knowledgeBase/create",
    data
  });
}

export function deleteItem(id: number) {
  return request({
    method: "post",
    url: "/api/knowledgeBase/delete",
    data: { id }
  });
}

export function getDetail(): ResponseResultType<Array<any>> {
  return request({
    method: "get",
    url: ""
  });
}

export function update(data: {}) {
  return request({
    method: "post",
    url: "/api/knowledgeBase/update",
    data
  });
}
