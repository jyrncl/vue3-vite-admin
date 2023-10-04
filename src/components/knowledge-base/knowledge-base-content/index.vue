<script setup lang="ts">
import { MdPreview, MdEditor } from "md-editor-v3";
import { ElMessage, ElMessageBox } from "element-plus";
import { update } from "@/api/knowledge-base";
import "md-editor-v3/lib/style.css";
import { Chapter, KnowledgeBaseProviderKey } from "@/types";
import { ref, watch, inject } from "vue";
import { KNOWLEDGE_BASE_PROVIDER_KEY } from "@/constant";
defineOptions({
  name: "knowledge-base-content"
});

const { setLoading } = inject(KNOWLEDGE_BASE_PROVIDER_KEY) as KnowledgeBaseProviderKey;
const content = ref("");
const timer = ref<null | number>(null);
const props = withDefaults(defineProps<{ chapter: Chapter; mode: "preview" | "edit" }>(), {});
const emits = defineEmits<{
  (e: "update:chapter", chapter: Chapter): void;
  (e: "refreshTree"): void;
}>();
watch(
  () => props.chapter.content,
  value => {
    content.value = value || "";
  }
);

const handleChange = (content: string) => {
  clearTimeout(timer.value as number);
  timer.value = setTimeout(() => {
    emits("update:chapter", { ...props.chapter, content });
  }, 300);
};

const handleSave = (content: string) => {
  ElMessageBox.confirm("是否保存内容？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(() => {
    setLoading("chapter", true);
    const { title, sort = 1, parent_id, id, type } = props.chapter;
    update({ title, sort, parent_id, id, type, content })
      .then(() => {
        emits("refreshTree");
        ElMessage.success("保存成功");
      })
      .finally(() => {
        setLoading("chapter", false);
      });
  });
};
</script>

<template>
  <div class="knowledge-base-content">
    <MdPreview v-show="props.chapter.content && mode === 'preview'" :model-value="props.chapter.content || ''" preview-theme="smart-blue" />
    <MdEditor
      style="height: 100%"
      v-show="mode === 'edit' && props.chapter.type === 'chapter'"
      v-model="content"
      @change="handleChange"
      @save="handleSave"
      :preview="false"
      :toolbarsExclude="['preview', 'htmlPreview', 'github', 'catalog']"
      :footers="['markdownTotal']"
      preview-theme="smart-blue"
    />
    <div class="null-content" v-show="!props.chapter.content && mode === 'preview'">
      <el-empty :image-size="200" description="暂无内容" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.knowledge-base-content {
  wdith: 100%;
  height: 100%;
  overflow: auto;
  .null-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
