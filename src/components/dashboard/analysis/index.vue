<template>
  <div class="analysis" v-for="item in 1000" :key="item">测试一下啊</div>
</template>

<script setup lang="ts">
defineOptions({
  name: "analysis"
});
</script>

<style scoped lang="scss">
.analysis {
  width: 100%;
  height: 100%;
}
</style>
