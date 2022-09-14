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
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { title } = defineProps<{
  title: string;
}>();

</script>

<style scoped lang="scss">
.analysis-item-wrapper {
  width: 100%;
  background-color: #fff;
  transition: all 0.3s;
  cursor: pointer;
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
    }
  }
}
</style>
