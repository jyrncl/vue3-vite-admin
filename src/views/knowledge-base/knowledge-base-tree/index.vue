<script setup lang="ts">
import { ref, reactive, onMounted, inject } from "vue";
import { Tickets, DocumentRemove, FolderAdd, DocumentChecked } from "@element-plus/icons-vue";
import { getTree, deleteItem } from "@/api/knowledge-base";
import type { Chapter, KnowledgeTree, KnowledgeMenu, KnowledgeBaseProviderKey } from "@/types";
import KnowledgeBaseDialog from "./dialog.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { KNOWLEDGE_BASE_PROVIDER_KEY } from "@/constant";
defineOptions({
  name: "knowledge-base-tree"
});

const { setLoading } = inject(KNOWLEDGE_BASE_PROVIDER_KEY) as KnowledgeBaseProviderKey;
const bookFilter = ref("");

const bookTree = ref<KnowledgeTree>([]);

const bookProps = reactive({
  children: "children",
  label: "title"
});

const getKnowledgeTree = () => {
  setLoading("menu", true);
  getTree()
    .then(({ data }) => {
      bookTree.value = data.data as KnowledgeTree;
    })
    .finally(() => {
      setLoading("menu", false);
    });
};
onMounted(() => {
  getKnowledgeTree();
});

const emits = defineEmits<{
  (e: "preview", data: Chapter, isChapter: boolean): void;
}>();
const handleFilterBook = (value: string): boolean => {
  return true;
};

const handlePreview = (data: Chapter) => {
  emits("preview", data, data.type === "chapter");
};

const knowledgeBaseDialog = ref<InstanceType<typeof KnowledgeBaseDialog> | null>(null);
const handleAdd = ({ id }: KnowledgeMenu | Chapter, type: "menu" | "chapter") => {
  const status = type === "menu" ? "createMenu" : "createChapter";
  knowledgeBaseDialog.value?.handleOpen(status, { id, type, title: "" });
};
const handleUpdate = (data: KnowledgeMenu | Chapter, type: "menu" | "chapter") => {
  const status = type === "menu" ? "updateMenu" : "updateChapter";
  knowledgeBaseDialog.value?.handleOpen(status, { ...data });
};
const handleDelete = (id: number, title: string) => {
  ElMessageBox.confirm(`是否删除${title}？`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(() => {
    setLoading("menu", true);
    deleteItem(id)
      .then(() => {
        getKnowledgeTree();
        ElMessage.success("删除成功");
      })
      .finally(() => {
        setLoading("menu", false);
      });
  });
};

defineExpose({ getKnowledgeTree });
</script>

<template>
  <div class="knowledge-base-tree">
    <el-input v-model="bookFilter" placeholder="请输入关键字搜索" />
    <el-tree
      ref="treeRef"
      class="filter-tree"
      :data="bookTree"
      :props="bookProps"
      default-expand-all
      :filter-node-method="handleFilterBook"
    >
      <template #default="{ node, data }">
        <div class="custom-tree-node" @click.stop="handlePreview(data)">
          <el-tooltip effect="dark" :disabled="data.title.length < 34" :content="node.label" placement="top">
            <div class="tree-label" :id="data.id">{{ node.label }}</div>
          </el-tooltip>
          <div class="tree-operate">
            <el-dropdown :hide-on-click="false">
              <IconItem icon="More" />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click.stop="handleUpdate(data, data.type)" :icon="Tickets">重命名</el-dropdown-item>
                  <el-dropdown-item @click.stop="handleDelete(data.id, data.title)" :icon="DocumentRemove">删除</el-dropdown-item>
                  <el-dropdown-item @click.stop="handleAdd(data, 'menu')" v-if="data.type === 'menu'" :icon="FolderAdd"
                    >新建目录</el-dropdown-item
                  >
                  <el-dropdown-item @click.stop="handleAdd(data, 'chapter')" v-if="data.type === 'menu'" :icon="DocumentChecked"
                    >新建文档</el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </template>
      <template #empty>
        <el-empty
          @click.stop="handleAdd({ title: '', type: 'menu', id: -1 }, 'menu')"
          :image-size="200"
          description="暂无内容，点击新建目录"
        />
      </template>
    </el-tree>
  </div>
  <knowledge-base-dialog @refresh-tree="getKnowledgeTree" ref="knowledgeBaseDialog" />
</template>

<style scoped lang="scss">
.knowledge-base-tree {
  width: 100%;
  height: 100%;
  padding: 10px;
  .filter-tree {
    margin-top: 8px;
    height: calc(100% - 38px);
    overflow: auto;
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;
      .tree-label {
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .tree-operate {
        opacity: 0;
      }
      &:hover {
        .tree-operate {
          opacity: 1;
        }
      }
    }
  }
}
</style>
