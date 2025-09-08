"use client"

import { useState } from "react"
import { ProductGrid, ProductFilter, ProductSearch } from "@/components/Productos"

export default function ProductosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({})

  const products = [
    {
      id: "1",
      name: "Café Caracolillo Especial",
      description: "Café de origen único de las montañas de Veracruz con notas a chocolate y caramelo.",
      price: 45000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/products/cafe-especial.jpg",
      category: "Café en grano",
      inStock: true,
      origin: "Veracruz, México",
      roastLevel: "Medio",
      weight: 250
    },
    {
      id: "2", 
      name: "Blend Caracolillo Premium",
      description: "Mezcla perfecta de granos seleccionados para un sabor equilibrado y aromático.",
      price: 38000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/products/blend-premium.jpg",
      category: "Café en grano",
      inStock: true,
      origin: "Blend Internacional",
      roastLevel: "Medio-Oscuro",
      weight: 500
    },
    {
      id: "3",
      name: "Café Molido Tradicional",
      description: "Café molido perfecto para métodos de preparación tradicionales como la cafetera italiana.",
      price: 32000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/products/molido-tradicional.jpg",
      category: "Café molido",
      inStock: true,
      origin: "Colombia",
      roastLevel: "Medio",
      weight: 250
    },
    {
      id: "4",
      name: "Espresso Caracolillo",
      description: "Blend especialmente diseñado para espresso con cuerpo intenso y crema perfecta.",
      price: 42000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/products/espresso.jpg",
      category: "Café en grano",
      inStock: false,
      origin: "Brasil-Colombia",
      roastLevel: "Oscuro",
      weight: 250
    },
    {
      id: "5",
      name: "Cold Brew Caracolillo",
      description: "Café especialmente tostado para preparación en frío, suave y refrescante.",
      price: 35000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/products/cold-brew.jpg",
      category: "Café molido",
      inStock: true,
      origin: "Etiopía",
      roastLevel: "Claro",
      weight: 200
    },
    {
      id: "6",
      name: "Descafeinado Natural",
      description: "Café descafeinado por proceso natural manteniendo todo el sabor original.",
      price: 40000,
      image: "https://caracolillo.blob.core.windows.net/media-web-caracolillo/products/descafeinado.jpg",
      category: "Café en grano",
      inStock: true,
      origin: "Guatemala",
      roastLevel: "Medio",
      weight: 250
    }
  ]

  const filterOptions = {
    categories: ["Café en grano", "Café molido"],
    origins: ["Veracruz, México", "Colombia", "Brasil-Colombia", "Etiopía", "Guatemala", "Blend Internacional"],
    roastLevels: ["Claro", "Medio", "Medio-Oscuro", "Oscuro"],
    priceRange: [30000, 50000] as [number, number]
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
  }

  return (
    <main className="container mx-auto px-4 py-12 mt-16 space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#9c7a5b] mb-4">Nuestros Productos</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra selección de cafés de especialidad, cuidadosamente seleccionados 
          y tostados para ofrecerte la mejor experiencia en cada taza.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <div className="space-y-6">
            <ProductSearch onSearch={handleSearch} />
            <ProductFilter options={filterOptions} onFilterChange={handleFilterChange} />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="lg:w-3/4">
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  )
}

