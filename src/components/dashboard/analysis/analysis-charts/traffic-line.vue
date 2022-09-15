<template>
  <EChartsComponents :option="echartOption" class="e-charts-wrapper" />
</template>

<script setup lang="ts">
import { getTrafficLineList } from "@/api/echarts"
import { onMounted, ref } from "vue";
import EChartsComponents from "@/components/echartsComponents/index.vue"
import { useTrafficLineOptions } from "@/components/echartsComponents/hooks/line"

const echartOption = ref({});
onMounted(() => {
  getTrafficLineList().then((data) => {
    if (data.data instanceof Array) {
      echartOption.value = useTrafficLineOptions(data.data, { label: "time", value: "value" });
    }
  })
})

</script>

<style scoped lang="scss">
.e-charts-wrapper {
  width: 100%;
  height: 200px;
}
</style>
