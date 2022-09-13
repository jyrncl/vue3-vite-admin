<template>
  <el-row v-for="row in analysisComponentsList" :gutter="20">
    <el-col :span="row.span" v-for="col in row.col">
      <analysis-item :type="row.type" :title="col.title">
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

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AnalysisItem from "./item.vue";
import AnalysisCount from "./analysis-count/index.vue";
import HeaderTag from "./analysis-count/header-tag.vue";
import { AnalysisComponentsList } from "@/types";
import { getAnalysisComponentsList } from "@/api/analysis";

defineOptions({
  name: "analysis",
  components: { AnalysisCount, HeaderTag }
});

const analysisComponentsList = ref<AnalysisComponentsList>([]);
onMounted(() => {
  getAnalysisComponentsList().then(({ data }) => {
    analysisComponentsList.value = data.data;
  });
});
</script>

<style scoped lang="scss">
.analysis {
  width: 100%;
  height: 100%;
}
</style>
