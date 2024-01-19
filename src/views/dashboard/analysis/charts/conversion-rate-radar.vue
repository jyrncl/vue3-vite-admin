<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useConversionRateOptions } from "@/components/echartsComponents/hooks/radar";
import EChartsComponents from "@/components/global/common-chart/index.vue";

const eChartOption = ref({});
onMounted(() => {
  eChartOption.value = useConversionRateOptions();
});
</script>

<template>
  <EChartsComponents :option="eChartOption" class="e-charts-wrapper" />
</template>

<style scoped lang="scss">
.e-charts-wrapper {
  width: 100%;
  height: 300px;
}
</style>
