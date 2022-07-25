<template>
  <div class="topTabPage">
    <el-tag
        v-for="item in commonStore.tabPageList"
        :key="item.id"
        class="mx-1"
        closable
        :disable-transitions="false"
        @close="handleClose(item)"
    >
      {{ item.name }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import type { TabPageRow } from "@/types";
import { useCommonStore } from "@/store"

const commonStore = useCommonStore();

const handleClose = (tabPageRow: TabPageRow) => {
  commonStore.setTabPageList(tabPageRow);
}

</script>

<style lang="scss" scoped>
.topTabPage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
