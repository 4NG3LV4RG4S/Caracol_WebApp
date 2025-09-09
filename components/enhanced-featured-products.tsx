"use client";

import ProductCard from "./product-card"
import { Button } from "@/components/ui/button"
import LoadingLink from "@/components/ui/loading-link";
import { Coffee, Sparkles, TrendingUp, Star } from "lucide-react"
import { useFeaturedProducts } from "@/src/presentation/hooks/useProducts";
import { LoadingSpinner } from "@/src/presentation/components/LoadingSpinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const CategoryBadge = ({ icon: Icon, label, count }: { icon: any, label: string, count: number }) => (
  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-[#9c7a5b]/20 hover:border-[#9c7a5b]/40 transition-all duration-300 cursor-pointer group">
    <Icon className="w-4 h-4 text-[#9c7a5b] group-hover:scale-110 transition-transform duration-300" />
    <span className="text-[#6b4423] font-medium">{label}</span>
    <span className="text-xs bg-[#9c7a5b] text-white rounded-full px-2 py-0.5">{count}</span>
  </div>
)

export default function EnhancedFeaturedProducts() {
  const { products: featuredProducts, loading, error, refetch } = useFeaturedProducts();

  if (loading) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-white via-[#f7f3e9] to-[#e6ccb2] overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#9c7a5b]/20 mb-6">
              <Coffee className="w-5 h-5 text-[#9c7a5b] mr-2" />
              <span className="text-[#9c7a5b] font-medium">Productos Destacados</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
              Nuestros Cafés
            </h2>
          </div>
          <LoadingSpinner text="Cargando productos destacados..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-white via-[#f7f3e9] to-[#e6ccb2] overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#9c7a5b]/20 mb-6">
              <Coffee className="w-5 h-5 text-[#9c7a5b] mr-2" />
              <span className="text-[#9c7a5b] font-medium">Productos Destacados</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
              Nuestros Cafés
            </h2>
          </div>
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
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#f7f3e9] to-[#e6ccb2] overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#9c7a5b]" />
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-[#a8d5ba]" />
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-[#9c7a5b]" />
        <div className="absolute bottom-40 right-10 w-12 h-12 rounded-full bg-[#a8d5ba]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#9c7a5b]/20">
                <Coffee className="w-5 h-5 text-[#9c7a5b] mr-2" />
                <span className="text-[#9c7a5b] font-medium">Productos Destacados</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
                Nuestros
                <span className="block text-[#9c7a5b]">Cafés</span>
              </h1>

              <p className="text-xl text-[#8c6a4b] leading-relaxed max-w-lg">
                Selección premium de cafés de especialidad, tostados artesanalmente
                para ofrecerte la mejor experiencia en cada taza.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#9c7a5b]/10 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#9c7a5b] rounded-xl flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#9c7a5b]">100%</div>
                    <div className="text-sm text-[#8c6a4b]">Especialidad</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#9c7a5b]/10 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#a8d5ba] rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#9c7a5b]">5★</div>
                    <div className="text-sm text-[#8c6a4b]">Calidad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <LoadingLink href="/productos">
                  <Coffee className="w-5 h-5 mr-2" />
                  Ver Todos
                </LoadingLink>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white px-8 py-6 text-lg rounded-xl bg-white/80 backdrop-blur-sm"
              >
                <LoadingLink href="/brewBar">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Probar en BrewBar
                </LoadingLink>
              </Button>
            </div>
          </div>

          {/* Right Content - Products Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {featuredProducts.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-[#9c7a5b]/10 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square bg-[#f7f3e9] rounded-xl mb-3 overflow-hidden">
                      <img
                        src={product.imageUrl || "/placeholder.jpg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-[#6b4423] text-lg mb-1">{product.name}</h3>
                    <p className="text-[#9c7a5b] font-semibold">${product.productPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
