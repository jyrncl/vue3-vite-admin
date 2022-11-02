<template>
  <transition :name="`${$prefix}-${transitionName}`" mode="out-in">
    <template v-if="route.meta['keepAlive']">
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </template>
    <template v-else>
      <component :is="component"></component>
    </template>
  </transition>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/store";

defineOptions({
  name: "keep-alive-wrapper"
});
withDefaults(
  defineProps<{
    component: any;
  }>(),
  {}
);
const route = useRoute();
const { transitionName } = storeToRefs(useCommonStore());
</script>

<style lang="scss" scoped></style>
