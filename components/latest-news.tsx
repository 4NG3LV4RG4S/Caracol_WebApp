"use client";

import NewsCard from "./news-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLatestNews } from "@/src/presentation/hooks/useNews";
import { LoadingSpinner } from "@/src/presentation/components/LoadingSpinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Newspaper, TrendingUp, Calendar } from "lucide-react";

export default function LatestNews() {
  const { news: latestNews, loading, error, refetch } = useLatestNews(3);

  if (loading) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-[#a8d5ba] via-[#e6ccb2] to-[#f7f3e9] overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#9c7a5b]/20 mb-6">
              <Newspaper className="w-5 h-5 text-[#9c7a5b] mr-2" />
              <span className="text-[#9c7a5b] font-medium">Noticias Caracolillo</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
              Últimas Noticias
            </h2>
          </div>
          <LoadingSpinner text="Cargando últimas noticias..." />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-[#a8d5ba] via-[#e6ccb2] to-[#f7f3e9] overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#9c7a5b]/20 mb-6">
              <Newspaper className="w-5 h-5 text-[#9c7a5b] mr-2" />
              <span className="text-[#9c7a5b] font-medium">Noticias Caracolillo</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
              Últimas Noticias
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
    <section className="relative min-h-screen bg-gradient-to-br from-[#a8d5ba] via-[#e6ccb2] to-[#f7f3e9] overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#9c7a5b]" />
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-[#6b4423]" />
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-[#9c7a5b]" />
        <div className="absolute bottom-40 right-10 w-12 h-12 rounded-full bg-[#6b4423]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#9c7a5b]/20">
                <Newspaper className="w-5 h-5 text-[#9c7a5b] mr-2" />
                <span className="text-[#9c7a5b] font-medium">Noticias Caracolillo</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-[#6b4423] leading-tight">
                Últimas
                <span className="block text-[#9c7a5b]">Noticias</span>
              </h1>
              
              <p className="text-xl text-[#8c6a4b] leading-relaxed max-w-lg">
                Mantente al día con las novedades del mundo del café, 
                eventos especiales y las últimas tendencias en nuestra comunidad.
              </p>
            </div>

            {/* News Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#9c7a5b]/10 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#9c7a5b] rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#9c7a5b]">50+</div>
                    <div className="text-sm text-[#8c6a4b]">Artículos</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#9c7a5b]/10 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#a8d5ba] rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#9c7a5b]">2x</div>
                    <div className="text-sm text-[#8c6a4b]">Por semana</div>
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
                <Link href="/noticias">
                  <Newspaper className="w-5 h-5 mr-2" />
                  Ver Todas
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b] hover:text-white px-8 py-6 text-lg rounded-xl bg-white/80 backdrop-blur-sm"
              >
                <Link href="/community">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Comunidad
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - News Grid */}
          <div className="relative">
            <div className="space-y-4">
              {latestNews.slice(0, 3).map((news, index) => (
                <div 
                  key={news.id} 
                  className={`transform transition-all duration-300 hover:scale-105 ${
                    index === 0 ? 'scale-110' : ''
                  }`}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-[#9c7a5b]/10 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-[#f7f3e9] rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={news.imageUrl || "/placeholder.jpg"} 
                          alt={news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#6b4423] text-lg mb-2 line-clamp-2">{news.title}</h3>
                        <p className="text-sm text-[#8c6a4b] line-clamp-2">{news.summary}</p>
                        <p className="text-xs text-[#9c7a5b] mt-2">{new Date(news.date).toLocaleDateString()}</p>
                      </div>
                    </div>
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

