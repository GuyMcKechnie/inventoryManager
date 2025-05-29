import axiosInstance from "@/api/axios";
import { AxiosResponse } from "axios";
import { Book } from "./book";

export interface ImageObj {
  [x: string]: any;
  imageUUID: string;
  bookId: number;
  data: Uint8Array;
}

export const getImage = async (bookId: number): Promise<ImageObj | null> => {
  try {
    const response: AxiosResponse<ImageObj> = await axiosInstance.get(
      `/images/getImage/${bookId}`,
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
