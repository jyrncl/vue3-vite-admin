<script setup lang="ts">
import LeftAside from "@/views/home/leftAside/index.vue";
import TopHeader from "@/views/home/topHeader/index.vue";
import TopTabPage from "@/views/home/topTabPage/index.vue";
import MainContent from "@/views/home/mainContent/index.vue";

defineOptions({ name: "home-page" });
</script>

<template>
  <div class="home-wrapper">
    <div class="home-left">
      <LeftAside />
    </div>
    <div class="home-content">
      <div class="home-content-header">
        <TopHeader />
      </div>
      <div class="home-content-tab-page">
        <TopTabPage />
      </div>
      <div class="home-content-main">
        <MainContent />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  .home-left {
    height: 100%;
  }
  .home-content {
    flex: auto;
    height: 100%;
    overflow: hidden;
    &-header {
      padding: 10px 15px;
      border: 1px solid $default-border-color;
      border-top: none;
      border-left: none;
    }
    &-tab-page {
      padding: 10px 15px;
      border-bottom: 1px solid #e5e7eb;
    }
    &-main {
      width: 100%;
      height: calc(100% - 85px);
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #e5e7eb;
    }
  }
}
</style>
