<template>
  <el-menu
    :default-active="defaultPath"
    :class="`${$prefix}-menu`"
    :router="true"
    :collapse-transition="false"
    :collapse="commonStore.isCollapse"
  >
    <menu-item-vue :menuList="menuTree" />
  </el-menu>
</template>

<script setup lang="ts">
import { getMenuList } from "@/api/user";
import MenuItemVue from "./menu-item.vue";
import type { MenuRow } from "@/types";
import { useCommonStore } from "@/store";
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";

const menuTree = ref<Array<MenuRow>>([]);
const commonStore = useCommonStore();

onMounted(() => {
  getMenuList().then(({ data }) => {
    menuTree.value = data.menuList;
    commonStore.setMenuTree(data.menuList);
  });
});

const defaultPath = ref("");
const route = useRoute();
watch(
  () => route.path,
  (path: string) => {
    defaultPath.value = path
  }
);
</script>

<style lang="scss" scoped>
.#{$prefix}-menu {
  height: 100%;
  border: none;
}
</style>
