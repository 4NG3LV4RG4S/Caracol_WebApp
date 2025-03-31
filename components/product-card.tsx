import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type ProductCardProps = {
  id: string
  code: string
  name: string
  productDescription: string
  productPresent: string
  productPrice: number
  imageUrl: string
  categoryName: string
  isNewProduct?: boolean
  isBestSeller?: boolean
}

export default function ProductCard({
  id,
  name,
  productDescription,
  productPresent,
  productPrice,
  imageUrl,
  categoryName,
  isNewProduct = false,
  isBestSeller = false,
}: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow bg-white border-[#e6ccb2]">
      <div className="relative">
        <div className="relative w-full pt-[100%] overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
        {(isNewProduct || isBestSeller) && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNewProduct && <Badge className="bg-[#a8d5ba] hover:bg-[#98c5aa] text-white border-none">Nuevo</Badge>}
            {isBestSeller && (
              <Badge className="bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white border-none">Más Vendido</Badge>
            )}
          </div>
        )}
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="text-xs text-[#a8d5ba] font-medium uppercase mb-1">{categoryName}</div>
        <CardTitle className="text-xl text-[#9c7a5b]">{name}</CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-3">{productPresent}</p>
        <CardDescription className="text-lg font-bold text-[#9c7a5b]">${productPrice.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">{productDescription}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full flex gap-2">
          <Button asChild className="flex-1 bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white">
            <Link href={`/productos/${id}`}>Ver detalle</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

