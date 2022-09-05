<template>
  <div class="home-wrapper" v-if="!loading" v-loading="loading" element-loading-background="rgba(0, 0, 0, 1)" element-loading-text="Loading...">
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
import { getMenuList } from "@/api/user";
import { useCommonStore } from "@/store";
import { onBeforeMount, ref } from "vue";
import LeftAside from '@/components/layout/leftAside/index.vue'
import TopHeader from '@/components/layout/topHeader/index.vue'
import TopTabPage from '@/components/layout/topTabPage/index.vue'
import MainContent from '@/components/layout/mainContent/index.vue'

defineOptions({
  name: "home-page"
})

const loading = ref(true)
const commonStore = useCommonStore();

onBeforeMount(() => {
  getMenuList().then(({ data }) => {
    commonStore.setMenuTree(data.menuList);
    loading.value = false;
  });
})
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
    &-main {
      width: 100%;
      height: calc(100% - 87px);
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #eee;
    }
  }
}
</style>
