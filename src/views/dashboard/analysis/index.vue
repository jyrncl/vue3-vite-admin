<script setup lang="ts">
import Analysis from "@/components/dashboard/analysis/index.vue";
defineOptions({
  name: "analysis-wrapper"
});
</script>

<template>
  <div class="analysis-wrapper">
    <Analysis />
  </div>
</template>

<style lang="scss" scoped>
.analysis-wrapper {
  width: 100%;
  height: 100%;
}
</style>
