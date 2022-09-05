<template>
  <div class="mainContent">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.mainContent {
  padding: 10px;
  width: 100%;
  height: 100%;
}
</style>
