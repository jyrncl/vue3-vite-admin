<template>
  <div class="keep-alive-page-wrapper">
    <suspense>
      <template #default>
        <div class="keep-alive-page-wrapper">
          <component :is="component"></component>
        </div>
      </template>
      <template #fallback> Loading... </template>
    </suspense>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "keep-alive-page"
});
const { component } = defineProps(["component"]);
</script>

<style lang="scss" scoped>
.keep-alive-page-wrapper {
  width: 100%;
  height: 100%;
}
</style>
