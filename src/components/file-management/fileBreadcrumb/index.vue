<script setup lang="ts">
import type { FileRouterItem } from "@/types";
import { ArrowRight } from "@element-plus/icons-vue";

defineOptions({
  name: "file-breadcrumb-wrapper"
});

const props = withDefaults(defineProps<{
  fileRouterList: Array<FileRouterItem>
}>(), {})
</script>

<template>
  <div class="file-breadcrumb-wrapper">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>文件</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in props.fileRouterList" :key="item.id"
      >{{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss"></style>
