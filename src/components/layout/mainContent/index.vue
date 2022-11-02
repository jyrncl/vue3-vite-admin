<template>
  <div class="mainContent">
    <router-view v-slot="{ Component }">
      <template v-if="route.meta['keepAlive']">
        <keep-alive>
          <transition :name="`${$prefix}-${commonStore.transitionName}`">
            <component :is="Component"/>
          </transition>
        </keep-alive>
      </template>
      <template v-else>
        <transition :name="`${$prefix}-${commonStore.transitionName}`">
          <component :is="Component"/>
        </transition>
      </template>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useCommonStore } from "@/store"
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
