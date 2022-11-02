<template>
  <div class="mainContent" :data-type="route.meta['keepAlive']">
    <template v-if="route.meta['keepAlive']">
      <router-view v-slot="{ Component }">
        <transition :name="`${$prefix}-${commonStore.transitionName}`">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </template>
    <template v-else>
      <router-view v-slot="{ Component }">
        <transition :name="`${$prefix}-${commonStore.transitionName}`">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCommonStore } from "@/store";
const commonStore = useCommonStore();
const route = useRoute();
</script>

<style lang="scss" scoped>
.mainContent {
  padding: 10px;
  width: 100%;
  height: 100%;
}
</style>
