const allImageData = (import.meta as { glob: any }).glob("@/assets/images/*/*", { eager: true }); // 加载全部图片数据
/**
 * @param imageUrl string 文件路径
 * @return 返回图片路径
 */

export const getImageUrl = (imageUrl: string): string => {
  return allImageData[`/src/assets/images${imageUrl}`].default;
};
