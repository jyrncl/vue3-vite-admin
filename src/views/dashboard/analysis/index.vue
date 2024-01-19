<script setup lang="ts">
import { onMounted, ref } from "vue";
import AnalysisItem from "./item/index.vue";
import AnalysisCount from "./count/index.vue";
import HeaderTag from "./count/header-tag.vue";
import TrafficLineChart from "./charts/traffic-line.vue";
import ConversionRateRadarChart from "./charts/conversion-rate-radar.vue";
import { AnalysisComponentsList } from "@/types";
import { getAnalysisComponentsList } from "@/api/analysis";
import { dealResponseNull } from "@/utils/common";

defineOptions({
  name: "analysis",
  components: { AnalysisCount, HeaderTag, TrafficLineChart, ConversionRateRadarChart }
});

const loading = ref(true);

const analysisComponentsList = ref<AnalysisComponentsList>([]);
onMounted(() => {
  getAnalysisComponentsList()
    .then(({ data }) => {
      analysisComponentsList.value = dealResponseNull(data.data, []);
    })
    .finally(() => {
      setTimeout(() => {
        loading.value = false;
      }, 1000);
    });
});
</script>

<template>
  <div class="analysis-row" v-for="row in analysisComponentsList" :key="row.id">
    <div :class="['analysis-col', { 'analysis-col-single': row.col.length === 1 }]" v-for="(col, index) in row.col" :key="index">
      <analysis-item :title="col.title" :loading="loading">
        <template v-slot:header>
          <component v-if="col.headerComponent" :is="col.headerComponent" v-bind="{ ...col.headerProps }"></component>
        </template>
        <template v-slot:content>
          <component v-if="col.contentComponent" :is="col.contentComponent" v-bind="{ ...col.contentProps }"></component>
        </template>
      </analysis-item>
    </div>
  </div>
</template>

<style scoped lang="scss">
.analysis-row {
  margin-bottom: 20px;
  display: flex;
  column-gap: 20px;
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 10px;
  }
  .analysis-col {
    flex: 1;
  }
  .analysis-col-single {
    width: 100%;
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
