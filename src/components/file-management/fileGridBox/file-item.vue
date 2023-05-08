<script setup lang="ts">
import type { FolderDetailItem } from "@/types";
import dayjs from "dayjs";
import { ref } from "vue";
defineOptions({
  name: "file-item-wrapper"
});

const props = withDefaults(
  defineProps<{
    fileItem: FolderDetailItem;
  }>(),
  {}
);

const checked = ref(false);

const emit = defineEmits<{
  (e: "changeContextMenuType", type: string, data: FolderDetailItem): void;
}>();

const handleOncontextmenu = () => {
  emit("changeContextMenuType", props.fileItem.isFolder ? "folder" : "file", props.fileItem);
};
</script>

<template>
  <div class="file-item-wrapper" @contextmenu="handleOncontextmenu" :title="props.fileItem.name">
    <div class="file-item-item-main">
      <div class="file-image">
        <img :src="$getImageUrl(`/file-management/${props.fileItem.isFolder ? 'folder' : 'file'}.png`)" alt="" />
      </div>
      <div class="file-info">
        <div class="info-name">{{ props.fileItem.name }}</div>
        <div class="info-time">
          {{ dayjs(props.fileItem.createTime).format("YYYY-MM-DD HH:MM") }}
        </div>
      </div>
    </div>
    <div class="file-item-item-operate">
      <div class="operate-select">
        <el-checkbox v-model="checked" size="large" />
      </div>
      <div class="operate-more">
        <icon-item icon="More" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file-item-wrapper {
  cursor: pointer;
  position: relative;
  padding: 8px;
  border-radius: 8px;
  width: 130px;
  height: 180px;
  overflow: hidden;
  &:hover {
    background: rgba(132, 133, 141, 0.08);
    .file-item-item-operate {
      display: flex;
    }
  }
  .file-item-item-main {
    text-align: center;
    .file-image {
      width: 115px;
      height: 90px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .file-info {
      margin-top: 15px;
      text-align: center;
      .info-name {
        width: 115px;
        font-size: 14px;
        color: rgb(37, 38, 43);
        margin-bottom: 4px;
        @include text-hidden-row(2);
      }
      .info-time {
        font-size: 12px;
        color: rgba(37, 38, 43, 0.18);
      }
    }
  }
  .file-item-item-operate {
    width: 100%;
    height: 20px;
    position: absolute;
    top: 10px;
    left: 0;
    padding: 0 5px;
    @include space-between;
    display: none;
    .operate-select,
    .operate-more {
      padding: 3px 5px;
      border-radius: 5px;
      background-color: #fff;
    }
    ::v-deep(.el-checkbox.el-checkbox--large) {
      height: 0;
    }
    .operate-more {
      color: rgba(37, 38, 43, 0.18);
      &:hover {
        color: #555555;
      }
    }
  }
}
</style>
