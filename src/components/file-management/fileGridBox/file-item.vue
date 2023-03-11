<script setup lang="ts">
import type { FileItem } from "@/types";
import { ref } from "vue";
defineOptions({
  name: "file-item-wrapper"
});

const props = withDefaults(
  defineProps<{
    fileItem: FileItem;
  }>(),
  {}
);

const checked = ref(false);

const emit = defineEmits<{
  (e: "changeContextMenuType", type: string): void
}>()

const handleOncontextmenu = () => {
  emit("changeContextMenuType", "folder");
}
</script>

<template>
  <div class="file-item-wrapper" @contextmenu="handleOncontextmenu">
    <div class="file-item-item-main">
      <div class="file-image">
        <img :src="$getImageUrl('/file-management/folder.png')" alt="" />
      </div>
      <div class="file-info">
        <div class="info-name">{{ props.fileItem.file_name }}</div>
        <div class="info-time">{{ props.fileItem.create_time }}</div>
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
  &:hover {
    background: rgba(132, 133, 141, 0.08);
    .file-item-item-operate {
      display: flex;
    }
  }
  .file-item-item-main {
    .file-image {
      width: 115px;
      height: 90px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .file-info {
      margin-top: 15px;
      text-align: center;
      .info-name {
        font-size: 14px;
        color: rgb(37, 38, 43);
        margin-bottom: 4px;
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
