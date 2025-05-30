import axiosInstance, { hasInstance } from "@/api/axios";
import { AxiosResponse } from "axios";

export interface Book {
  isbn: string;
  imageId: number;
  title: string;
  grade: number;
  newPrice: number;
  usedPrice: number;
  costPrice: number;
}

export const getAllBooks = async (): Promise<Book[] | undefined> => {
  try {
    if (hasInstance()) {
      console.log("Fetching books from the server...");
      const response: AxiosResponse<Book[]> =
        await axiosInstance.get("/books/getAllBooks");
      console.log("Books fetched successfully:", response.data);
      response.data.forEach((book) => {
        book.newPrice = +book.newPrice.toFixed(2);
        book.usedPrice = +book.usedPrice.toFixed(2);
        book.costPrice = +book.costPrice.toFixed(2);
      });
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getBook = async (isbn: string): Promise<Book | null> => {
  try {
    const response: AxiosResponse<Book> = await axiosInstance.get(
      `/books/getBook/${isbn}`,
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const addBook = async (
  book: Book,
): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axiosInstance.post(
      `/books/addBook/`,
      book,
    );
    return response;
  } catch (error) {
    return undefined;
  }
};

export const editBook = async (
  book: Book,
  isbn: string,
): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axiosInstance.put(
      `/books/editBook/${isbn}`,
      book,
    );
    return response;
  } catch (error) {
    return undefined;
  }
};

export const deleteBook = async (
  isbn: string,
): Promise<AxiosResponse | undefined> => {
  try {
    const response: AxiosResponse = await axiosInstance.delete(
      `/books/deleteBook/${isbn}`,
    );
    return response;
  } catch (error) {
    return undefined;
  }
};

export const duplicateBook = async (
  isbn: string,
): Promise<AxiosResponse | undefined> => {
  try {
    const response = await axiosInstance.post(`/books/duplicateBook/${isbn}`);
    return response;
  } catch (error) {}
};
