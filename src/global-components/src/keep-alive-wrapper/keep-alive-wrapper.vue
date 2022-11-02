<template>
  <transition-wrapper :isTransition="isTransition">
    <template v-if="route.meta['keepAlive']">
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </template>
    <template v-else>
      <component :is="component"></component>
    </template>
  </transition-wrapper>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

defineOptions({
  name: "keep-alive-wrapper"
});
withDefaults(
  defineProps<{
    isTransition: boolean;
    component: any;
  }>(),
  {
    isTransition: true
  }
);
const route = useRoute();
</script>

<style lang="scss" scoped></style>
