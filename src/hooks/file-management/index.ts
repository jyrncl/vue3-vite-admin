import { ref } from "vue";

// 切换文件布局
export const useFileLayout = () => {
  const fileLayout = ref("Grid");
  const changeFileLayout = () => {
    fileLayout.value = fileLayout.value === "Grid" ? "List" : "Grid";
  };
  return { fileLayout, changeFileLayout };
};

//
