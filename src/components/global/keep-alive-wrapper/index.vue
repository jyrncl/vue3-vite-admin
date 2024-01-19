<script setup lang="ts">
defineOptions({ name: "keep-alive-wrapper" });
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <router-view v-slot="{ Component }" v-if="route.meta['keepAlive']">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <router-view v-else />
</template>

<style lang="scss" scoped></style>
