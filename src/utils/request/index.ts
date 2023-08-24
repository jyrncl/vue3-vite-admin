import Axios from "axios";
import { ElMessage } from "element-plus";
import { pinia, useUserStore } from "@/store";
import type { AxiosInstance } from "axios";

const instance: AxiosInstance = Axios.create({
  timeout: 30000
});

instance.interceptors.request.use(
  request => {
    request.headers = {
      Authorization: `Bearer ${useUserStore(pinia).token}`,
      ...request.headers
    };
    return request;
  },
  error => {
    ElMessage.error(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    ElMessage.error(error);
  }
);

export default instance;
