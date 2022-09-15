<template>
  <div
    id="app"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 1)"
    element-loading-text="Loading..."
  >
    <router-view v-slot="{ Component }">
      <transition :name="`${$prefix}-${transitionName}`" mode="out-in">
        <keep-alive>
          <KeepAlivePage :component="Component" v-if="route.meta['isKeepAlive']" />
        </keep-alive>
      </transition>
      <transition :name="`${$prefix}-${transitionName}`" mode="out-in">
        <KeepAlivePage :component="Component" v-if="!route.meta['isKeepAlive']" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import KeepAlivePage from "@/page/keep-alive-page/index.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCommonStore } from "@/store"

const route = useRoute();
const loading = ref(true);
const { transitionName } = useCommonStore();

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
