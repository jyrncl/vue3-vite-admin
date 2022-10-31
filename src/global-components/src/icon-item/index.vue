<template>
  <el-icon :color="color" :size="size">
    <component :is="`${$prefix}${icon}`"></component>
  </el-icon>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  icon: string;
  color?: string;
  size?: string | number;
}>(), {})

</script>

<style lang="scss" scoped></style>
