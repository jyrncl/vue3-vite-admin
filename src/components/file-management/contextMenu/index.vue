<script setup lang="ts">
import type { ContextMenu, FileItem } from "@/types";
import { downloadFileByAElement } from "@/utils/common";
import { reactive } from "vue";

const props = withDefaults(
  defineProps<{
    position: { x: number; y: number };
    contextMenuType: { type: string; data: FileItem | undefined };
  }>(),
  {
    position: () => ({ x: 0, y: 0 }),
    contextMenuType: () => ({ type: "content", data: undefined })
  }
);
const addFolder = () => {
  console.log("新建文件夹");
};

const defaultMenuList = reactive<Array<ContextMenu>>([
  {
    name: "新建文件夹",
    icon: "FolderAdd",
    callback: addFolder
  },
  {
    name: "上传文件",
    icon: "DocumentAdd",
    callback: () => {
      console.log("上传文件");
    }
  },
  {
    name: "上传文件夹",
    icon: "UploadFilled",
    callback: () => {
      console.log("上传文件夹");
    }
  },
  {
    name: "刷新页面",
    icon: "Refresh",
    callback: () => {
      console.log("刷新页面");
    }
  }
]);

const folderMenuList = reactive<Array<ContextMenu>>([
  {
    name: "重命名",
    icon: "EditPen",
    callback: () => {
      console.log("重命名");
    }
  },
  {
    name: "详细信息",
    icon: "MoreFilled",
    callback: () => {
      console.log("查看详细信息");
    }
  },
  {
    name: "删除文件夹",
    icon: "DeleteFilled",
    callback: () => {
      console.log("删除文件夹");
    }
  }
]);

const fileMenuList = reactive<Array<ContextMenu>>([
  {
    name: "下载文件",
    icon: "Download",
    callback: () => {
      downloadFileByAElement(`/api/file/downloadUserFile?id=${props.contextMenuType.data?.id}`);
    }
  },
  {
    name: "重命名",
    icon: "EditPen",
    callback: () => {
      console.log("重命名");
    }
  },
  {
    name: "详细信息",
    icon: "MoreFilled",
    callback: () => {
      console.log("查看详细信息");
    }
  },
  {
    name: "删除文件",
    icon: "DeleteFilled",
    callback: () => {
      console.log("删除文件夹");
    }
  }
]);

const finallyMenuList = {
  content: defaultMenuList,
  folder: folderMenuList,
  file: fileMenuList
};

defineOptions({
  name: "file-context-menu-wrapper"
});
</script>

<template>
  <div
    class="file-context-menu-wrapper"
    :style="{ top: `${position.y}px`, left: `${position.x}px` }"
  >
    <div
      class="file-context-menu-item"
      v-for="item in finallyMenuList[contextMenuType.type]"
      :key="item.icon"
      @click="item.callback"
    >
      <icon-item :icon="item.icon" size="18px" color="#409EFF" />
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file-context-menu-wrapper {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 150px;
  border-radius: 8px;
  padding: 10px;
  background: #fff;
  box-shadow: 0 0 1px 1px rgb(28 28 32 / 5%), 0 8px 24px rgb(28 28 32 / 12%);
  z-index: 99999;
  .file-context-menu-item {
    display: flex;
    align-items: center;
    column-gap: 8px;
    cursor: pointer;
    padding: 8px;
    border-bottom: 1px #eee solid;
    border-radius: 8px;
    overflow: hidden;
    &:last-child {
      border: none;
    }
    &:hover {
      background: rgba(121, 187, 255, 0.2);
    }
  }
}
</style>
