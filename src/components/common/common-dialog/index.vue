<script setup lang="ts">
defineOptions({
  name: "common-dialog"
});

import { ref, reactive } from "vue";

const dialogVisible = ref(false);
const formData = reactive({});

const handleClose = () => {
  dialogVisible.value = false;
};
</script>

<template>
  <el-dialog v-model="dialogVisible" :before-close="handleClose" v-bind="$attrs">
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #default>
      <!--      <avue-form :option="option"></avue-form>-->
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
