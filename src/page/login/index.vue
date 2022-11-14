<script setup lang="ts">
import LoginContent from "./loginContent/index.vue";
import RegisteredContent from "./registeredContent/index.vue";
import { ref } from "vue";

const tabList: Array<{
  label: string;
  id: string;
}> = [
  {
    id: "login",
    label: "登录"
  },
  {
    id: "registered",
    label: "注册"
  }
];
const curTab = ref("login");
const changeCurTab = (tab: string): void => {
  curTab.value = tab;
};

</script>

<template>
  <div class="login">
    <div class="login-wrapper">
      <div class="login-header">
        <div
          class="login-tab-wrapper"
          v-for="(item, index) in tabList"
          :key="`${item.id}_${index}`"
          @click="changeCurTab(item.id)"
        >
          <div class="login-tab">{{ item.label }}</div>
        </div>
        <div
          class="login-tab-bg-wrapper"
          :style="{
            transform: `translateX(${curTab === 'login' ? 0 : 300}px)`
          }"
        >
          <div class="login-tab-bg"></div>
        </div>
      </div>
      <div class="login-content">
        <LoginContent
          :style="{
            transform: `rotate3d(0, -1, 0, ${curTab === 'login' ? 0 : -90}deg)`,
            opacity: `${curTab === 'login' ? 1 : 0.1}`
          }"
        />
        <RegisteredContent
          @changeTag="changeCurTab"
          :style="{
            transform: `rotate3d(0, -1, 0, ${curTab === 'registered' ? 0 : 90}deg) scale(${
              curTab === 'registered' ? 1 : 0.5
            })`
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/loginPage/loginBg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  @include flex-center;

  .login-wrapper {
    display: inline-block;
    width: 600px;
    height: 450px;
    overflow: hidden;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.35);
    backdrop-filter: saturate(100%) blur(20px);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    perspective: 500px;

    .login-header {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: saturate(100%) blur(20px);

      .login-tab-wrapper {
        width: 300px;
        height: 100%;
        line-height: 60px;
        font-size: 16px;
        font-weight: 500;

        .login-tab {
          font-size: 17px;
          cursor: pointer;
        }
      }

      .login-tab-bg-wrapper {
        width: 300px;
        height: 100%;
        position: absolute;
        left: 0;
        margin: auto 0;
        z-index: -1;
        transition: all 0.5s;

        .login-tab-bg {
          width: 286px;
          margin: 7px auto;
          height: 46px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: saturate(100%) blur(20px);
          border: 1px solid #fff;
          border-radius: 6px;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
      }
    }

    .login-content {
      transform-style: preserve-3d;
      width: 100%;
      position: relative;
    }
  }
}
</style>
