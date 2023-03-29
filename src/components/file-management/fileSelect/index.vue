<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "file-select-wrapper"
});

const props = withDefaults(
  defineProps<{
    all?: number;
    select?: number;
  }>(),
  {
    all: 0,
    select: 0
  }
);

const fileCheckAll = ref(false);
const isIndeterminate = ref(false);

const emit = defineEmits<{
  (e: "selectAll", checked: boolean): void;
}>();

const handleCheckAllFile = (checked: boolean) => {
  isIndeterminate.value = false;
  emit("selectAll", checked);
};
</script>

<template>
  <div class="file-select-wrapper">
    <el-checkbox
      v-model="fileCheckAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllFile"
      >{{ props.select ? `已选${props.select}项` : `共${props.all}项` }}</el-checkbox
    >
  </div>
</template>

<style scoped lang="scss"></style>
