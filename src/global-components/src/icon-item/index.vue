<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon: string;
    color?: string;
    size?: string | number;
  }>(),
  {}
);
</script>

<template>
  <el-icon :color="props.color" :size="props.size">
    <component :is="`${$prefix}${props.icon}`"></component>
  </el-icon>
</template>

<style lang="scss" scoped></style>
