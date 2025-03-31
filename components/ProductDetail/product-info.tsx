import { Check, Coffee, Leaf, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type ProductInfoProps = {
  name: string
  category: string
  price: number
  origin?: string
  altitude?: string
  process?: string
  variety?: string
  flavor_notes?: string[]
  roast_level?: string
  isNew?: boolean
  isBestSeller?: boolean
  isOrganic?: boolean
  isFairTrade?: boolean
}

export default function ProductInfo({
  name,
  category,
  price,
  origin,
  altitude,
  process,
  variety,
  flavor_notes,
  roast_level,
  isNew,
  isBestSeller,
  isOrganic,
  isFairTrade,
}: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {/* Category and Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-[#a8d5ba]">{category}</span>
        <div className="flex flex-wrap gap-2">
          {isNew && <Badge className="bg-[#a8d5ba] hover:bg-[#98c5aa] text-white border-none">Nuevo</Badge>}
          {isBestSeller && (
            <Badge className="bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white border-none">Más Vendido</Badge>
          )}
          {isOrganic && (
            <Badge className="bg-[#c9d4b8] hover:bg-[#b9c4a8] text-[#4a5c30] border-none">
              <Leaf className="h-3 w-3 mr-1" />
              Orgánico
            </Badge>
          )}
          {isFairTrade && (
            <Badge className="bg-[#e6ccb2] hover:bg-[#d6bca2] text-[#9c7a5b] border-none">
              <Award className="h-3 w-3 mr-1" />
              Comercio Justo
            </Badge>
          )}
        </div>
      </div>

      {/* Name and Price */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#9c7a5b]">{name}</h1>
        <div className="mt-2 text-2xl font-bold text-[#9c7a5b]">${price.toFixed(2)}</div>
      </div>

      {/* Coffee Characteristics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f7f3e9] p-4 rounded-lg border border-[#e6ccb2]">
        {origin && (
          <div className="flex items-start">
            <Coffee className="h-5 w-5 text-[#9c7a5b] mr-2 mt-0.5" />
            <div>
              <span className="block text-sm font-medium text-[#9c7a5b]">Origen</span>
              <span className="block text-muted-foreground">{origin}</span>
            </div>
          </div>
        )}
        {altitude && (
          <div className="flex items-start">
            <Coffee className="h-5 w-5 text-[#9c7a5b] mr-2 mt-0.5" />
            <div>
              <span className="block text-sm font-medium text-[#9c7a5b]">Altitud</span>
              <span className="block text-muted-foreground">{altitude}</span>
            </div>
          </div>
        )}
        {process && (
          <div className="flex items-start">
            <Coffee className="h-5 w-5 text-[#9c7a5b] mr-2 mt-0.5" />
            <div>
              <span className="block text-sm font-medium text-[#9c7a5b]">Proceso</span>
              <span className="block text-muted-foreground">{process}</span>
            </div>
          </div>
        )}
        {variety && (
          <div className="flex items-start">
            <Coffee className="h-5 w-5 text-[#9c7a5b] mr-2 mt-0.5" />
            <div>
              <span className="block text-sm font-medium text-[#9c7a5b]">Variedad</span>
              <span className="block text-muted-foreground">{variety}</span>
            </div>
          </div>
        )}
        {roast_level && (
          <div className="flex items-start">
            <Coffee className="h-5 w-5 text-[#9c7a5b] mr-2 mt-0.5" />
            <div>
              <span className="block text-sm font-medium text-[#9c7a5b]">Nivel de tueste</span>
              <span className="block text-muted-foreground">{roast_level}</span>
            </div>
          </div>
        )}
      </div>

      {/* Flavor Notes */}
      {flavor_notes && flavor_notes.length > 0 && (
        <div>
          <h3 className="text-lg font-medium text-[#9c7a5b] mb-2">Notas de sabor</h3>
          <div className="flex flex-wrap gap-2">
            {flavor_notes.map((note, index) => (
              <Badge key={index} variant="outline" className="bg-white border-[#e6ccb2] text-[#9c7a5b]">
                {note}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Key Features */}
      <div>
        <h3 className="text-lg font-medium text-[#9c7a5b] mb-2">Características</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-[#a8d5ba] mr-2 mt-0.5" />
            <span className="text-muted-foreground">Café de especialidad seleccionado a mano</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-[#a8d5ba] mr-2 mt-0.5" />
            <span className="text-muted-foreground">Tostado artesanal en pequeños lotes</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-[#a8d5ba] mr-2 mt-0.5" />
            <span className="text-muted-foreground">Empaque con válvula para mantener la frescura</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-[#a8d5ba] mr-2 mt-0.5" />
            <span className="text-muted-foreground">Fecha de tueste impresa en cada paquete</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

