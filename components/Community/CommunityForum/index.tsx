"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Clock, Pin, Users } from "lucide-react"
import Link from "next/link"

interface ForumPost {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
    role: "member" | "moderator" | "expert"
  }
  category: string
  createdAt: Date
  replies: number
  likes: number
  isPinned: boolean
  isAnswered: boolean
}

interface CommunityForumProps {
  posts: ForumPost[]
  categories: string[]
}

export default function CommunityForum({ posts, categories }: CommunityForumProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<"recent" | "popular" | "replies">("recent")

  const filteredPosts = posts
    .filter(post => selectedCategory === "all" || post.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case "popular": return b.likes - a.likes
        case "replies": return b.replies - a.replies
        case "recent":
        default: return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
    })

  const getRoleColor = (role: string) => {
    switch (role) {
      case "moderator": return "bg-blue-100 text-blue-800"
      case "expert": return "bg-purple-100 text-purple-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return "Hace menos de 1 hora"
    if (diffInHours < 24) return `Hace ${diffInHours} horas`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `Hace ${diffInDays} días`
    return date.toLocaleDateString('es-ES')
  }

  return (
    <div className="space-y-6">
      {/* Forum Header */}
      <Card className="bg-gradient-to-r from-[#f7f3e9] to-[#e6ccb2] border-[#9c7a5b]">
        <CardHeader>
          <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
            <Users className="w-6 h-6" />
            Foro de la Comunidad
          </CardTitle>
          <p className="text-gray-600">
            Comparte experiencias, haz preguntas y conecta con otros amantes del café
          </p>
        </CardHeader>
      </Card>

      {/* Filters and Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
            className={selectedCategory === "all" ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
          >
            Todas
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant={sortBy === "recent" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("recent")}
            className={sortBy === "recent" ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
          >
            Recientes
          </Button>
          <Button
            variant={sortBy === "popular" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("popular")}
            className={sortBy === "popular" ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
          >
            Populares
          </Button>
          <Button
            variant={sortBy === "replies" ? "default" : "outline"}
            size="sm"
            onClick={() => setSortBy("replies")}
            className={sortBy === "replies" ? "bg-[#9c7a5b] text-white" : "border-[#9c7a5b] text-[#9c7a5b]"}
          >
            Más comentados
          </Button>
        </div>
      </div>

      {/* Forum Posts */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow duration-300 bg-white border-[#e6ccb2]">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      {post.isPinned && (
                        <Pin className="w-4 h-4 text-[#9c7a5b]" />
                      )}
                      <Link href={`/community/post/${post.id}`}>
                        <h3 className="font-semibold text-[#9c7a5b] hover:text-[#8b6a4d] transition-colors line-clamp-1">
                          {post.title}
                        </h3>
                      </Link>
                      {post.isAnswered && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          Resuelto
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <span className="font-medium">{post.author.name}</span>
                        <Badge className={getRoleColor(post.author.role)} variant="secondary">
                          {post.author.role}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{formatTimeAgo(post.createdAt)}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Post Button */}
      <div className="text-center">
        <Button className="bg-[#9c7a5b] hover:bg-[#8b6a4d] text-white">
          Crear Nueva Publicación
        </Button>
      </div>
    </div>
  )
}
