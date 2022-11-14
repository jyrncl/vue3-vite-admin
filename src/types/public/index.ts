import type { AxiosPromise } from "axios";
export type GetImageUrlType = (imageUrl: string) => string;

export interface LocalStoreItem {
  key: string;
  value: any;
}

export type UseEChartsOption = (data: Array<any>, props: { label: string; value: string }) => {};

export type ResponseResultType<T = any> = AxiosPromise<{ code: number; data: T | null }>;
