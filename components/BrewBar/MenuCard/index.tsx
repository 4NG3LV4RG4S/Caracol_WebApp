"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Coffee, Thermometer } from "lucide-react"
import Image from "next/image"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "espresso" | "filtrado" | "frio" | "especial"
  preparationTime: number
  temperature: "caliente" | "frio" | "ambiente"
  available: boolean
  ingredients?: string[]
}

interface MenuCardProps {
  item: MenuItem
  onOrder?: (item: MenuItem) => void
}

export default function MenuCard({ item, onOrder }: MenuCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "espresso": return "bg-amber-100 text-amber-800"
      case "filtrado": return "bg-blue-100 text-blue-800"
      case "frio": return "bg-cyan-100 text-cyan-800"
      case "especial": return "bg-purple-100 text-purple-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getTemperatureIcon = (temp: string) => {
    switch (temp) {
      case "caliente": return "🔥"
      case "frio": return "❄️"
      case "ambiente": return "🌡️"
      default: return "☕"
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white border-[#e6ccb2] overflow-hidden">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.name}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <Badge className={getCategoryColor(item.category)}>
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </Badge>
          {!item.available && (
            <Badge variant="destructive">
              No disponible
            </Badge>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-white/90">
            {getTemperatureIcon(item.temperature)} {item.temperature}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-[#9c7a5b] line-clamp-1">
            {item.name}
          </h3>
          <span className="text-xl font-bold text-[#9c7a5b] ml-2">
            ${item.price.toLocaleString()}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{item.preparationTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Coffee className="w-4 h-4" />
            <span>{item.category}</span>
          </div>
        </div>

        {item.ingredients && (
          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1">Ingredientes:</p>
            <div className="flex flex-wrap gap-1">
              {item.ingredients.slice(0, 3).map((ingredient, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {ingredient}
                </Badge>
              ))}
              {item.ingredients.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{item.ingredients.length - 3} más
                </Badge>
              )}
            </div>
          </div>
        )}

        <Button
          onClick={() => onOrder?.(item)}
          disabled={!item.available}
          className="w-full bg-[#a8d5ba] hover:bg-[#95c7a8] text-[#9c7a5b] disabled:opacity-50"
        >
          {item.available ? "Ordenar" : "No disponible"}
        </Button>
      </CardContent>
    </Card>
  )
}
