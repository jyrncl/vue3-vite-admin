<template>
  <el-sub-menu :index="item.path" v-for="item in menuTree" :key="item.id">
    <template #title
    ><el-icon><icon-menu /></el-icon><span>item four</span></template
    >
    <el-menu-item index="1-4-1">item one</el-menu-item>
    <el-menu-item index="1-4-2">item one</el-menu-item>
    <el-menu-item index="1-4-3">item one</el-menu-item>
  </el-sub-menu>
</template>

<script setup lang="ts">
import type { MenuRow } from "@/types";
import { dialogProps } from "element-plus";

const { menuList } = withDefaults(defineProps<{ menuList: Array<MenuRow> }>(), {})
</script>

<style lang="scss" scoped></style>
