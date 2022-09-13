<template>
  <div class="analysis-count">
    <div class="analysis-count-value">
      <div class="value">{{ value }}</div>
      <el-icon :size="size" :color="color">
        <icon-item :icon="icon"></icon-item>
      </el-icon>
    </div>
    <div class="analysis-count-all">
      <div class="all-label">{{ label }}</div>
      <div class="all-value">{{ all }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { label, value, all, color, size = 20, icon } = defineProps<{
  label: string;
  color: string;
  size: number;
  icon: string;
  value: string | number;
  all: string | number;
}>();
</script>

<style scoped lang="scss">
.analysis-count {
  padding: 10px;
  .analysis-count-value,
  .analysis-count-all {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .analysis-count-value {
    .value {
      font-size: 18px;
    }
  }
  .analysis-count-all {
    margin-top: 25px;
    .all-value {
      font-size: 12px;
    }
  }
}
</style>
