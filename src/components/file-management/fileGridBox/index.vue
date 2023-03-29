<script setup lang="ts">
import type { FileItem } from "@/types";
import FileContextMenu from "@/components/file-management/contextMenu/index.vue";
import FileItemWrapper from "./file-item.vue";
import { ref } from "vue";
import { useToggleContextMenu } from "@/hooks/file-management";

defineOptions({
  name: "file-grid-box-wrapper"
});

const props = withDefaults(
  defineProps<{
    fileList: Array<FileItem>;
  }>(),
  {
    fileList: () => []
  }
);

const contextMenuType = ref<{ type: string; data: FileItem | undefined }>({
  type: "content",
  data: undefined
});

const [contextMenuVisible, oncontextmenu, position] = useToggleContextMenu(
  "file-management-content",
  "file-context-menu-wrapper",
  () => {},
  () => {}
);

const handleOncontextmenu = (type: string, data?: FileItem) => {
  contextMenuType.value = { type, data };
  oncontextmenu();
};
</script>

<template>
  <div class="file-grid-box-wrapper" @contextmenu.self="handleOncontextmenu('content')">
    <FileItemWrapper
      :file-item="file"
      v-for="file in props.fileList"
      :key="file.id"
      @change-context-menu-type="handleOncontextmenu"
    />
    <Teleport to="body">
      <FileContextMenu
        v-show="contextMenuVisible"
        :position="position"
        :context-menu-type="contextMenuType"
      />
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.file-grid-box-wrapper {
  width: 100%;
  height: 100%;
  padding: 15px 18px 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 34px;
  row-gap: 15px;
}
</style>
