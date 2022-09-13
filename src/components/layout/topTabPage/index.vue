<template>
  <div class="topTabPage">
    <el-tag
      v-for="item in commonStore.tabPageList"
      :key="item.id"
      class="tab-item"
      :effect="`${item.path === route.path ? 'dark' : 'light'}`"
      :closable="item.path !== $indexPage"
      :disable-transitions="false"
      @click="handleClick(item)"
      @close="handleClose(item)"
    >
      {{ item.name }}
    </el-tag>
  </div>
</template>

<script setup lang="ts">
import type { MenuRow, TabPageRow } from "@/types";
import { watch, onBeforeUnmount, ref, getCurrentInstance, ComponentInternalInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCommonStore } from "@/store";
import { getPathList, getThisData } from "@/utils/common";

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const router = useRouter();
const route = useRoute();

const commonStore = useCommonStore();
const handleClose = (tabPageRow: TabPageRow) => {
  commonStore.closeTabPage(tabPageRow).then(({ curPath, nextPath }) => {
    route.path === curPath && router.push({ path: nextPath });
  });
};

const isFirstRender = ref(true);

const setBreadcrumbAndTabPage = () => {
  const pathList = route.matched.map(item => item.path);
  getPathList(pathList, commonStore.menuTree).then(result => {
    if (isFirstRender.value && !commonStore.tabPageList.length) {
      const result: Array<MenuRow> = [];
      getThisData(commonStore.menuTree, proxy?.$indexPage || "", result);
      const { id, path, name } = result[0];
      commonStore.setTabPageList({ id, path, name });
      isFirstRender.value = false;
    }
    commonStore.setBreadcrumbList(result as Array<MenuRow>);
  });
};

const unwatch = watch(
  () => route.matched,
  () => {
    setBreadcrumbAndTabPage();
  },
  {
    immediate: true
  }
);

onBeforeUnmount(() => {
  unwatch();
});

const handleClick = (tabPageRow: TabPageRow) => {
  router.push({ path: tabPageRow.path });
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
