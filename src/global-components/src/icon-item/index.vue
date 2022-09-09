<template>
  <component :color="color" :is="`${$prefix}${icon}`"></component>
</template>

<script setup lang="ts">
interface props {
  icon: string;
  color?: string;
}
const {icon, color} = defineProps<props>();
</script>

<style lang="scss" scoped></style>
