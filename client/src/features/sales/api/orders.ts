import axiosInstance from "@/api/axios";
import { AxiosResponse } from "axios";

export interface Order {
  orderUUID: string;
  buyerId: number;
  status: number;
  date: Date;
  location: string;
}

export const getAllOrders = async (): Promise<Order[] | undefined> => {
  try {
    const response: AxiosResponse<Order[]> = await axiosInstance.get(
      "/orders/getAllOrders",
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getActiveOrders = async (): Promise<Order[] | undefined> => {
  try {
    const response: AxiosResponse<Order[]> = await axiosInstance.get(
      "/orders/getActiveOrders",
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateOrderStatus = async (
  orderUUID: string,
  _status: number | undefined,
) => {
  try {
    if (_status == undefined) {
      console.log(`Status is undefined.`);
      throw null;
    }
    console.info(`Updating order (${orderUUID}) status...`);
    const response: AxiosResponse<Response> = await axiosInstance.put(
      `/orders/updateOrderStatus/${orderUUID}`,
      _status,
    );
    console.log(`Order (${orderUUID}) updated successfully.`);
    return response.status;
  } catch (error) {
    throw error;
  }
};
