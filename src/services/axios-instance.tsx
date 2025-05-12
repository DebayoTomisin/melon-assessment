import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from "axios";

interface MyApiConfig {
  baseURL?: string;
  timeout?: number;
  token?: string | null; // Example: for including an auth token
}

/**
 * Creates and configures an Axios instance.
 *
 * @param {MyApiConfig} config - Optional configuration for the Axios instance.
 * @returns {AxiosInstance} A configured Axios instance.
 */

const createAxiosInstance = (config: MyApiConfig = {}): AxiosInstance => {
  const {
    baseURL = `https://fakestoreapi.com`,
    timeout = 10000,
    token = null,
  } = config;

  const instance = axios.create({
    baseURL,
    timeout,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (reqConfig: InternalAxiosRequestConfig) => {
      if (token) {
        reqConfig.headers.Authorization = `Bearer ${token}`;
      }
      return reqConfig;
    },
    (error: AxiosError) => {
      console.error("Request Error:", JSON.stringify(error, null, 2));
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      console.error(
        "Response Error:",
        JSON.stringify(error.response?.data || error.message, null, 2)
      );

      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          console.warn(
            "Unauthorized access - 401. Redirecting to login or refreshing token..."
          );
        } else if (status === 403) {
          console.warn("Forbidden access - 403.");
        } else if (status === 500) {
          console.error("Server error - 500. Please try again later.");
        }
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export { createAxiosInstance };
