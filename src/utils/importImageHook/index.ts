const allImageData = (import.meta as any).globEager("@/assets/images/*/*"); // 加载全部图片数据
console.log("加载图片");
/**
 * @param imageUrl string 文件路径
 * @return 返回图片路径
 */
export const getImageUrl = (imageUrl: string): string => {
  return allImageData[`/src/assets/images${imageUrl}`].default;
};
