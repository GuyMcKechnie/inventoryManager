import axios from "axios";

interface AxiosConfig {
  baseURL: string;
  timeout: number;
  headers: {
    "Content-Type": string;
  };
}

const axiosConfig: AxiosConfig = {
  baseURL: "http://localhost:8080/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosConfig);

export function hasInstance() {
  return axiosInstance !== undefined && axiosInstance !== null;
}

export default axiosInstance;
