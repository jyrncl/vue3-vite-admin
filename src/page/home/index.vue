<template>
  <div class="home-wrapper">
    <div class="home-left">
      <LeftAside/>
    </div>
    <div class="home-content">
      <div class="home-content-header">
        <TopHeader/>
      </div>
      <div class="home-content-tab-page">
        <TopTabPage/>
      </div>
      <div class="home-content-main">
        <MainContent/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftAside from '@/components/layout/leftAside/index.vue'
import TopHeader from '@/components/layout/topHeader/index.vue'
import TopTabPage from '@/components/layout/topTabPage/index.vue'
import MainContent from '@/components/layout/mainContent/index.vue'
</script>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  .home-left {
    height: 100%;
  }
  .home-content {
    flex: auto;
    height: 100%;
    &-header {
      padding: 10px 15px;
      border: 1px solid $default-border-color;
      border-top: none;
      border-left: none;
    }
    &-tab-page {
      padding: 10px 15px;
    }
  }
}
</style>
