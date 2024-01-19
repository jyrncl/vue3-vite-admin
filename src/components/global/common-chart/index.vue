<script setup lang="ts">
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { GraphChart, TreeChart, BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import type { ECBasicOption } from "echarts/types/dist/shared";
import { ref, onMounted, onBeforeUnmount } from "vue";

use([GridComponent, TooltipComponent, GraphChart, TreeChart, CanvasRenderer, BarChart]);

defineOptions({ name: "common-chart" });
const props = withDefaults(
  defineProps<{
    options: ECBasicOption;
    isDispatchAction?: boolean;
    animationConfig?: {
      interval: number;
      optionsLen: number;
      seriesIndex: number | number[];
    };
  }>(),
  {
    options: () => ({}),
    isDispatchAction: false, // 是否自动时间间隔显示高亮
    animationConfig: () => ({
      interval: 5000, // 时间间隔
      optionsLen: 5, // dataIndex 的总长度
      seriesIndex: 1
    })
  }
);

const emits = defineEmits<{
  (event: "mousemove", params: any): void;
  (event: "globalout"): void;
}>();

const vChartRef = ref<InstanceType<typeof VChart> | null>(null);

const timer = ref<undefined | NodeJS.Timeout>(undefined);
const currentIndex = ref(0);

const dispatchActionTask = () => {
  vChartRef.value?.dispatchAction({
    type: "downplay",
    seriesIndex: props.animationConfig.seriesIndex,
    dataIndex: currentIndex.value
  });
  vChartRef.value?.dispatchAction({
    type: "hideTip"
  });
  setTimeout(() => {
    currentIndex.value = currentIndex.value >= props.animationConfig.optionsLen - 1 ? 0 : currentIndex.value + 1;
    vChartRef.value?.dispatchAction({
      type: "highlight",
      seriesIndex: props.animationConfig.seriesIndex,
      dataIndex: currentIndex.value
    });
    vChartRef.value?.dispatchAction({
      type: "showTip",
      seriesIndex: props.animationConfig.seriesIndex,
      dataIndex: currentIndex.value
    });
  }, 700);
};

const startDispatchAction = () => {
  if (props.isDispatchAction) {
    dispatchActionTask();
    timer.value = setInterval(() => {
      dispatchActionTask();
    }, props.animationConfig.interval);
  }
};

const endDispatchAction = () => {
  clearInterval(timer.value);
  vChartRef.value?.dispatchAction({
    type: "downplay",
    seriesIndex: props.animationConfig.seriesIndex,
    dataIndex: currentIndex.value
  });
  vChartRef.value?.dispatchAction({
    type: "hideTip"
  });
};

let mousemoveTimer: NodeJS.Timeout | undefined = undefined;
const handleMousemove = (params: any) => {
  clearTimeout(mousemoveTimer);
  mousemoveTimer = setTimeout(() => {
    if (
      typeof props.animationConfig.seriesIndex === "number"
        ? params.seriesIndex === props.animationConfig.seriesIndex
        : props.animationConfig.seriesIndex.includes(params.seriesIndex)
    ) {
      clearInterval(timer.value);
    }
    emits("mousemove", params);
  }, 300);
};

let globaloutTimer: NodeJS.Timeout | undefined = undefined;
const handleGlobalOut = () => {
  clearTimeout(globaloutTimer);
  globaloutTimer = setTimeout(() => {
    endDispatchAction();
    startDispatchAction();
    emits("globalout");
  }, 300);
};

onMounted(() => {
  setTimeout(() => {
    startDispatchAction();
  }, 2000);
});

onBeforeUnmount(() => {
  endDispatchAction();
});

defineExpose({ vChartRef });
</script>

<template>
  <VChart ref="vChartRef" @mousemove="handleMousemove" @globalout="handleGlobalOut" :option="options" autoresize />
</template>

<style scoped lang="scss"></style>
