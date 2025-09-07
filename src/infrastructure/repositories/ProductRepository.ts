import { Product, ProductFilters } from '@/src/domain/entities/Product';
import { IProductRepository } from '@/src/domain/repositories/IProductRepository';
import { IHttpClient } from '../http/HttpClient';
import { API_CONFIG } from '../config/ApiConfig';

export class ProductRepository implements IProductRepository {
  constructor(private readonly httpClient: IHttpClient) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.httpClient.get<Product[]>(API_CONFIG.ENDPOINTS.PRODUCTS.GET_ALL);
  }

  async getTopSuggestedProducts(): Promise<Product[]> {
    return await this.httpClient.get<Product[]>(API_CONFIG.ENDPOINTS.PRODUCTS.GET_TOP_SUGGESTED);
  }

  async getProductById(id: string): Promise<Product | null> {
    try {
      return await this.httpClient.get<Product>(API_CONFIG.ENDPOINTS.PRODUCTS.GET_BY_ID(id));
    } catch (error) {
      // If product not found, return null instead of throwing
      return null;
    }
  }

  async getProductsByFilters(filters: ProductFilters): Promise<Product[]> {
    // For now, get all products and filter client-side
    // In a real implementation, this would be server-side filtering
    const allProducts = await this.getAllProducts();
    
    return allProducts.filter(product => {
      if (filters.category && product.categoryName !== filters.category) {
        return false;
      }
      if (filters.minPrice && product.productPrice < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && product.productPrice > filters.maxPrice) {
        return false;
      }
      if (filters.isNewProduct !== undefined && product.isNewProduct !== filters.isNewProduct) {
        return false;
      }
      if (filters.isBestSeller !== undefined && product.isBestSeller !== filters.isBestSeller) {
        return false;
      }
      return true;
    });
  }
}
