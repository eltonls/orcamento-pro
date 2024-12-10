import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

function apiConfig(baseUrl: string, token?: string): AxiosRequestConfig {
  const config: AxiosRequestConfig = {
    baseURL: baseUrl,
    headers: {}
  }

  if (token !== "") {
    config.headers!.Authorization = token ? `Bearer ${token}` : `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`;
  }

  return config;
}

function initAxios(config: AxiosRequestConfig): AxiosInstance {
  const defineInstance = axios.create(config);

  defineInstance.interceptors.request.use(
    (request: AxiosRequestConfig): any => {
      return request;
    },
    (error: AxiosError): any => {
      return Promise.reject(error);
    }
  )

  defineInstance.interceptors.response.use(
    (response: AxiosResponse): any => {
      return response;
    },
    (error: AxiosError): any => {
      return Promise.reject(error);
    }
  )

  return defineInstance;
}

function api(baseUrl: string, token?: string) {
  return initAxios(apiConfig(baseUrl, token));
}

export default api;
