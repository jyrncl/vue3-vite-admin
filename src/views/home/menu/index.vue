<script setup lang="ts">
import MenuItemVue from "./menu-item.vue";
import { useCommonStore } from "@/store";
import { useRoute } from "vue-router";

const commonStore = useCommonStore();

const route = useRoute();
</script>

<template>
  <el-menu
    :default-active="route.path"
    :class="`${$prefix}-menu`"
    :router="true"
    :collapse-transition="false"
    :collapse="commonStore.isCollapse"
  >
    <menu-item-vue :menuList="commonStore.menuTree" />
  </el-menu>
</template>

<style lang="scss" scoped>
.#{$prefix}-menu {
  height: 100%;
  border: none;
}
</style>
