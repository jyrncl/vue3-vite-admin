<script setup lang="ts">
import type { FolderDetailItem, FolderDetailList } from "@/types";
import FileContextMenu from "@/views/file-management/contextMenu/index.vue";
import FileGridItemWrapper from "./file-grid-item.vue";
import FileListWrapper from "./file-list-wrapper.vue";
import { ref, nextTick } from "vue";
import { useToggleContextMenu } from "@/hooks/file-management";

defineOptions({
  name: "file-grid-box-wrapper"
});

const props = withDefaults(
  defineProps<{
    fileList: FolderDetailList;
    fileLayout: string;
  }>(),
  {
    fileList: () => []
  }
);

const contextMenuType = ref<{ type: string; data: FolderDetailItem | undefined }>({
  type: "content",
  data: undefined
});

const isAddClick = ref(false);

const [contextMenuVisible, oncontextmenu, position, setVisible] = useToggleContextMenu(
  "file-management-content",
  "file-context-menu-wrapper",
  isAddClick,
  () => {},
  () => {}
);

const handleOncontextmenu = (type: string, data?: FolderDetailItem) => {
  isAddClick.value = false;
  contextMenuType.value = { type, data };
  oncontextmenu();
};

const handleClickAdd = () => {
  isAddClick.value = true;
  contextMenuType.value = { type: "content", data: undefined };
  setVisible();
  const { height, top, left } = document.getElementsByClassName("file-click-add")[0].getBoundingClientRect();
  position.value = {
    x: left - 150,
    y: top + height + 8
  };
  nextTick(() => {
    setTimeout(() => {
      isAddClick.value = false;
    }, 350);
  });
};

defineExpose({ handleClickAdd });
</script>

<template>
  <div class="file-grid-box-wrapper" @contextmenu.self="handleOncontextmenu('content')">
    <template v-if="props.fileList.length">
      <template v-if="props.fileLayout === 'Grid'">
        <file-grid-item-wrapper
          :file-item="file"
          v-for="file in props.fileList"
          :key="file.id"
          @change-context-menu-type="handleOncontextmenu"
        />
      </template>
      <template v-else>
        <file-list-wrapper :file-list="props.fileList" @change-context-menu-type="handleOncontextmenu" />
      </template>
    </template>
    <template v-else>
      <el-empty style="width: 100%; margin-top: 30px" description="没有数据，点击右键上传吧" />
    </template>
    <Teleport to="body">
      <transition :name="`${$prefix}-height-zero`">
        <file-context-menu v-show="contextMenuVisible" :position="position" :context-menu-type="contextMenuType" />
      </transition>
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
  align-content: flex-start;
}
</style>
