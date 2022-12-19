<script setup lang="ts">
import FileBreadcrumb from "@/components/file-management/fileBreadcrumb/index.vue";
import FileSelect from "@/components/file-management/fileSelect/index.vue";
import FileGridBox from "@/components/file-management/fileGridBox/index.vue";
import type { FileRouterItem, FileItem } from "@/types";
import { useFileLayout } from "@/hooks/file-management";
import { reactive } from "vue";

const { fileLayout, changeFileLayout } = useFileLayout();
const list = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1
];
const fileList = reactive<Array<FileItem>>(list.map((item, index) => {
  return {
    id: index + 1,
    parent_id: "-1",
    file_name: "文件夹一",
    file_size: "未知",
    file_path: "",
    file_type: "folder",
    original_name: "",
    create_time: "2020/11/15 21:29",
    update_time: "2020/11/15 21:29"
  }
}))
const fileRouterList = reactive<Array<FileRouterItem>>([]);
document.oncontextmenu = () => false
</script>

<template>
  <div class="file-management-wrapper">
    <div class="file-management-scroll">
      <div class="file-management-header">
        <FileBreadcrumb :file-router-list="fileRouterList" />
        <div class="header-search-add">
          <div class="header-search">
            <icon-item icon="Search" size="18px" />
          </div>
          <div class="header-add">
            <icon-item icon="Plus" color="#fff" size="18px" />
          </div>
        </div>
      </div>
      <div class="file-management-select-sort">
        <div class="file-management-select">
          <FileSelect :test="fileLayout" />
        </div>
        <div class="file-management-sort-layout">
          <div class="sort">
            <icon-item icon="Sort" />
            <span class="sort-label">按修改时间排序</span>
          </div>
          <div class="layout" @click="changeFileLayout">
            <icon-item :icon="fileLayout" color="#555555" />
          </div>
        </div>
      </div>
      <div class="file-management-content">
        <FileGridBox :file-list="fileList" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file-management-wrapper {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  .file-management-scroll {
    width: 100%;
    height: 100%;
    overflow: auto;
    .file-management-header {
      @include space-between;
      .header-search-add {
        @include space-between;
        column-gap: 15px;
        .header-search,
        .header-add {
          border-radius: 50%;
          cursor: pointer;
          width: 2.2rem;
          height: 2.2rem;
          @include flex-center;
        }
        .header-search {
          &:hover {
            background: rgba(85, 85, 85, 0.1);
          }
        }
        .header-add {
          background: linear-gradient(129.12deg, #446dff 0%, rgba(99, 125, 255, 0.75) 100%);
          &:hover {
            background: linear-gradient(129.12deg, #365bde 0%, #526efa 100%);
          }
        }
      }
    }
    .file-management-select-sort {
      margin-top: 15px;
      @include space-between;
      .file-management-sort-layout {
        @include space-between;
        column-gap: 15px;
        .sort {
          @include space-between;
          font-size: 12px;
          padding: 0 6px;
          height: 1.8rem;
          border-radius: 3px;
          cursor: pointer;
          color: #555555;
          column-gap: 5px;
          &:hover {
            background: rgba(85, 85, 85, 0.1);
          }
        }
        .layout {
          width: 1.8rem;
          height: 1.8rem;
          @include flex-center;
          border-radius: 3px;
          cursor: pointer;
          &:hover {
            background: rgba(85, 85, 85, 0.1);
          }
        }
      }
    }
    .file-management-content {
      width: 100%;
      height: calc(100% - 90px);
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
