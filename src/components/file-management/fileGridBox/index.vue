<script setup lang="ts">
import type { FileItem } from "@/types";
import FileItemWrapper from "./file-item.vue"
defineOptions({
  name: "file-grid-box-wrapper"
});
const props = withDefaults(defineProps<{
  fileList: Array<FileItem>
}>(), {
   fileList: () => []
})



// setTimeout(() => {
//   document.oncontextmenu = null;
// }, 10000)
const contextmenuFunc = () => {
  console.log(document.oncontextmenu)
  return false;
}
</script>

<template>
  <div class="file-grid-box-wrapper" @contextmenu="contextmenuFunc">
    <FileItemWrapper :file-item="file" v-for="file in props.fileList" :key="file.id" />
  </div>
</template>

<style scoped lang="scss">
.file-grid-box-wrapper {
  width: 100%;
  height: 100%;
  padding: 15px 18px 0;
  display: flex;
  flex-wrap: wrap;
  column-gap: 34px;
  row-gap: 15px;
}
</style>