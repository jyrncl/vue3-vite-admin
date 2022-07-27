<template>
  <div class="topHeader">
    <div class="collapse" @click="commonStore.changeCollapse">
      <el-icon><IconItem :icon="commonStore.isCollapse ? 'Expand' : 'Fold'" /></el-icon>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item @click="setBreadcrumbAndTabPage(item)" :to="{ path: item.path }" v-for="item in commonStore.breadcrumbList" :key="item.id">{{ item.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuRow } from "@/types"
import { getPathList } from "@/utils/common";
import { useCommonStore } from "@/store";

const commonStore = useCommonStore();

const setBreadcrumbAndTabPage = (item: MenuRow) => {
  console.log(item, "item");
  const pathList = commonStore.breadcrumbList.map((item) => item?.path || '')
  getPathList(pathList, item, commonStore.menuTree).then((result) => {
    if (!item.children.length) {
      commonStore.setTabPageList(item);
    }
    commonStore.setBreadcrumbList(result);
  })
}
</script>

<style lang="scss" scoped>
.topHeader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .collapse{
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 8px;
  }
}
</style>
