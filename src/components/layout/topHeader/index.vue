<template>
  <div class="topHeader">
    <div class="collapse" @click="commonStore.changeCollapse">
      <el-icon><IconItem :icon="commonStore.isCollapse ? 'Expand' : 'Fold'" /></el-icon>
    </div>
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/store";

const commonStore = useCommonStore();
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
