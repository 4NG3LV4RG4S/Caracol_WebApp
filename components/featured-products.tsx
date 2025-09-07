"use client";

import ProductCard from "./product-card"
import SectionTitle from "./section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useFeaturedProducts } from "@/src/presentation/hooks/useProducts";
import { LoadingSpinner } from "@/src/presentation/components/LoadingSpinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function FeaturedProducts() {
  const { products: featuredProducts, loading, error, refetch } = useFeaturedProducts();
  
  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Café y Derivados"
            subtitle="Descubre nuestros productos"
            centered={true}
          />
          <LoadingSpinner text="Cargando productos destacados..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Café y Derivados"
            subtitle="Descubre nuestros productos"
            centered={true}
          />
          <Alert variant="destructive" className="max-w-md mx-auto">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              {error}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={refetch}
                className="ml-2"
              >
                Reintentar
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

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

