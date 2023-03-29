<script setup lang="ts">
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart, PieChart, RadarChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  RadarChart,
  GridComponent,
  TooltipComponent,
  PieChart,
  LegendComponent,
  TitleComponent
]);
defineOptions({
  components: { VChart }
});

const { option } = defineProps<{
  option: object;
}>();
</script>

<template>
  <v-chart class="chart" :autoresize="true" :option="option" />
</template>

<style scoped lang="scss">
.chart {
  width: 100%;
  height: 100%;
}
</style>
