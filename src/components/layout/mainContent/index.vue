<template>
  <div class="mainContent">
    <router-view v-slot="{ Component }">
      <transition :name="`${$prefix}-${transitionName}`" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/store"

const { transitionName } = useCommonStore();
</script>

<style lang="scss" scoped>
.mainContent {
  padding: 10px;
  width: 100%;
  height: 100%;
}
</style>
