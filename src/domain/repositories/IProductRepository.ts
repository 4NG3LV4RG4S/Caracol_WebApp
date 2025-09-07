import { Product, ProductFilters } from '../entities/Product';

export interface IProductRepository {
  getAllProducts(): Promise<Product[]>;
  getTopSuggestedProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
  getProductsByFilters(filters: ProductFilters): Promise<Product[]>;
}
