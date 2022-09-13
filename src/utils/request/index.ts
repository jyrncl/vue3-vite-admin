import Axios, { AxiosRequestConfig } from "axios";

const client = Axios.create({
  baseURL: "https://www.fastmock.site/mock/03cee3cbf3b2f3cee4b7be54b6496b30/jyrncl",
  timeout: 30000
});

export const request = async (config: AxiosRequestConfig) => {
  const result = await client.request(config);
  return result.data;
};
