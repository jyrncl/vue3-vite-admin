<template>
  <div class="topHeader">
    <div class="left-link">
      <div class="collapse" @click="commonStore.changeCollapse">
        <el-icon><IconItem :icon="commonStore.isCollapse ? 'Expand' : 'Fold'" /></el-icon>
      </div>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item @click="setBreadcrumbAndTabPage(item)" :to="{ path: item.path }" v-for="item in commonStore.breadcrumbList" :key="item.id">{{ item.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="right-user">
      <div class="search">
        <div class="icon">
          <el-icon><IconItem icon="Search" /></el-icon>
        </div>
      </div>
      <div class="message">
        <div class="icon">
          <el-icon><IconItem icon="ChatDotRound" /></el-icon>
        </div>
      </div>
      <div class="fullscreen">
        <div class="icon">
          <el-icon><IconItem icon="FullScreen" /></el-icon>
        </div>
      </div>
      <div class="change-language">
        <div class="icon">
          <el-icon><IconItem icon="Search" /></el-icon>
        </div>
      </div>
      <div class="user-info"></div>
      <div class="setting">
        <div class="icon">
          <el-icon><IconItem icon="Setting" /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuRow } from "@/types";
import { useCommonStore } from "@/store";

const commonStore = useCommonStore();

const setBreadcrumbAndTabPage = (item: MenuRow) => {
  if (item.children.length) return;
  commonStore.setTabPageList(item);
};
</script>

<style lang="scss" scoped>
.topHeader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-link {
    display: flex;
    align-items: center;
    .collapse {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
  }
  .right-user {
    display: flex;
    align-items: center;
  }
}
</style>
