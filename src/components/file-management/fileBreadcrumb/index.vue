<template>
  <div class="file-breadcrumb-wrapper">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>文件</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in fileRouterList" :key="item.id"
        >{{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import type { FileRouterItem } from "@/types";
import { ArrowRight } from "@element-plus/icons-vue";

defineOptions({
  name: "file-breadcrumb-wrapper"
});

withDefaults(defineProps<{
  fileRouterList: Array<FileRouterItem>
}>(), {})
</script>

<style scoped lang="scss"></style>
