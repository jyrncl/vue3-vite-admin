import { ref } from "vue";
import type { Ref } from "vue"

// 切换文件布局
export const useFileLayout = () => {
  const fileLayout = ref("Grid");
  const changeFileLayout = () => {
    fileLayout.value = fileLayout.value === "Grid" ? "List" : "Grid";
  };
  return { fileLayout, changeFileLayout };
};

/* 隐藏或者显示右键菜单

 */
export function useToggleContextMenu(visibleCb: (e: Event) => void, noneCb: () => void): [ visible: Ref<boolean>, oncontextmenu: () => void ] {
  const visible = ref(false)
  const setVisible = (e: Event) => {
    visible.value = true;
    visibleCb(e);
  }

  const oncontextmenu = () => {
    document.oncontextmenu = (e) => {
      setVisible(e);
      return false;
    }
  }

  document.onclick = () => {
    visible.value = false;
    document.oncontextmenu = null;
    noneCb();
  }

  return [visible, oncontextmenu]
}
