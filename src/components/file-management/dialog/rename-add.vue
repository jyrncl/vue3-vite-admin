<script setup lang="ts">
defineOptions({
  name: "rename-add"
});

import type { RenameForm, FormStatus, CreateFolder, RenameFolder, FileManagementProviderKey } from "@/types";
import { FILE_MANAGEMENT_PROVIDER_KEY } from "@/constant";
import { ElMessage } from "element-plus";
import { createFolder, updateFolder, updateFile } from "@/api/file-management";
import { ref, nextTick, inject } from "vue";

const { refreshPage } = inject(FILE_MANAGEMENT_PROVIDER_KEY) as FileManagementProviderKey;

const dialogVisible = ref(false);
const formStatus = ref<FormStatus>("create");
const formData = ref<RenameForm>({});
const fileType = ref("");
const InputRef = ref<HTMLInputElement | null>(null);
const titleEnum = {
  create: "新建文件夹",
  detail: "详情",
  update: "重命名"
};

const handleOpen = (status: FormStatus, form: RenameForm) => {
  formData.value = { ...form };
  formStatus.value = status;
  if (status === "update" && !(form as RenameFolder).isFolder) {
    (form as RenameFolder).name.replace(/(.*)\.(.*)$/, ($1, $2, $3) => {
      (formData.value as RenameFolder).name = $2;
      fileType.value = $3;
      return $1;
    });
  }
  // nextTick(() => {
  //   InputRef.value?.focus();
  //   InputRef.value?.select();
  // });
  dialogVisible.value = true;
};
const handleClose = () => {
  dialogVisible.value = false;
};

const handleSubmit = () => {
  if (formStatus.value === "create") {
    createFolder(formData.value as CreateFolder)
      .then(() => {
        ElMessage.success("新建文件夹成功");
        refreshPage();
      })
      .finally(() => {
        handleClose();
      });
  } else if (formStatus.value === "update") {
    if ((formData.value as RenameFolder).isFolder) {
      updateFolder(formData.value as RenameFolder)
        .then(() => {
          ElMessage.success("重命名文件夹成功");
          refreshPage();
        })
        .finally(() => {
          handleClose();
        });
    } else {
      updateFile({ ...(formData.value as RenameFolder), name: `${(formData.value as RenameFolder).name}.${fileType.value}` })
        .then(() => {
          ElMessage.success("重命名文件成功");
          refreshPage();
        })
        .finally(() => {
          handleClose();
        });
    }
  }
};

defineExpose({ handleOpen, handleClose });
</script>

<template>
  <div class="add-folder-wrapper"></div>
  <el-dialog
    v-model="dialogVisible"
    style="border-radius: 8px"
    top="30vh"
    :title="titleEnum[formStatus]"
    width="340"
    class="rename-add-wrapper"
    append-to-body
  >
    <div class="rename-add-content">
      <img :src="$getImageUrl('/file-management/folder.png')" alt="" />
      <el-input ref="InputRef" v-model="formData.name" size="large" />
    </div>
    <div class="rename-add-footer">
      <el-button :disabled="!Boolean(formData.name)" type="primary" @click="handleSubmit">确定</el-button>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
.rename-add-content {
  text-align: center;
  margin-bottom: 15px;
  img {
    width: 115px;
    margin-bottom: 35px;
  }
  :deep(.el-input) {
    .el-input__wrapper {
      background: rgba(132, 133, 141, 0.08);
      &:focus-within {
        background: rgba(132, 133, 141, 0.2);
      }
    }
  }
}
.rename-add-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
