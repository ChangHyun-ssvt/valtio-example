import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import HttpRepository from "../repositories/HttpRepository";

export default class AxiosClient implements HttpRepository {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
  }

  get<T>(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<T> {
    return this.instance.get(url, config);
  }

  post<T>(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<T> {
    return this.instance.post(url, config);
  }

  delete<T>(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<T> {
    return this.instance.delete(url, config);
  }

  update<T>(
    url: string,
    config?: AxiosRequestConfig<any> | undefined
  ): Promise<T> {
    return this.instance.put(url, config);
  }
}
