<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1-4"
    >
      <template #title
        ><el-icon><icon-menu /></el-icon><span>item four</span></template
      >
      <el-menu-item index="1-4-1">item one</el-menu-item>
      <el-menu-item index="1-4-2">item one</el-menu-item>
      <el-menu-item index="1-4-3">item one</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";

const isCollapse = ref(false);

const menuTree = reactive([
  {
    id: "1",
    name: "1",
    path: "/1",
    children: [
      {
        id: "1-1",
        name: "1-1",
        path: "/1-1",
        children: [
          {
            id: "1-1-1",
            name: "1-1-1",
            path: "/1-1-1",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "2",
    path: "/2",
    children: []
  }
]);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.#{$prefix} {}
</style>
