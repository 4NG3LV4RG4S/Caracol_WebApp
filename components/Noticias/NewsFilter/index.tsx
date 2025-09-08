"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, X, Calendar, Tag } from "lucide-react"

interface NewsFilterOptions {
  categories: string[]
  authors: string[]
  dateRanges: { label: string; value: string }[]
}

interface NewsFilterProps {
  options: NewsFilterOptions
  onFilterChange: (filters: any) => void
}

export default function NewsFilter({ options, onFilterChange }: NewsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedAuthor, setSelectedAuthor] = useState<string>("all")
  const [selectedDateRange, setSelectedDateRange] = useState<string>("all")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const handleFilterChange = () => {
    const filters = {
      category: selectedCategory !== "all" ? selectedCategory : null,
      author: selectedAuthor !== "all" ? selectedAuthor : null,
      dateRange: selectedDateRange !== "all" ? selectedDateRange : null,
      featuredOnly: showFeaturedOnly
    }
    onFilterChange(filters)
  }

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedAuthor("all")
    setSelectedDateRange("all")
    setShowFeaturedOnly(false)
    onFilterChange({
      category: null,
      author: null,
      dateRange: null,
      featuredOnly: false
    })
  }

  const hasActiveFilters = selectedCategory !== "all" || selectedAuthor !== "all" || 
                          selectedDateRange !== "all" || showFeaturedOnly

  return (
    <Card className="w-full bg-white border-[#e6ccb2]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#9c7a5b] flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtrar Noticias
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
          <label className="text-sm font-medium text-[#9c7a5b] mb-2 block flex items-center gap-2">
            <Tag className="w-4 h-4" />
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
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Author Filter */}
        <div>
          <label className="text-sm font-medium text-[#9c7a5b] mb-2 block">
            Autor
          </label>
          <Select value={selectedAuthor} onValueChange={setSelectedAuthor}>
            <SelectTrigger className="border-[#e6ccb2]">
              <SelectValue placeholder="Seleccionar autor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los autores</SelectItem>
              {options.authors.map((author) => (
                <SelectItem key={author} value={author}>
                  {author}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Range Filter */}
        <div>
          <label className="text-sm font-medium text-[#9c7a5b] mb-2 block flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Período
          </label>
          <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
            <SelectTrigger className="border-[#e6ccb2]">
              <SelectValue placeholder="Seleccionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los períodos</SelectItem>
              {options.dateRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Only Toggle */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="featured"
            checked={showFeaturedOnly}
            onChange={(e) => setShowFeaturedOnly(e.target.checked)}
            className="rounded border-[#e6ccb2] text-[#9c7a5b] focus:ring-[#9c7a5b]"
          />
          <label htmlFor="featured" className="text-sm font-medium text-[#9c7a5b]">
            Solo artículos destacados
          </label>
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
              {selectedAuthor !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  {selectedAuthor}
                </Badge>
              )}
              {selectedDateRange !== "all" && (
                <Badge variant="secondary" className="text-xs">
                  {options.dateRanges.find(r => r.value === selectedDateRange)?.label}
                </Badge>
              )}
              {showFeaturedOnly && (
                <Badge variant="secondary" className="text-xs">
                  Destacados
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
