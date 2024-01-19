<script setup lang="ts">
import type { FileDetail } from "@/types";
import { ref, reactive } from "vue";
import { convertSizeUnit } from "@/utils/common";
import { getFileDetail, getFolderInfo } from "@/api/file-management";

defineOptions({
  name: "file-detail"
});

const dialogVisible = ref(false);
const detailData = ref<FileDetail | {}>({});
const detailLabelList = reactive([
  {
    label: "名称",
    key: "name"
  },
  {
    label: "文件大小",
    key: "size"
  },
  {
    label: "云端创建时间",
    key: "createTime"
  },
  {
    label: "最后修改时间",
    key: "updateTime"
  }
]);
const handleOpen = ({ id, isFolder }: { id: number; isFolder: boolean }) => {
  dialogVisible.value = true;
  if (isFolder) {
    getFolderInfo({ id }).then(({ data }) => {
      detailData.value = {
        name: data.data.folder_name,
        isFolder: 1,
        createTime: data.data.create_time,
        updateTime: data.data.update_time
      };
    });
  } else {
    getFileDetail({ id }).then(({ data }) => {
      detailData.value = {
        name: data.data.original_name,
        isFolder: 0,
        createTime: data.data.create_time,
        updateTime: data.data.update_time,
        size: convertSizeUnit(data.data.file_size)
      };
    });
  }
};

defineExpose({ handleOpen });
</script>

<template>
  <el-dialog
    class="file-detail-wrapper"
    title="详细信息"
    v-model="dialogVisible"
    style="border-radius: 8px"
    top="30vh"
    width="340"
    append-to-body
  >
    <div class="file-detail-content">
      <div class="content-image">
        <img :src="$getImageUrl(`/file-management/${detailData.isFolder ? 'folder' : 'file'}.png`)" alt="" />
      </div>
      <div
        class="file-detail-item"
        v-for="item in detailLabelList"
        v-show="(item.key === 'size' && !detailData.isFolder) || item.key !== 'size'"
      >
        <div class="item-label">{{ item.label }}</div>
        <div class="item-value">{{ detailData[item.key] }}</div>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">
.file-detail-wrapper {
  .file-detail-content {
    width: 100%;
    .content-image {
      text-align: center;
      img {
        width: 115px;
        margin: 0 auto 35px;
      }
    }
    .file-detail-item {
      margin-bottom: 12px;
      .item-label {
        color: #000;
        margin-bottom: 8px;
      }
      .item-value {
        font-size: 12px;
        color: #ccc;
      }
    }
  }
}
</style>
