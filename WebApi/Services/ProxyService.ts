import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IProxyService } from "../Abstractions/IProxyService";

export class ApiClient implements IProxyService {
    private client: AxiosInstance;

    constructor(baseURL: string) {
        this.client = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    public async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.get<T>(endpoint, config);
        return response.data;
    }

    public async post<TRequest, TResponse>(endpoint: string, data: TRequest): Promise<TResponse> {
        const response = await this.client.post<TResponse>(endpoint, data);
        return response.data;
    }

    public async put<TRequest, TResponse = void>(endpoint: string, data: TRequest): Promise<TResponse> {
        const response = await this.client.put<TResponse>(endpoint, data);
        return response.data;
    }

    public async delete<TResponse = void>(endpoint: string): Promise<TResponse> {
        const response = await this.client.delete<TResponse>(endpoint);
        return response.data;
    }
}
