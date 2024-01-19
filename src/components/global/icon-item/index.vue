<script setup lang="ts">
defineOptions({ name: "icon-item" });
const props = withDefaults(
  defineProps<{
    icon: string | undefined;
    color?: string;
    size?: string | number;
  }>(),
  {
    size: 18
  }
);
</script>

<template>
  <el-icon :color="props.color" :size="props.size">
    <component :is="`${$prefix}${props.icon}`"></component>
  </el-icon>
</template>

<style lang="scss" scoped></style>
