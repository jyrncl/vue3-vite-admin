<template>
  <el-container class="home-wrapper">
    <el-col :span="3">
      <LeftAside/>
    </el-col>
    <el-col :span="21">
      <el-container>
        <el-header>
          <TopHeader/>
        </el-header>
        <el-header>
          <TopTabPage/>
        </el-header>
        <el-main>
          <MainContent/>
        </el-main>
      </el-container>
    </el-col>
  </el-container>
</template>

<script setup lang="ts">
import LeftAside from '@/components/layout/leftAside/index.vue'
import TopHeader from '@/components/layout/topHeader/index.vue'
import TopTabPage from '@/components/layout/topTabPage/index.vue'
import MainContent from '@/components/layout/mainContent/index.vue'
</script>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  height: 100%;
}
</style>