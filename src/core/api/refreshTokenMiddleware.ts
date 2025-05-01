import {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosInstance,
} from "axios";
import { eventBus } from "../events/EventBus";
import { events } from "../events/constants";

interface FailedQueuePromise {
  resolve: (value?: void | PromiseLike<void>) => void; // Ajusta 'void' si resuelves con algún valor
  reject: (reason?: any) => void;
}

interface RetryableAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let failedQueue: FailedQueuePromise[] = [];

const processQueue = (error: Error | null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

export function refreshTokenMiddlewareConfig(apiClient: AxiosInstance) {
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as
        | RetryableAxiosRequestConfig
        | undefined;

      if (
        originalRequest &&
        error.response?.status === 401 &&
        !originalRequest._retry &&
        originalRequest.url !== "/auth/refresh"
      ) {
        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          })
            .then(() => {
              return apiClient(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          await apiClient.get("/auth/refresh");

          processQueue(null);

          return apiClient(originalRequest);
        } catch (refreshError) {
          processQueue(
            refreshError instanceof Error
              ? refreshError
              : new Error("Refresh token error")
          );
          eventBus.emit(events.REFRESH_TOKEN_ERROR, refreshError);
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );
}
