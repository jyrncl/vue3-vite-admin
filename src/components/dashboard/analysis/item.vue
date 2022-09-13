<template>
  <div class="analysis-item-wrapper">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" v-if="type === 'tabs'">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
    </el-tabs>
    <div class="analysis-item-simple" v-if="type === 'simple'">
      <div class="analysis-item-header">
        <span class="title">{{ title }}</span>
        <div class="header-slot">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="analysis-item-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const { type = "simple", title } = defineProps<{
  type: string;
  title: string;
}>();

const activeName = ref("");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style scoped lang="scss">
.analysis-item-wrapper {
  width: 100%;
  background-color: #fff;
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
    }
  }
}
</style>
