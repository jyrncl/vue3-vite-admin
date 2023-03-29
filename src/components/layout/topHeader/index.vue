<script setup lang="ts">
import type { MenuRow } from "@/types";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCommonStore, useUserStore } from "@/store";

const commonStore = useCommonStore();
const userStore = useUserStore();
const router = useRouter();

const setBreadcrumbAndTabPage = (item: MenuRow) => {
  if (item.children.length) return;
  commonStore.setTabPageList(item);
};

const userInfoRef = ref();
const handleExit = () => {
  userStore.userExit().then(() => {
    userStore.$reset();
    router.push({ name: "login" });
  });
};
</script>

<template>
  <div class="top-header">
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
        <div class="header-image" ref="userInfoRef">
          <img :src="$getImageUrl('/loginPage/1.png')" alt="" />
          <span class="username">测试</span>
        </div>
      </div>
      <div class="setting">
        <div class="icon">
          <IconItem icon="Setting" />
        </div>
      </div>
    </div>
  </div>
  <el-popover
    ref="popoverRef"
    :virtual-ref="userInfoRef"
    trigger="hover"
    placement="bottom-end"
    popper-class="user-info-list-popper"
    virtual-triggering
  >
    <div class="list-info">
      <icon-item icon="UserFilled" />
      <span class="label">用户信息</span>
    </div>
    <div class="user-exit" @click="handleExit">
      <icon-item icon="SwitchButton" />
      <span class="label">退出登录</span>
    </div>
  </el-popover>
</template>

<style lang="scss" scoped>
.top-header {
  width: 100%;
  height: 100%;
  @include space-between;
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
    width: 180px;
    @include space-between;
    .icon {
      width: 1rem;
      height: 1rem;
      cursor: pointer;
      &:hover {
        color: $default-theme-color;
      }
    }
    .user-info {
      padding: 0 4px;
      .header-image {
        @include flex-center;
        vertical-align: middle;
        cursor: pointer;
        img {
          width: 1.2rem;
          border-radius: 50%;
          border: 1px solid #eee;
          margin-right: 8px;
        }
        .username {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
