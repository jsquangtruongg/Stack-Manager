import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from "axios";
export const API = axios.create({
  baseURL: "http://localhost:8080",
});

const authInterceptorRequest = (
  req: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  req.headers["ngrok-skip-browser-warning"] = "69420";

  if (localStorage.getItem("profile")) {
    const accessToken = JSON.parse(
      localStorage.getItem("profile") ?? ""
    )?.accessToken;
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return req;
};

const authInterceptorResponse = async (
  response: AxiosResponse
): Promise<AxiosResponse> => {
  return response;
};

const authInterceptorResponseError = async (
  error: AxiosError
): Promise<never> => {
  if (error.response?.status === 401) {
    localStorage.removeItem("profile");
    window.location.href = "/auth/login";
  }
  return Promise.reject(error);
};

export { authInterceptorResponse, authInterceptorResponseError };
API.interceptors.request.use(authInterceptorRequest);
API.interceptors.response.use(
  authInterceptorResponse,
  authInterceptorResponseError
);
