<template>
  <div class="mainContent">
    <transition :name="`${$prefix}-${commonStore.transitionName}`" mode="out-in">
      <keep-alive-wrapper/>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/store";
const commonStore = useCommonStore();

</script>

<style lang="scss" scoped>
.mainContent {
  padding: 10px;
  width: 100%;
  height: 100%;
}
</style>
