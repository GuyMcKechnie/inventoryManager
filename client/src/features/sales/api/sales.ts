import axiosInstance, { hasInstance } from "@/api/axios";
import { AxiosResponse } from "axios";
import { Card } from "@caldwell619/react-kanban";

interface Order {
  orderUUID: string;
  buyerId: number;
  status: number;
  date: Date;
  location: String;
}
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
