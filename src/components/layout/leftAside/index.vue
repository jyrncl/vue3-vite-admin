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
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
    .logo {
      img {
        width: 30px;
      }
    }
  }
}
</style>
