import { ElLoading } from "element-plus";

// 全局loading
export const useGlobalLoading = () => {
  const loading = (options: { text?: string; background?: string }) => {
    return ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
      ...options
    });
  };
  return { loading };
};
