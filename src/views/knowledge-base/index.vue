<script setup lang="ts">
import KnowledgeBaseTree from "@/components/knowledge-base/knowledge-base-tree/index.vue";
import KnowledgeBaseContent from "@/components/knowledge-base/knowledge-base-content/index.vue";
import { ref, provide } from "vue";
import { KNOWLEDGE_BASE_PROVIDER_KEY } from "@/constant";
import { Chapter } from "@/types";
defineOptions({
  name: "knowledge-base"
});

const isCollapse = ref(true);
const changeCollapse = () => {
  isCollapse.value = !isCollapse.value;
};

const bookTitle = ref("");
const chapter = ref<Chapter>({
  content: "",
  title: "",
  type: "menu"
});
const handlePreview = (data: Chapter, isChapter = false) => {
  isChapter && (chapter.value = data);
  !isChapter && (mode.value = "preview");
  bookTitle.value = isChapter ? data.title : "请选择一个文档";
};

const mode = ref<"preview" | "edit">("preview");
const handleChangeMode = () => {
  mode.value = mode.value === "preview" ? "edit" : "preview";
};

const KnowledgeBaseTreeRef = ref<InstanceType<typeof KnowledgeBaseTree> | null>(null);
const handleRefreshTree = () => {
  KnowledgeBaseTreeRef.value?.getKnowledgeTree();
};

const loading = ref({
  menu: false,
  chapter: false
});
const setLoading = (type: "menu" | "chapter" | "all", flag: boolean) => {
  if (type === "all") {
    loading.value.menu = flag;
    loading.value.chapter = flag;
  } else {
    loading.value[type] = flag;
  }
};

provide(KNOWLEDGE_BASE_PROVIDER_KEY, { setLoading });
</script>

<template>
  <div class="knowledge-base-wrapper">
    <el-container style="height: 100%">
      <transition :name="`${$prefix}-width-zero`">
        <el-aside width="340px" class="knowledge-base-aside" v-show="isCollapse" v-loading="loading.menu">
          <el-card style="height: 100%; border-radius: 0; --el-card-padding: 0">
            <knowledge-base-tree ref="KnowledgeBaseTreeRef" @preview="handlePreview" />
          </el-card>
        </el-aside>
      </transition>
      <el-container style="background: #fff; border-radius: 8px" v-loading="loading.chapter">
        <el-header class="knowledge-base-header" height="50px">
          <div class="collapse" @click="changeCollapse">
            <IconItem :icon="isCollapse ? 'Fold' : 'Expand'" />
          </div>
          <div class="header-title">{{ bookTitle }}</div>
          <el-tooltip effect="dark" :content="`切换为${mode === 'preview' ? '编辑' : '预览'}模式`" placement="top">
            <IconItem style="cursor: pointer" icon="Switch" @click="handleChangeMode" />
          </el-tooltip>
        </el-header>
        <el-main>
          <knowledge-base-content v-model:chapter="chapter" :mode="mode" @refresh-tree="handleRefreshTree" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.knowledge-base-wrapper {
  width: 100%;
  height: 100%;
  .knowledge-base-aside {
    margin-right: 10px;
    border-radius: 8px;
    overflow: hidden;
  }
  .knowledge-base-header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px var(--el-border-color) solid;
    .collapse {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .header-title {
      flex: auto;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
