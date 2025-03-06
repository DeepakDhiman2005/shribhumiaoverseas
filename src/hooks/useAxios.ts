import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import useStorage from "./useStorage";

const useAxios = (): AxiosInstance => {
    const storage = useStorage();
    const token = storage.get("shri-bhumia-token");
    const BASE_URL = import.meta.env.VITE_API_URL as string;

    // Create Axios instance with default config
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
    });

    // **Request Interceptor**
    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const updatedToken = storage.get("shri-bhumia-token");
            if (updatedToken) {
                config.headers.Authorization = `Bearer ${updatedToken}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // **Response Interceptor**
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error) => {
            console.error("API Error:", error.response?.data || error.message);
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxios;
