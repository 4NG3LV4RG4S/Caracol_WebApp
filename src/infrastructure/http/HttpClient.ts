import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { API_CONFIG } from '../config/ApiConfig';

export interface IHttpClient {
  get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T>;
  post<TRequest, TResponse>(endpoint: string, data: TRequest, config?: AxiosRequestConfig): Promise<TResponse>;
  put<TRequest, TResponse>(endpoint: string, data: TRequest, config?: AxiosRequestConfig): Promise<TResponse>;
  delete<TResponse>(endpoint: string, config?: AxiosRequestConfig): Promise<TResponse>;
}

export class HttpClient implements IHttpClient {
  private client: AxiosInstance;

  constructor(baseURL: string = API_CONFIG.BASE_URL) {
    this.client = axios.create({
      baseURL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add any auth headers or other request modifications here
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        this.handleError(error);
        return Promise.reject(error);
      }
    );
  }

  private handleError(error: AxiosError): void {
    if (error.response) {
      // Server responded with error status
      console.error(`HTTP Error ${error.response.status}:`, error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.message);
    } else {
      // Something else happened
      console.error('Request Error:', error.message);
    }
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(endpoint, config);
    return response.data;
  }

  async post<TRequest, TResponse>(
    endpoint: string, 
    data: TRequest, 
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await this.client.post<TResponse>(endpoint, data, config);
    return response.data;
  }

  async put<TRequest, TResponse>(
    endpoint: string, 
    data: TRequest, 
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    const response = await this.client.put<TResponse>(endpoint, data, config);
    return response.data;
  }

  async delete<TResponse>(endpoint: string, config?: AxiosRequestConfig): Promise<TResponse> {
    const response = await this.client.delete<TResponse>(endpoint, config);
    return response.data;
  }
}
