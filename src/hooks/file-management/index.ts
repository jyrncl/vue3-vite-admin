import { ref, onMounted } from "vue";
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
export function useToggleContextMenu(wrapperDom: string, visibleCb: (e: Event) => void, noneCb: () => void): [visible: Ref<boolean>, oncontextmenu: () => void, position: {x: number, y: number}] {
  const visible = ref(false)
  const position = { x: 0, y: 0 };
  let boundary: DOMRect = <DOMRect>{};
  onMounted(() => {
    boundary = document.getElementsByClassName(wrapperDom)[0].getBoundingClientRect();
  })
  const setVisible = (e: Event) => {
    visible.value = true;
    visibleCb(e);
  }

  const oncontextmenu = () => {
    console.log(111);
    document.oncontextmenu = (e) => {
      setVisible(e);
      setPosition(e.x, e.y);
      return false;
    }
  }

  const setPosition = (x: number, y: number) => {
    if (x + 10 <= boundary.left) {
      position.x = boundary.left + 10;
    } else if (x - 10 >= boundary.left + boundary.width) {
      position.x = boundary.left + boundary.width - 10;
    } else {
      position.x = x;
    }

    if (y + 10 <= boundary.top) {
      position.y = boundary.top + 10;
    } else if (y - 10 >= boundary.top + boundary.height) {
      position.y = boundary.top + boundary.height - 10;
    } else {
      position.y = y;
    }
  }

  document.addEventListener("click", () => {
    if (!visible.value) return;
    visible.value = false;
    document.oncontextmenu = null;
    noneCb();
  })

  return [visible, oncontextmenu, position]
}
