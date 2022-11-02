<template>
  <div class="mainContent">
    <router-view v-slot="{ Component }">
      <keep-alive-wrapper :is-transition="true" :component="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.mainContent {
  padding: 10px;
  width: 100%;
  height: 100%;
}
</style>
