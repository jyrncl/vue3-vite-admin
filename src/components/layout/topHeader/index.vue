<template>
  <div class="topHeader">
    <div class="left-link">
      <div class="collapse" @click="commonStore.changeCollapse">
        <IconItem :icon="commonStore.isCollapse ? 'Expand' : 'Fold'" />
      </div>
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            @click="setBreadcrumbAndTabPage(item)"
            :to="{ path: item.path }"
            v-for="item in commonStore.breadcrumbList"
            :key="item.id"
            >{{ item.name }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div class="right-user">
      <div class="search">
        <div class="icon">
          <IconItem icon="Search" />
        </div>
      </div>
      <div class="message">
        <div class="icon">
          <IconItem icon="ChatDotRound" />
        </div>
      </div>
      <div class="fullscreen">
        <div class="icon">
          <IconItem icon="FullScreen" />
        </div>
      </div>
      <div class="change-language">
        <div class="icon">
          <IconItem icon="Search" />
        </div>
      </div>
      <div class="user-info">
        <div class="icon">
          <img :src="$getImageUrlByModules(ImageModules.loginPage, '1.png')" alt="" />
        </div>
      </div>
      <div class="setting">
        <div class="icon">
          <IconItem icon="Setting" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImageModules } from "@/enum";
import type { MenuRow } from "@/types";
import { useCommonStore } from "@/store";

const commonStore = useCommonStore();

const setBreadcrumbAndTabPage = (item: MenuRow) => {
  if (item.children.length) return;
  commonStore.setTabPageList(item);
};
</script>

<style lang="scss" scoped>
.topHeader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-link {
    display: flex;
    align-items: center;
    .collapse {
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-right: 8px;
    }
  }
  .right-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    .icon {
      cursor: pointer;
    }
    .user-info {
      .icon {
        img {
          width: 18px;
          border-radius: 50%;
          border: 1px solid #eee;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.8);
          }
        }
      }
    }
  }
}
</style>
