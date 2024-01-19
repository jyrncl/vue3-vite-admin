<script setup lang="ts">
import { getTrafficLineList } from "@/api/echarts";
import { onMounted, ref } from "vue";
import EChartsComponents from "@/components/global/common-chart/index.vue";
import { useTrafficLineOptions } from "@/components/echartsComponents/hooks/line";
import { dealResponseNull } from "@/utils/common";

const eChartOption = ref({});
onMounted(() => {
  getTrafficLineList().then(({ data }) => {
    eChartOption.value = useTrafficLineOptions(dealResponseNull(data.data, []), {
      label: "time",
      value: "value"
    });
  });
});
</script>

<template>
  <EChartsComponents :option="eChartOption" class="e-charts-wrapper" />
</template>

<style scoped lang="scss">
.e-charts-wrapper {
  width: 100%;
  height: 200px;
}
</style>
