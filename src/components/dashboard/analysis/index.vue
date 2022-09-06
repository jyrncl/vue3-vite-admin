<template>
  <analysis-item></analysis-item>
</template>

<script setup lang="ts">
import AnalysisItem from "./item.vue"
import { reactive } from "vue";
defineOptions({
  name: "analysis"
});
const analysisItemList = reactive([{
  name: "",
}])
</script>

<style scoped lang="scss">
.analysis {
  width: 100%;
  height: 100%;
}
</style>
