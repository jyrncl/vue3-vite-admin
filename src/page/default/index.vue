<template>
  <router-view v-slot="{ Component }">
    <keep-alive-wrapper :is-transition="true" :component="Component" />
  </router-view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
