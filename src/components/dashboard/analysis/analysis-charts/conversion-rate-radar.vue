<template>
  <EChartsComponents :option="echartOption" class="e-charts-wrapper"/>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useConversionRateOptions } from "@/components/echartsComponents/hooks/radar"
import EChartsComponents from "@/components/echartsComponents/index.vue"

const echartOption = ref({})
onMounted(() => {
  echartOption.value = useConversionRateOptions()
})
</script>

<style scoped lang="scss">
.e-charts-wrapper {
  width: 100%;
  height: 300px;
}
</style>
