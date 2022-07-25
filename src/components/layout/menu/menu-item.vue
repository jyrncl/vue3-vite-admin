<template>
  <template v-for="menu in props.menuList" :key="menu.id">
    <template v-if="isHaveChildren(menu)">
      <el-sub-menu :index="menu.path">
        <template #title
          ><el-icon><IconItem :icon="menu.icon" /></el-icon> <span>{{ menu.name }}</span></template
        >
        <menu-item :menuList="menu.children"></menu-item>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="menu.path" @click="setPath($event.indexPath, menu)">
        <el-icon><IconItem :icon="menu.icon" /></el-icon>
        <span>{{ menu.name }}</span>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
import type { MenuRow } from "@/types";
import { isHaveChildren } from "@/utils/common";
import { useCommonStore } from "@/store";

const props = withDefaults(defineProps<{ menuList: Array<MenuRow> }>(), {
  menuList: () => []
});

const { setBreadcrumbList, menuTree, setTabPageList } = useCommonStore();

const getThisData = (tree: Array<MenuRow>, path: string): MenuRow | undefined => {
  for (const ele of tree) {
    if (ele.path === path) {
      return ele;
    } else if (ele.children.length) {
      return getThisData(ele.children, path);
    }
  }
};

const setPath = (pathList: Array<string>, menuRow: MenuRow) => {
  const result: Array<MenuRow | undefined> = [];
  pathList.forEach(ele => {
    result.push(getThisData(menuTree, ele));
  });
  setTabPageList(menuRow);
  setBreadcrumbList(result);
};
</script>

<style lang="scss" scoped></style>
