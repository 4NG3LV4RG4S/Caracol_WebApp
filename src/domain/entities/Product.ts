export interface Product {
  id: string;
  code: string;
  name: string;
  productDescription: string;
  productPresent: string;
  productPrice: number;
  imageUrl: string;
  categoryName: string;
  isNewProduct?: boolean;
  isBestSeller?: boolean;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  isNewProduct?: boolean;
  isBestSeller?: boolean;
}
