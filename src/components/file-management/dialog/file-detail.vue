<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "file-detail"
});

const dialogVisible = ref(false);
</script>

<template>
  <el-dialog
    class="file-detail-wrapper"
    v-model="dialogVisible"
    style="border-radius: 8px"
    top="30vh"
    width="340"
    append-to-body
  ></el-dialog>
</template>

<style scoped lang="scss"></style>
