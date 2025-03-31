"use client";

import { useEffect, useState } from "react";
import ProductCard from "./product-card"
import SectionTitle from "./section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IProxyService } from "../WebApi/Abstractions/IProxyService";
import { ApiClient } from "../WebApi/Services/ProxyService";

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

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await Proxy.get<Product[]>("/api/Product/GetTopSuggestedProducts");
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Café y Derivados"
          subtitle="Descubre nuestros productos"
          centered={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white">
            <Link href="/productos">Ver todos los productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

