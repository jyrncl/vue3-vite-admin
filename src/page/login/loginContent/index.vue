<template>
  <div class="loginContent">
    <div class="loginContent-headerImg">
      <img
        :src="$getImageUrlByModules(ImageModules.loginPage, '1.png')"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImageModules } from "@/enum";
import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
.loginContent {}
</style>
