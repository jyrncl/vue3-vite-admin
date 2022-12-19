<script setup lang="ts">
import Menu from "@/components/layout/menu/index.vue";
import { useCommonStore } from "@/store";

const commonStore = useCommonStore();
</script>

<template>
  <div class="left-aside" :style="{ width: commonStore.isCollapse ? '65px' : '200px' }">
    <div class="header-title">
      <div class="logo">
        <img :src="$getImageUrl('/loginPage/1.png')" alt="" />
      </div>
      <div class="title" v-show="!commonStore.isCollapse">jyrncl</div>
    </div>
    <div class="menu-list">
      <Menu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-aside {
  height: 100%;
  border-right: 1px solid $default-border-color;
  overflow: hidden;
  transition: all 0.2s;
  .header-title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 20px;
    .logo {
      img {
        width: 30px;
        border-radius: 50%;
      }
    }
    .title {
      margin-left: 15px;
      font-weight: bold;
    }
  }
  .menu-list {
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>
