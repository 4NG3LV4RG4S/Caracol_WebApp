"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Eye, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  publishDate: Date
  readTime: number
  views: number
  likes: number
  featured: boolean
}

interface NewsCardProps {
  article: NewsArticle
  variant?: "default" | "featured" | "compact"
}

export default function NewsCard({ article, variant = "default" }: NewsCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "café": "bg-amber-100 text-amber-800",
      "recetas": "bg-green-100 text-green-800",
      "eventos": "bg-blue-100 text-blue-800",
      "cultura": "bg-purple-100 text-purple-800",
      "sostenibilidad": "bg-emerald-100 text-emerald-800",
      "empresa": "bg-gray-100 text-gray-800"
    }
    return colors[category.toLowerCase()] || "bg-gray-100 text-gray-800"
  }

  if (variant === "featured") {
    return (
      <Card className="group hover:shadow-xl transition-all duration-300 bg-white border-[#e6ccb2] overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative">
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className={getCategoryColor(article.category)}>
                {article.category}
              </Badge>
              {article.featured && (
                <Badge className="bg-red-500 text-white">
                  Destacado
                </Badge>
              )}
            </div>
          </div>
          
          <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#9c7a5b] mb-3 line-clamp-2 group-hover:text-[#8b6a4d] transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(article.publishDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{article.likes}</span>
                  </div>
                </div>
                
                <Link href={`/noticias/${article.id}`}>
                  <Button className="bg-[#9c7a5b] hover:bg-[#8b6a4d] text-white">
                    Leer más
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  if (variant === "compact") {
    return (
      <Card className="group hover:shadow-md transition-all duration-300 bg-white border-[#e6ccb2]">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <Image
              src={article.image}
              alt={article.title}
              width={80}
              height={80}
              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <Badge className={`${getCategoryColor(article.category)} mb-2`}>
                {article.category}
              </Badge>
              <h3 className="font-semibold text-[#9c7a5b] line-clamp-2 mb-2 group-hover:text-[#8b6a4d] transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{formatDate(article.publishDate)}</span>
                <span>•</span>
                <span>{article.readTime} min</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white border-[#e6ccb2] overflow-hidden">
      <div className="relative">
        <Image
          src={article.image}
          alt={article.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={getCategoryColor(article.category)}>
            {article.category}
          </Badge>
          {article.featured && (
            <Badge className="bg-red-500 text-white">
              Destacado
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-[#9c7a5b] mb-2 line-clamp-2 group-hover:text-[#8b6a4d] transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(article.publishDate)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTime} min</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{article.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              <span>{article.likes}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="p-2 h-auto">
              <Share2 className="w-4 h-4 text-gray-400 hover:text-[#9c7a5b]" />
            </Button>
            <Link href={`/noticias/${article.id}`}>
              <Button 
                size="sm" 
                className="bg-[#9c7a5b] hover:bg-[#8b6a4d] text-white"
              >
                Leer
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
