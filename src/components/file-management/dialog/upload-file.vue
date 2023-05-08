<script setup lang="ts">
defineOptions({
  name: "upload-file-wrapper"
});

import { ElUpload } from "element-plus";
import { ref } from "vue";

const props = withDefaults(defineProps<{ parentId: number }>(), {
  parentId: -1
});

const Upload = ref<InstanceType<typeof ElUpload> | null>(null);
const handleUpload = () => {
  Upload.value?.submit();
};

defineExpose({ handleUpload });
</script>

<template>
  <el-upload ref="Upload" :show-file-list="false" action="/file/addUserFile" :data="{ parentId: props.parentId }"> </el-upload>
</template>

<style scoped lang="scss"></style>
