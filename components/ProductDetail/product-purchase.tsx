"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, ShoppingCart } from "lucide-react"

type ProductPurchaseProps = {
  productId: string
  isGrindable?: boolean
}

export default function ProductPurchase({ productId, isGrindable = true }: ProductPurchaseProps) {
  const [quantity, setQuantity] = useState("1")
  const [grindType, setGrindType] = useState(isGrindable ? "whole-bean" : "")

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div className="space-y-2">
        <Label htmlFor="quantity" className="text-[#9c7a5b]">
          Cantidad
        </Label>
        <Select value={quantity} onValueChange={setQuantity}>
          <SelectTrigger id="quantity" className="w-full border-[#e6ccb2]">
            <SelectValue placeholder="Seleccionar cantidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Grind Type Selector (only for coffee) */}
      {isGrindable && (
        <div className="space-y-2">
          <Label className="text-[#9c7a5b]">Tipo de molienda</Label>
          <RadioGroup value={grindType} onValueChange={setGrindType} className="grid grid-cols-1 gap-2">
            <Label
              htmlFor="whole-bean"
              className="flex items-center space-x-2 border border-[#e6ccb2] rounded-md p-3 cursor-pointer transition-colors hover:bg-[#f7f3e9] [&:has(:checked)]:bg-[#f7f3e9] [&:has(:checked)]:border-[#9c7a5b]"
            >
              <RadioGroupItem id="whole-bean" value="whole-bean" />
              <div className="space-y-1">
                <span className="font-medium text-[#9c7a5b]">Grano entero</span>
                <p className="text-xs text-muted-foreground">Para moler en casa según tu método de preparación</p>
              </div>
            </Label>
            <Label
              htmlFor="espresso"
              className="flex items-center space-x-2 border border-[#e6ccb2] rounded-md p-3 cursor-pointer transition-colors hover:bg-[#f7f3e9] [&:has(:checked)]:bg-[#f7f3e9] [&:has(:checked)]:border-[#9c7a5b]"
            >
              <RadioGroupItem id="espresso" value="espresso" />
              <div className="space-y-1">
                <span className="font-medium text-[#9c7a5b]">Espresso</span>
                <p className="text-xs text-muted-foreground">Molienda fina para máquinas de espresso</p>
              </div>
            </Label>
            <Label
              htmlFor="filter"
              className="flex items-center space-x-2 border border-[#e6ccb2] rounded-md p-3 cursor-pointer transition-colors hover:bg-[#f7f3e9] [&:has(:checked)]:bg-[#f7f3e9] [&:has(:checked)]:border-[#9c7a5b]"
            >
              <RadioGroupItem id="filter" value="filter" />
              <div className="space-y-1">
                <span className="font-medium text-[#9c7a5b]">Filtro</span>
                <p className="text-xs text-muted-foreground">Para métodos de goteo, V60, Chemex, etc.</p>
              </div>
            </Label>
            <Label
              htmlFor="french-press"
              className="flex items-center space-x-2 border border-[#e6ccb2] rounded-md p-3 cursor-pointer transition-colors hover:bg-[#f7f3e9] [&:has(:checked)]:bg-[#f7f3e9] [&:has(:checked)]:border-[#9c7a5b]"
            >
              <RadioGroupItem id="french-press" value="french-press" />
              <div className="space-y-1">
                <span className="font-medium text-[#9c7a5b]">Prensa Francesa</span>
                <p className="text-xs text-muted-foreground">Molienda gruesa para prensa francesa o cold brew</p>
              </div>
            </Label>
          </RadioGroup>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="flex-1 bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Añadir al carrito
        </Button>
        <Button variant="outline" className="border-[#9c7a5b] text-[#9c7a5b] hover:bg-[#9c7a5b]/10">
          <Heart className="h-4 w-4 mr-2" />
          Añadir a favoritos
        </Button>
      </div>
    </div>
  )
}

