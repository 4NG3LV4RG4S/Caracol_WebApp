"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface ProductSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function ProductSearch({ onSearch, placeholder = "Buscar productos..." }: ProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleClear = () => {
    setSearchQuery("")
    onSearch("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="relative flex gap-2 w-full max-w-md">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-10 border-[#e6ccb2] focus:border-[#9c7a5b] focus:ring-[#9c7a5b]"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 h-auto hover:bg-gray-100"
          >
            <X className="w-4 h-4 text-gray-400" />
          </Button>
        )}
      </div>
      <Button 
        onClick={handleSearch}
        className="bg-[#9c7a5b] hover:bg-[#8b6a4d] text-white"
      >
        Buscar
      </Button>
    </div>
  )
}
