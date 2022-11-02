<template>
  <div
    id="app"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 1)"
    element-loading-text="Loading..."
  >
    <router-view v-slot="{ Component }">
      <keep-alive-wrapper :component="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
