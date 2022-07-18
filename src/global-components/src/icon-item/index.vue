<template>
  <component :is="`${$prefix}${icon}`"></component>
</template>

<script setup lang="ts">
const { icon } = withDefaults(defineProps<{ icon: string }>(), {})
</script>

<style lang="scss" scoped></style>
