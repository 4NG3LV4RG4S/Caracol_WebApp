"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, X } from "lucide-react"

interface FilterOptions {
  categories: string[]
  origins: string[]
  roastLevels: string[]
  priceRange: [number, number]
}

interface ProductFilterProps {
  options: FilterOptions
  onFilterChange: (filters: any) => void
}

export default function ProductFilter({ options, onFilterChange }: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedOrigin, setSelectedOrigin] = useState<string>("all")
  const [selectedRoastLevel, setSelectedRoastLevel] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<[number, number]>(options.priceRange)
  const [isOpen, setIsOpen] = useState(false)

  const handleFilterChange = () => {
    const filters = {
      category: selectedCategory !== "all" ? selectedCategory : null,
      origin: selectedOrigin !== "all" ? selectedOrigin : null,
      roastLevel: selectedRoastLevel !== "all" ? selectedRoastLevel : null,
      priceRange: priceRange
    }
    onFilterChange(filters)
  }

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedOrigin("all")
    setSelectedRoastLevel("all")
    setPriceRange(options.priceRange)
    onFilterChange({
      category: null,
      origin: null,
      roastLevel: null,
      priceRange: options.priceRange
    })
  }

  const hasActiveFilters = selectedCategory !== "all" || selectedOrigin !== "all" || 
                          selectedRoastLevel !== "all" || 
                          priceRange[0] !== options.priceRange[0] || 
                          priceRange[1] !== options.priceRange[1]

  return (
    <Card className="w-full bg-white border-[#e6ccb2]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros
          </CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-[#9c7a5b] hover:bg-[#f7f3e9]"
            >
              <X className="w-4 h-4 mr-1" />
              Limpiar
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Category Filter */}
        <div>
          <label className="text-sm font-medium text-[#9c7a5b] mb-2 block">
            Categoría
          </label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="border-[#e6ccb2]">
              <SelectValue placeholder="Seleccionar categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las categorías</SelectItem>
              {options.categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Origin Filter */}
        <div>
          <label className="text-sm font-medium text-[#9c7a5b] mb-2 block">
            Origen
          </label>
          <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
            <SelectTrigger className="border-[#e6ccb2]">
              <SelectValue placeholder="Seleccionar origen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los orígenes</SelectItem>
              {options.origins.map((origin) => (
                <SelectItem key={origin} value={origin}>
                  {origin}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Roast Level Filter */}
        <div>
          <label className="text-sm font-medium text-[#9c7a5b] mb-2 block">
            Nivel de Tueste
          </label>
          <Select value={selectedRoastLevel} onValueChange={setSelectedRoastLevel}>
            <SelectTrigger className="border-[#e6ccb2]">
              <SelectValue placeholder="Seleccionar tueste" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los tuestes</SelectItem>
              {options.roastLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="text-sm font-medium text-[#9c7a5b] mb-2 block">
            Rango de Precio
          </label>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              max={options.priceRange[1]}
              min={options.priceRange[0]}
              step={1000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>${priceRange[0].toLocaleString()}</span>
              <span>${priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button 
          onClick={handleFilterChange}
          className="w-full bg-[#9c7a5b] hover:bg-[#8b6a4d] text-white"
        >
          Aplicar Filtros
        </Button>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="pt-2 border-t border-[#e6ccb2]">
            <p className="text-sm font-medium text-[#9c7a5b] mb-2">Filtros activos:</p>
            <div className="flex flex-wrap gap-1">
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  {selectedCategory}
                </Badge>
              )}
              {selectedOrigin !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  {selectedOrigin}
                </Badge>
              )}
              {selectedRoastLevel !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  {selectedRoastLevel}
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
