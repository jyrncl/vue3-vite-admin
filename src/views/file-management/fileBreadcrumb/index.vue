<script setup lang="ts">
import type { FileRouterItem } from "@/types";
import { ArrowRight } from "@element-plus/icons-vue";
import { inject } from "vue";
import { FILE_MANAGEMENT_PROVIDER_KEY } from "@/constant";
import { FileManagementProviderKey } from "@/types";

defineOptions({
  name: "file-breadcrumb-wrapper"
});

const { spliceFileRouter, refreshPage } = inject(FILE_MANAGEMENT_PROVIDER_KEY) as FileManagementProviderKey;

const props = withDefaults(
  defineProps<{
    fileRouterList: Array<FileRouterItem>;
  }>(),
  {}
);

const handleClick = (item: FileRouterItem) => {
  const finallyItem = props.fileRouterList.at(-1) as FileRouterItem;
  item.id === finallyItem.id ? refreshPage() : spliceFileRouter(item);
};
</script>

<template>
  <div class="file-breadcrumb-wrapper">
    <el-breadcrumb :separator-icon="ArrowRight as Component">
      <el-breadcrumb-item v-for="item in props.fileRouterList" :key="item.id" @click="handleClick(item)">
        <span style="cursor: pointer">{{ item.name }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss"></style>
