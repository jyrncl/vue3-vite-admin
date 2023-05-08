<script setup lang="ts">
import type { ContextMenu, FolderDetailItem, FileManagementProviderKey } from "@/types";
import RenameAdd from "@/components/file-management/dialog/rename-add.vue";
import { FILE_MANAGEMENT_PROVIDER_KEY } from "@/constant";
import { uploadFile, deleteFile } from "@/api/file-management";
import { downloadFileByAElement } from "@/utils/common";
import { ref, reactive, inject } from "vue";
import { useUserStore } from "@/store";
import { ElButton, ElMessage, ElMessageBox, type UploadRequestOptions } from "element-plus";

const props = withDefaults(
  defineProps<{
    position: { x: number; y: number };
    contextMenuType: { type: string; data: FolderDetailItem | undefined };
  }>(),
  {
    position: () => ({ x: 0, y: 0 }),
    contextMenuType: () => ({ type: "content", data: undefined })
  }
);

const { curFolderId, refreshPage } = inject(FILE_MANAGEMENT_PROVIDER_KEY) as FileManagementProviderKey;

const defaultMenuList = reactive<Array<ContextMenu>>([
  {
    name: "新建文件夹",
    icon: "FolderAdd",
    callback: () => {
      RenameAddDialog.value?.handleOpen("create", { parentId: curFolderId.value });
    }
  },
  {
    name: "上传文件",
    icon: "DocumentAdd",
    callback: () => {
      Upload.value?.ref.click();
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
      refreshPage();
    }
  }
]);

const folderMenuList = reactive<Array<ContextMenu>>([
  {
    name: "重命名",
    icon: "EditPen",
    callback: () => {
      RenameAddDialog.value?.handleOpen("update", props.contextMenuType.data);
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
      RenameAddDialog.value?.handleOpen("update", props.contextMenuType.data);
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
      handleDeleteFile();
    }
  }
]);

const finallyMenuList = {
  content: defaultMenuList,
  folder: folderMenuList,
  file: fileMenuList
};

const RenameAddDialog = ref<InstanceType<typeof RenameAdd>>(null);

const { token } = useUserStore();
const Upload = ref<InstanceType<typeof ElButton> | null>(null);

const handleUpload = (data: UploadRequestOptions) => {
  const formData = new FormData();
  formData.append("file", data.file);
  formData.append("parentId", curFolderId.value.toString());
  uploadFile(formData).then(({ data }) => {
    if (data.code === 200) {
      ElMessage.success("上传成功");
      refreshPage();
    }
  });
};

const handleDeleteFile = () => {
  ElMessageBox.confirm(`是否删除${props.contextMenuType.data?.name}?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      deleteFile({ id: props.contextMenuType.data?.id as number }).then(({ data }) => {
        if (data.code === 200) {
          ElMessage.success("删除成功");
          refreshPage();
        }
      });
    })
    .catch(() => {
      ElMessage.success("已取消");
    });
};

defineOptions({
  name: "file-context-menu-wrapper"
});
</script>

<template>
  <div class="file-context-menu-wrapper" :style="{ top: `${position.y}px`, left: `${position.x}px` }">
    <div
      class="file-context-menu-item"
      v-for="item in finallyMenuList[contextMenuType.type as keyof typeof finallyMenuList]"
      :key="item.icon"
      @click="item.callback"
    >
      <icon-item :icon="item.icon" size="18px" color="#409EFF" />
      <span>{{ item.name }}</span>
    </div>
    <rename-add ref="RenameAddDialog" />
    <el-upload v-show="false" action="" :show-file-list="false" :auto-upload="true" :http-request="handleUpload">
      <template #trigger>
        <el-button ref="Upload" type="primary">select file</el-button>
      </template>
    </el-upload>
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
    border-top: 1px #eee solid;
    border-radius: 8px;
    overflow: hidden;
    &:first-child {
      border: none;
    }
    &:hover {
      background: rgba(121, 187, 255, 0.2);
    }
  }
}
</style>
