import axiosInstance, { hasInstance } from "@/api/axios";
import { AxiosResponse } from "axios";

export interface User {
  userUUID: string;
  fullName: string;
  firstName: string;
  lastName: string;
  type: number;
  email: string;
  cellphone: string;
  allowsMarketing: boolean;
}

export const getAllUsers = async (): Promise<User[] | undefined> => {
  try {
    if (hasInstance()) {
      const response: AxiosResponse<User[]> =
        await axiosInstance.get("/users/getAllUsers");
      return response.data.map((user) => ({
        ...user,
        fullName: `${user.firstName} ${user.lastName}`,
      }));
    }
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId: string): Promise<User | null> => {
  try {
    const response: AxiosResponse<User> = await axiosInstance.get(
      `/users/getUser/${userId}`,
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const addUser = async (
  user: User,
): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      `/users/addUser/`,
      user,
    );
    return response;
  } catch (error) {
    return undefined;
  }
};

export const editUser = async (
  user: User,
  userId: string,
): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axiosInstance.put(
      `/users/editUser/${userId}`,
      user,
    );
    return response;
  } catch (error) {
    return undefined;
  }
};

export const deleteUser = async (
  userId: string,
): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axiosInstance.delete(
      `/users/deleteUser/${userId}`,
    );
    return response;
  } catch (error) {
    return undefined;
  }
};

export const duplicateUser = async (
  userId: string,
): Promise<AxiosResponse | undefined> => {
  try {
    const response = await axiosInstance.post(`/users/duplicateUser/${userId}`);
    return response;
  } catch (error) {}
};
