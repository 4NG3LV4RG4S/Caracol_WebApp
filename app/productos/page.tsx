"use client";

import ProductCard from "@/components/product-card"
import SectionTitle from "@/components/section-title"
import { useProducts } from "@/src/presentation/hooks/useProducts";
import { LoadingSpinner } from "@/src/presentation/components/LoadingSpinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductosPage() {
  const { products: allProducts, loading, error, refetch } = useProducts();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <SectionTitle
          title="Nuestros Productos"
          subtitle="Descubre nuestra selección de café y productos derivados"
          centered={true}
        />
        <LoadingSpinner text="Cargando productos..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <SectionTitle
          title="Nuestros Productos"
          subtitle="Descubre nuestra selección de café y productos derivados"
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
    );
  }

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

