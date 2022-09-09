const imageModules: Map<string, any> = new Map(); // 初始化数据
const loginPageData = (import.meta as any).globEager('../../assets/images/loginPage/*'); // 分模块引入图片


/**
 * @param modulesArray Array 传递由[moduleName: string(模块名称), data: any(模块数据)]
 */
const setThisModulesInfo = (
    modulesArray: Array<[string, any]>,
): void => {
  // 将传入的数据放入Map对象中
  modulesArray.forEach((ele): void => {
    imageModules.set(ele[0], ele[1]);
  });
};

// 将数据放在map对象中
setThisModulesInfo([['loginPage', loginPageData]]);


/**
 * @param moduleName string 模块名称
 * @param fileName string 文件名称
 * @return 返回图片路径
 */
export const getImageUrlByModules = (
    moduleName: string,
    fileName: string,
): string => {
  const path = `../../assets/images/${moduleName}/${fileName}`;
  return imageModules.get(moduleName)[path].default;
};
