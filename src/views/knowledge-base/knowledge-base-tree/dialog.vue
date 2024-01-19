<script setup lang="ts">
import { ref, inject } from "vue";
import { create, update } from "@/api/knowledge-base";
import { ElMessage } from "element-plus";
import type { Chapter, KnowledgeMenu, KnowledgeBaseProviderKey } from "@/types";
import { KNOWLEDGE_BASE_PROVIDER_KEY } from "@/constant";

defineOptions({
  name: "knowledge-base-dialog"
});

const { setLoading } = inject(KNOWLEDGE_BASE_PROVIDER_KEY) as KnowledgeBaseProviderKey;
const dialogVisible = ref(false);
enum TitleEnum {
  createChapter = "新建文档",
  createMenu = "新建目录",
  updateChapter = "重命名文档",
  updateMenu = "重命名目录"
}
const formData = ref<Chapter | KnowledgeMenu>({ title: "", type: "menu" });
const formStatus = ref<keyof typeof TitleEnum>("createChapter");
const handleOpen = (status: keyof typeof TitleEnum, data: Chapter | KnowledgeMenu) => {
  formStatus.value = status;
  formData.value = data;
  dialogVisible.value = true;
};

const emits = defineEmits<{
  (e: "refreshTree"): void;
}>();

const handleSubmit = () => {
  const { title, sort = 1, parent_id, id, type } = formData.value;
  setLoading(type, true);
  if (["createChapter", "createMenu"].includes(formStatus.value)) {
    create({ title, sort, parent_id: id, type })
      .then(() => {
        handleSuccess(`${TitleEnum[formStatus.value]}成功`);
      })
      .finally(() => {
        setLoading(type, false);
      });
  } else if (["updateChapter", "updateMenu"].includes(formStatus.value)) {
    update({ title, sort, id, type, parent_id, content: (formData.value as Chapter).content || undefined })
      .then(() => {
        handleSuccess("修改目录成功");
      })
      .finally(() => {
        setLoading(type, false);
      });
  }
};

const handleSuccess = (msg: string) => {
  emits("refreshTree");
  handleClose();
  ElMessage.success(msg);
};

const handleClose = () => {
  dialogVisible.value = false;
  formData.value = { title: "", type: "menu" };
};

defineExpose({ handleOpen, handleClose });
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    style="border-radius: 8px"
    top="30vh"
    :title="TitleEnum[formStatus]"
    width="340"
    class="knowledge-base-dialog"
    append-to-body
  >
    <div class="knowledge-base-dialog-content">
      <el-input ref="InputRef" v-model="formData.title" size="large" autofocus />
    </div>
    <div class="knowledge-base-dialog-footer">
      <el-button :disabled="!Boolean(formData.title)" type="primary" @click="handleSubmit">确定</el-button>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
.knowledge-base-dialog-content {
  text-align: center;
  margin-bottom: 15px;
  :deep(.el-input) {
    .el-input__wrapper {
      background: rgba(132, 133, 141, 0.08);
      &:focus-within {
        background: rgba(132, 133, 141, 0.2);
      }
    }
  }
}
.knowledge-base-dialog-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
