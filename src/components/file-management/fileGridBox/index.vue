<script setup lang="ts">
import FileItem from "./file-item.vue"
defineOptions({
  name: "file-grid-box-wrapper"
});
const props = withDefaults(defineProps<{
  fileList: Array<Record<string, any>>
}>(), {})
</script>

<template>
  <div class="file-grid-box-wrapper">
    <FileItem v-for="file in props.fileList" :key="file.id" />
  </div>
</template>

<style scoped lang="scss">
.file-grid-box-wrapper {
  width: 100%;
  height: 100%;
}
</style>