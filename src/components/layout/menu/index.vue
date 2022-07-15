<template>
  <el-menu
    default-active="2"
    :class="`${$prefix}-menu`"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in menuTree" :key="item.id">
      <template v-if="isHaveChildren(item)">
        <el-sub-menu :index="item.path" v-for="item in menuTree" :key="item.id">
          <template #title
          ><el-icon><icon-menu /></el-icon><span>item four</span></template
          >
          <el-menu-item index="1-4-1">item one</el-menu-item>
          <el-menu-item index="1-4-2">item one</el-menu-item>
          <el-menu-item index="1-4-3">item one</el-menu-item>
        </el-sub-menu>
      </template>
      <template v-else>
        <el-menu-item :index="item.path">
          <el-icon><setting /></el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import { isHaveChildren } from "@/utils/common";

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
.#{$prefix}-menu {
  color: $default-color;
}
</style>
