export type getImageUrlByModulesType = (moduleName: string, fileName: string) => string;

export interface LocalStoreItem {
  key: string;
  value: any;
}

export type useEChartsOption = (data: Array<any>, props: { label: string; value: string }) => {};
