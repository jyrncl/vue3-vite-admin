<script setup lang="ts">
const { title, loading = true } = defineProps<{
  title: string;
  loading: boolean;
}>();

const ItemStyleEnum = ["margin", "width"] as const;
type ItemStyle = {
  "margin-left": string;
  "margin-right": string;
  width: string;
};
const itemStyle = {
  "margin-left": "margin-right: 16px",
  "margin-right": "margin-left: 16px",
  width: "width: 30%"
};
const getItemStyle = (index: number, tag: "left" | "right"): string => {
  const key: keyof ItemStyle = index % 2 === 1 ? ItemStyleEnum[1] : `${ItemStyleEnum[0]}-${tag}`;
  return itemStyle[key];
};
</script>

<template>
  <div class="analysis-item-wrapper">
    <div class="analysis-item-simple">
      <div class="analysis-item-header">
        <span class="title">{{ title }}</span>
        <div class="header-slot">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="analysis-item-content">
        <el-skeleton animated :loading="loading">
          <template #template>
            <div class="analysis-item-skeleton">
              <el-skeleton-item variant="p" style="width: 50%" />
              <div class="item-skeleton" v-for="item in 6" :key="item">
                <el-skeleton-item variant="p" :style="getItemStyle(item, 'left')" />
                <el-skeleton-item variant="p" :style="getItemStyle(item + 1, 'right')" />
              </div>
            </div>
          </template>
          <template #default>
            <slot name="content"></slot>
          </template>
        </el-skeleton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.analysis-item-wrapper {
  width: 100%;
  background-color: #fff;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .analysis-item-simple {
    width: 100%;
    height: 100%;
    .analysis-item-header {
      width: 100%;
      height: 3em;
      padding: 15px;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
    }
    .analysis-item-content {
      width: 100%;
      padding: 15px;
      .analysis-item-skeleton {
        .item-skeleton {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
