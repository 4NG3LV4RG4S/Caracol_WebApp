import { HttpClient, IHttpClient } from '../http/HttpClient';
import { ProductRepository } from '../repositories/ProductRepository';
import { NewsRepository } from '../repositories/NewsRepository';
import { ProductService } from '@/src/application/services/ProductService';
import { NewsService } from '@/src/application/services/NewsService';
import { IProductRepository } from '@/src/domain/repositories/IProductRepository';
import { INewsRepository } from '@/src/domain/repositories/INewsRepository';

export class ServiceContainer {
  private static instance: ServiceContainer;
  private services: Map<string, any> = new Map();

  private constructor() {
    this.registerServices();
  }

  public static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }

  private registerServices(): void {
    // Infrastructure layer
    this.services.set('HttpClient', new HttpClient());
    
    // Repositories
    this.services.set('ProductRepository', new ProductRepository(this.get<IHttpClient>('HttpClient')));
    this.services.set('NewsRepository', new NewsRepository());
    
    // Application services
    this.services.set('ProductService', new ProductService(this.get<IProductRepository>('ProductRepository')));
    this.services.set('NewsService', new NewsService(this.get<INewsRepository>('NewsRepository')));
  }

  public get<T>(serviceName: string): T {
    const service = this.services.get(serviceName);
    if (!service) {
      throw new Error(`Service ${serviceName} not found`);
    }
    return service as T;
  }

  public register<T>(serviceName: string, service: T): void {
    this.services.set(serviceName, service);
  }
}

// Convenience functions for getting services
export const getProductService = (): ProductService => 
  ServiceContainer.getInstance().get<ProductService>('ProductService');

export const getNewsService = (): NewsService => 
  ServiceContainer.getInstance().get<NewsService>('NewsService');
