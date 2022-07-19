<template>
  <component :is="`${$prefix}${propsData.icon}`"></component>
</template>

<script setup lang="ts">
const propsData = withDefaults(defineProps<{ icon: string }>(), {})
</script>

<style lang="scss" scoped></style>
