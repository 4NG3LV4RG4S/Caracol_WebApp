"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product-card"
import SectionTitle from "@/components/section-title"
import { IProxyService } from "@/WebApi/Abstractions/IProxyService";
import { ApiClient } from "@/WebApi/Services/ProxyService";

const Proxy : IProxyService = new ApiClient("https://localhost:7250/");

interface Product {
  id: string
  code: string
  name: string
  productDescription: string
  productPresent: string
  productPrice: number
  imageUrl: string
  categoryName: string
  isNewProduct?: boolean
  isBestSeller?: boolean
}

export default function ProductosPage() {
  const [allProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const products = await Proxy.get<Product[]>("/api/Product/GetAllProductsAsync");
          setFeaturedProducts(products);
        } catch (error) {
          console.error("Error cargando productos:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <SectionTitle
        title="Nuestros Productos"
        subtitle="Descubre nuestra selección de café y productos derivados"
        centered={true}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

