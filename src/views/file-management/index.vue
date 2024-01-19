<script setup lang="ts">
import FileBreadcrumb from "@/views/file-management/fileBreadcrumb/index.vue";
import FileSelect from "@/views/file-management/fileSelect/index.vue";
import FileGridBox from "@/views/file-management/fileGridBox/index.vue";
import type { FileRouterItem, FolderDetailList } from "@/types";
import { getCurrentFolderInfo } from "@/api/file-management";
import { useFileLayout } from "@/hooks/file-management";
import { FILE_MANAGEMENT_PROVIDER_KEY } from "@/constant";
import { reactive, onMounted, ref, provide } from "vue";

const { fileLayout, changeFileLayout } = useFileLayout();

const curFolderId = ref(-1);
const setCurFolderId = (id: number) => {
  curFolderId.value = id;
  getCurrentFolderList();
};

const fileList = ref<FolderDetailList>([]);
// 获取文件列表页
const getCurrentFolderList = () => {
  setLoading(true);
  getCurrentFolderInfo({ folderId: curFolderId.value })
    .then(({ data }) => {
      fileList.value = data.data || [];
    })
    .finally(() => {
      setLoading(false);
    });
};
onMounted(() => {
  getCurrentFolderList();
});

const fileRouterList = reactive<Array<FileRouterItem>>([
  {
    id: -1,
    name: "全部文件"
  }
]);

const addFileRouter = (item: FileRouterItem) => {
  fileRouterList.push(item);
};

const spliceFileRouter = (item: FileRouterItem) => {
  const index = fileRouterList.findIndex(i => i.id === item.id);
  if (index !== -1) {
    fileRouterList.splice(index + 1, fileRouterList.length - 1);
    setCurFolderId(item.id);
  }
};

const loading = ref(false);
const setLoading = (val: boolean) => {
  loading.value = val;
};

provide(FILE_MANAGEMENT_PROVIDER_KEY, {
  curFolderId,
  fileLayout,
  setCurFolderId,
  refreshPage: getCurrentFolderList,
  addFileRouter,
  spliceFileRouter,
  setLoading
});

const FileGridBoxRef = ref<InstanceType<typeof FileGridBox> | null>(null);
const handleOpenContextMenu = () => {
  FileGridBoxRef.value?.handleClickAdd();
};
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
          <div class="header-add file-click-add" @click="handleOpenContextMenu">
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
      <div class="file-management-content" v-loading="loading">
        <FileGridBox ref="FileGridBoxRef" :file-list="fileList" :file-layout="fileLayout" />
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
