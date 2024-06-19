import API from "@constants/API";
import axios, { AxiosRequestConfig } from "axios";

const http = axios.create({
  baseURL: API.API_HOST,
});

export type RequestService<T> = (
  http: HttpClient,
  params?: HttpRequestConfig
) => Promise<T>;

export type HttpClient = typeof http;
export type HttpRequestConfig = AxiosRequestConfig & {
  resource?: string | number;
};

export default http;
