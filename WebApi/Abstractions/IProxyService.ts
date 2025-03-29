import { AxiosRequestConfig } from "axios";

export interface IProxyService {
    get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T>;
    post<TRequest, TResponse>(endpoint: string, data: TRequest): Promise<TResponse>;
    put<TRequest, TResponse>(endpoint: string, data: TRequest): Promise<TResponse>;
    delete<TResponse>(endpoint: string): Promise<TResponse>;
}