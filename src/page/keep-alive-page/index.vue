<template>
  <component :is="component"></component>
<!--  <suspense>-->
<!--    <template #default>-->
<!--      <component :is="propsData.component"></component>-->
<!--    </template>-->
<!--    <template #fallback> Loading... </template>-->
<!--  </suspense>-->
</template>

<script setup lang="ts">
defineOptions({
  name: "keep-alive-page"
})
const { component } = defineProps(["component"])
</script>

<style lang="scss" scoped></style>
