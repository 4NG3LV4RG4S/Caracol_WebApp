import { useState, useEffect } from 'react';
import { Product, ProductFilters } from '@/src/domain/entities/Product';
import { getProductService } from '@/src/infrastructure/di/ServiceContainer';

export interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productService = getProductService();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};

export const useFeaturedProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productService = getProductService();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getTopSuggestedProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};

export const useProductsByFilters = (filters: ProductFilters): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const productService = getProductService();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productService.getProductsByFilters(filters);
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};
