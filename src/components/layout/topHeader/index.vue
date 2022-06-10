<template>
  <div class="topHeader">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.topHeader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>