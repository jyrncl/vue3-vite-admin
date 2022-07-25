<template>
  <div class="topTabPage">
    <el-tag
      v-for="item in commonStore.tabPageList"
      :key="item.id"
      class="mx-1"
      closable
      :disable-transitions="false"
      @click="handleClick(item)"
      @close="handleClose(item)"
    >
      {{ item.name }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import type { TabPageRow } from "@/types";
import { useRouter } from "vue-router";
import { useCommonStore } from "@/store";

const commonStore = useCommonStore();

const handleClose = (tabPageRow: TabPageRow) => {
  commonStore.closeTabPage(tabPageRow);
};

const router = useRouter();

const handleClick = (tabPageRow: TabPageRow) => {
  router.push({ path: tabPageRow.path })
};
</script>

<style lang="scss" scoped>
.topTabPage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
