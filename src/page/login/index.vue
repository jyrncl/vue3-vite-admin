<template>
  <div class="login">
    <div class="login-wapper">
      <div class="login-header">
        <div
          class="login-tab-wapper"
          v-for="(item, index) in tabList"
          :key="`${item.id}_${index}`"
          @click="changeCurTab(item.id)"
        >
          <div class="login-tab">{{ item.label }}</div>
        </div>
        <div
          class="login-tab-bg-wapper"
          :style="{
            transform: `translateX(${curTab === 'login' ? 0 : 300}px)`,
          }"
        >
          <div class="login-tab-bg"></div>
        </div>
      </div>
      <div class="login-content">
        <img :src="$getImageUrlByModules(ImageModules.loginPage, '1.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImageModules } from '@/enum/index'
import { ref, reactive } from "vue";

type tabItem = {
  label: string;
  id: string;
};
const tabList: Array<tabItem> = [
  {
    id: "login",
    label: "登录",
  },
  {
    id: "registered",
    label: "注册",
  },
];
const curTab = ref("login");
const changeCurTab = (tab: string): void => {
  curTab.value = tab;
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/loginPage/loginBg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  .login-wapper {
    display: inline-block;
    width: 600px;
    height: 500px;
    margin: 200px auto 0;
    // border: 1px solid rgba(255, 255, 255, 0.6);
    overflow: hidden;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.35);
    backdrop-filter: saturate(100%) blur(20px);
    .login-header {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: saturate(100%) blur(20px);
      .login-tab-wapper {
        width: 300px;
        height: 100%;
        line-height: 60px;
        font-size: 16px;
        font-weight: 500;
        .login-tab {
          cursor: pointer;
        }
      }
      .login-tab-bg-wapper {
        width: 300px;
        height: 100%;
        position: absolute;
        left: 0;
        margin: auto 0;
        z-index: -1;
        transition: all 0.5s;
        .login-tab-bg{
          width: 286px;
          margin: 7px auto;
          height: 46px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: saturate(100%) blur(20px);
          border: 1px solid #fff;
          border-radius: 6px;
        }
      }
    }
    .login-content{
      img {
        margin-top: 40px;
        border-radius: 10px;
      }
    }
  }
}
</style>
