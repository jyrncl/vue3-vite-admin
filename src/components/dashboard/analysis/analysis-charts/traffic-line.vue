<template>
  <EChartsComponents :option="option" class="e-charts-wrapper" />
</template>

<script setup lang="ts">
import EChartsComponents from "@/components/echartsComponents/index.vue"
import { useTrafficLineOptions } from "@/components/echartsComponents/hooks/line"

const { option } = useTrafficLineOptions();
</script>

<style scoped lang="scss">
.e-charts-wrapper {
  width: 100%;
  height: 200px;
}
</style>
