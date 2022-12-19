<script setup lang="ts">
import type { ContextMenu } from "@/types"
import { reactive } from "vue"

const addFolder = () => {
  console.log("新建文件夹")
}

const defaultMenuList = reactive<Array<ContextMenu>>([{
  name: "新建文件夹",
  callback: addFolder
}])
defineOptions({
  name: "file-context-menu-wrapper"
});
</script>

<template>
  <div class="file-context-menu-wrapper"></div>
</template>

<style scoped lang="scss">
</style>
