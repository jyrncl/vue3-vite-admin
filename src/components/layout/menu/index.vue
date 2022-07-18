<template>
  <el-menu
    default-active="2"
    :class="`${$prefix}-menu`"
    :collapse="isCollapse"
  >
    <menu-item-vue :menuList="menuTree" />
  </el-menu>
</template>

<script setup lang="ts">
import { getMenuList } from "@/api/user";
import MenuItemVue from "./menu-item.vue"
import type { MenuRow } from "@/types";
import { ref, onMounted } from "vue";

const isCollapse = ref(false);

const menuTree = ref<Array<MenuRow>>([]);

onMounted(() => {
  getMenuList().then(({ data }) => {
    menuTree.value = data.menuList;
    console.log(menuTree.value);
  })
})

</script>

<style lang="scss" scoped>
.#{$prefix}-menu {
  color: $default-color;
}
</style>
