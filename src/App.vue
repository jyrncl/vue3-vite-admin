<template>
    <div id="app">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="router.meta['isKeepAlive']"></component>
        </keep-alive>
        <component :is="Component" v-if="!router.meta['isKeepAlive']"></component>
      </router-view>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const router = useRoute()
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
}
</style>
