<script setup lang="ts">
defineOptions({
  name: "file-item-wrapper"
});
</script>

<template>
  <div class="file-item-wrapper">
    <div class="file-item-item-main">
      <div class="file-image">
        <img :src="$getImageUrl('/file-management/folder.png')" alt="" />
      </div>
      <div class="file-info">
        <div class="info-name"></div>
        <div class="info-time"></div>
      </div>
    </div>
    <div class="file-item-item-operate"></div>
  </div>
</template>

<style scoped lang="scss">
</style>