import Axios, { AxiosRequestConfig } from "axios";

const client = Axios.create({
  timeout: 30000
});

export const request = async (config: AxiosRequestConfig) => {
  const result = await client.request(config);
  return result.data;
};
