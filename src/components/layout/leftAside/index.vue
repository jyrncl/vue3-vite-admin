<template>
  <div class="leftAside">
    <div class="header-title">
      <div class="logo">
        <img :src="$getImageUrlByModules(ImageModules.loginPage, '1.png')" alt="" />
      </div>
      <div class="title">jyrncl</div>
    </div>
    <div class="menu-list">
      <Menu />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/layout/menu/index.vue";
import { ImageModules } from "@/enum";
</script>

<style lang="scss" scoped>
.leftAside {
  width: 100%;
  height: 100%;
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
