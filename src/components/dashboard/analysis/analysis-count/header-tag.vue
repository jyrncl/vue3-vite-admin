<template>
  <div class="header-tag">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
const { title, color = "#fff", bgColor = "#fff" } = defineProps<{
  title: string;
  color: string;
  bgColor: string;
}>();
</script>

<style scoped lang="scss">
.header-tag {
  color: v-bind(color);
  padding: 1px 5px;
  border: 1px solid v-bind(color);
  background-color: v-bind(bgColor);
}
</style>
