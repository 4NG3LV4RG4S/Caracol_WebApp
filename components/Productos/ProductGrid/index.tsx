"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  inStock: boolean
  origin?: string
  roastLevel?: string
}

interface ProductGridProps {
  products?: Product[]
  category?: string
}

export default function ProductGrid({ products = [], category }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  useEffect(() => {
    if (category && category !== "all") {
      setFilteredProducts(products.filter(product => product.category === category))
    } else {
      setFilteredProducts(products)
    }
  }, [products, category])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300 bg-white border-[#e6ccb2]">
          <CardContent className="p-0">
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {!product.inStock && (
                <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                  Agotado
                </Badge>
              )}
              {product.origin && (
                <Badge className="absolute top-2 left-2 bg-[#9c7a5b] text-white">
                  {product.origin}
                </Badge>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg text-[#9c7a5b] mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              {product.roastLevel && (
                <div className="mb-3">
                  <span className="text-xs text-gray-500">Tueste: </span>
                  <Badge variant="outline" className="text-xs">
                    {product.roastLevel}
                  </Badge>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-[#9c7a5b]">
                  ${product.price.toLocaleString()}
                </span>
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
              </div>
              
              <div className="flex gap-2">
                <Link href={`/productos/${product.id}`} className="flex-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver
                  </Button>
                </Link>
                <Button 
                  size="sm" 
                  disabled={!product.inStock}
                  className="bg-[#a8d5ba] hover:bg-[#95c7a8] text-[#9c7a5b]"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Agregar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
