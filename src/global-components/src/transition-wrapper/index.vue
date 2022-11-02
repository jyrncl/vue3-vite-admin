<template>
  <template v-if="isTransition">
    <transition :name="`${$prefix}-${transitionName}`" mode="out-in">
      <slot></slot>
    </transition>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/store";

defineOptions({
  name: "transition-wrapper"
});
withDefaults(
  defineProps<{
    isTransition: boolean;
  }>(),
  {
    isTransition: true
  }
);

const { transitionName } = storeToRefs(useCommonStore());
</script>

<style scoped lang="scss"></style>
