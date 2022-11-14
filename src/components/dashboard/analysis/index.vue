<script setup lang="ts">
import { onMounted, ref } from "vue";
import AnalysisItem from "./item.vue";
import AnalysisCount from "./analysis-count/index.vue";
import HeaderTag from "./analysis-count/header-tag.vue";
import TrafficLineChart from "./analysis-charts/traffic-line.vue";
import ConversionRateRadarChart from "./analysis-charts/conversion-rate-radar.vue";
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
  <el-row v-for="row in analysisComponentsList" :gutter="20" :key="row.id">
    <el-col :span="row.span" v-for="col in row.col">
      <analysis-item :title="col.title" :loading="loading">
        <template v-slot:header>
          <component
            v-if="col.headerComponent"
            :is="col.headerComponent"
            v-bind="{ ...col.headerProps }"
          ></component>
        </template>
        <template v-slot:content>
          <component
            v-if="col.contentComponent"
            :is="col.contentComponent"
            v-bind="{ ...col.contentProps }"
          ></component>
        </template>
      </analysis-item>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 10px;
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
