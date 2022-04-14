<template>
  <div class="login">
    div.
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { setThisModulesInfo, getImageUrlByModules } from '../../utils/importImageHook/index'
const loginPageData = (import.meta as any).globEager('../../assets/images/loginPage/*')
setThisModulesInfo([['loginPage', loginPageData]])
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/images/loginPage/loginBg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
</style>