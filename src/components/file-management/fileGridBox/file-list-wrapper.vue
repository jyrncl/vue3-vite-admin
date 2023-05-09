<script setup lang="ts">
import dayjs from "dayjs";
import { inject, ref } from "vue";
import { FILE_MANAGEMENT_PROVIDER_KEY } from "@/constant";
import { convertSizeUnit } from "@/utils/common";
import type { FileManagementProviderKey, FolderDetailList, FolderDetailItem } from "@/types";
defineOptions({
  name: "file-list-wrapper"
});

const { setCurFolderId, addFileRouter } = inject(FILE_MANAGEMENT_PROVIDER_KEY) as FileManagementProviderKey;

const props = withDefaults(
  defineProps<{
    fileList: FolderDetailList;
  }>(),
  {}
);

const checked = ref(false);

const emit = defineEmits<{
  (e: "changeContextMenuType", type: string, data: FolderDetailItem): void;
}>();

const handleOncontextmenu = (row: FolderDetailItem) => {
  emit("changeContextMenuType", row.isFolder ? "folder" : "file", row);
};

const handleGetCurList = (row: FolderDetailItem) => {
  if (row.isFolder) {
    setCurFolderId(row.id);
    addFileRouter({ name: row.name, id: row.id, parentId: row.parentId });
  } else {
    console.log("这个是文件");
  }
};
</script>

<template>
  <el-table
    :data="props.fileList"
    stripe
    style="width: 100%"
    height="100%"
    @row-click="handleGetCurList"
    @row-contextmenu="handleOncontextmenu"
  >
    <el-table-column prop="name" label="名称">
      <template v-slot:default="{ row }">
        <div class="file-list-item">
          <img style="width: 30px" :src="$getImageUrl(`/file-management/${row.isFolder ? 'folder' : 'file'}.png`)" alt="" />
          <span>{{ row.name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="修改时间"
      width="180"
      align="center"
      :formatter="row => dayjs(row.createTime).format('YYYY-MM-DD HH:MM')"
    />
    <el-table-column prop="size" label="大小" width="180" align="center" :formatter="row => convertSizeUnit(Number(row.size))" />
  </el-table>
</template>

<style scoped lang="scss">
.file-list-item {
  @include flex-start;
  column-gap: 8px;
}
</style>
