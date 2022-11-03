<template>
  <router-view v-slot="{ Component }" v-if="route.meta['keepAlive']">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <router-view v-else/>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

defineOptions({
  name: "keep-alive-wrapper"
});
const route = useRoute();
</script>

<style lang="scss" scoped></style>
