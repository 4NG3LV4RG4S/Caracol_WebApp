import { Product, ProductFilters } from '@/src/domain/entities/Product';
import { IProductRepository } from '@/src/domain/repositories/IProductRepository';

export class ProductService {
  constructor(private readonly productRepository: IProductRepository) {}

  async getAllProducts(): Promise<Product[]> {
    try {
      return await this.productRepository.getAllProducts();
    } catch (error) {
      console.error('Error fetching all products:', error);
      throw new Error('Failed to fetch products');
    }
  }

  async getTopSuggestedProducts(): Promise<Product[]> {
    try {
      return await this.productRepository.getTopSuggestedProducts();
    } catch (error) {
      console.error('Error fetching top suggested products:', error);
      throw new Error('Failed to fetch suggested products');
    }
  }

  async getProductById(id: string): Promise<Product | null> {
    if (!id) {
      throw new Error('Product ID is required');
    }

    try {
      return await this.productRepository.getProductById(id);
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw new Error('Failed to fetch product');
    }
  }

  async getProductsByFilters(filters: ProductFilters): Promise<Product[]> {
    try {
      return await this.productRepository.getProductsByFilters(filters);
    } catch (error) {
      console.error('Error fetching products by filters:', error);
      throw new Error('Failed to fetch filtered products');
    }
  }
}
