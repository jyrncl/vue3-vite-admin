<template>
  <div class="header-tag" :style="`backgroundColor: rgba($color: ${color}, $alpha: 0.5)`">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
const { title, color = "#fff" } = defineProps<{
  title: string;
  color: string;
}>();
</script>

<style scoped lang="scss">
.header-tag {
  color: v-bind(color);
  padding: 1px 5px;
  border: 1px solid v-bind(color);
}
</style>
