import axiosInstance from "@/api/axios";
import { AxiosResponse } from "axios";

export interface TrafficData {
  month: string;
  visits: number;
}

export const getSiteTraffic = async (): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse<TrafficData[]> =
      await axiosInstance.get("/reports/traffic");
    return response;
  } catch (error) {
    throw error;
  }
};
