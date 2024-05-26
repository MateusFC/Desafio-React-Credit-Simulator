import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = 'http://localhost:3001';

if (!baseURL) {
  throw new Error("A variável de ambiente 'VITE_API_URL' não está definida.");
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

const API = {
  get<T>(endpoint: string, params?: any, config?: Omit<AxiosRequestConfig, 'params'>): Promise<AxiosResponse<T>> {
    return axiosInstance.get<T>(endpoint, {
      params,
      ...config,
    });
  },
};

export default API;
