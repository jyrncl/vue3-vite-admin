import { ref } from "vue";
import type { Ref } from "vue";

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
export function useToggleContextMenu(
  wrapperDom: string,
  contextMenuDom: string,
  isAddClick: Ref<boolean>,
  visibleCb: () => void,
  noneCb: () => void
): [visible: Ref<boolean>, oncontextmenu: () => void, position: Ref<{ x: number; y: number }>, setVisible: () => void] {
  const visible = ref(false);
  const position = ref({ x: 0, y: 0 });
  const setVisible = () => {
    visible.value = true;
    visibleCb();
  };

  const oncontextmenu = () => {
    document.oncontextmenu = e => {
      setVisible();
      setPosition(e.x, e.y);
      return false;
    };
  };

  const setPosition = (x: number, y: number) => {
    setTimeout(() => {
      const boundary = document.getElementsByClassName(wrapperDom)[0].getBoundingClientRect();
      const { width, height } = document.getElementsByClassName(contextMenuDom)[0].getBoundingClientRect();
      if (x >= boundary.right - width) {
        position.value.x = boundary.right - width;
      } else {
        position.value.x = x;
      }

      if (y >= boundary.bottom - height) {
        position.value.y = boundary.bottom - height;
      } else {
        position.value.y = y;
      }
      document.oncontextmenu = () => {
        visible.value = false;
      };
    });
  };

  document.addEventListener("click", () => {
    if (!visible.value) return;
    !isAddClick.value && (visible.value = false);
    document.oncontextmenu = null;
    noneCb();
  });

  return [visible, oncontextmenu, position, setVisible];
}
