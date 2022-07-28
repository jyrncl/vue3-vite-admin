<template>
  <div class="topTabPage">
    <el-tag
      v-for="item in commonStore.tabPageList"
      :key="item.id"
      class="tab-item"
      :effect="`${item.path === route.path ? 'dark' : 'light'}`"
      :closable="Number(item.id) !== 11"
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
import { watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCommonStore } from "@/store";
import { getPathList } from "@/utils/common";

const router = useRouter();
const route = useRoute();

const commonStore = useCommonStore();
const handleClose = (tabPageRow: TabPageRow) => {
  commonStore.closeTabPage(tabPageRow).then((tabPageRow) => {
    router.push({ path: tabPageRow?.path || '' })
  });
};

watch(() => route.matched, () => {
  setBreadcrumbAndTabPage();
});

const setBreadcrumbAndTabPage = () => {
  const pathList = route.matched.map((item) => item.path)
  getPathList(pathList, commonStore.menuTree).then((result) => {
    commonStore.setBreadcrumbList(result);
  })
}

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
  .tab-item {
    margin-right: 8px;
    cursor: pointer;
  }
}
</style>
