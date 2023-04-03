<script setup lang="ts">
defineOptions({
  name: "rename-add"
});

import type { RenameForm, FormStatus } from "@/types";
import { ref, nextTick } from "vue";

const dialogVisible = ref(false);
const formStatus = ref<FormStatus>("create");
const formData = ref<RenameForm>({});
const InputRef = ref<HTMLInputElement | null>(null);
const titleEnum = {
  create: "新建文件夹",
  detail: "详情",
  update: "重命名"
};

const handleOpen = (status: FormStatus, form: RenameForm) => {
  formData.value = form;
  formStatus.value = status;
  nextTick(() => {
    InputRef.value?.focus();
    InputRef.value?.select();
  });
  dialogVisible.value = true;
};
const handleClose = () => {
  dialogVisible.value = false;
};

defineExpose({ handleOpen, handleClose });
</script>

<template>
  <div class="add-folder-wrapper"></div>
  <el-dialog
    v-model="dialogVisible"
    style="border-radius: 8px"
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
      <el-button type="primary">确定</el-button>
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
