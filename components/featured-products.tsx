import ProductCard from "./product-card"
import SectionTitle from "./section-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredProducts = [
  {
    id: "cafe-lavado",
    name: "Café Lavado",
    description:
      "Café de especialidad con proceso lavado, notas de chocolate y frutos rojos.",
    price: 220,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "cafe-honey",
    name: "Café Honey Rojo",
    description:
      "Proceso honey que conserva parte del mucílago, logrando notas dulces de caramelo y frutas tropicales.",
    price: 250,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "licor-cafe",
    name: "Licor de Café Artesanal",
    description:
      "Delicioso licor elaborado con nuestro café de especialidad. Perfecto para después de la cena o para regalar a amantes del café.",
    price: 180,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Licores",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "mermelada-cafe",
    name: "Mermelada de Café",
    description:
      "Irresistible mermelada artesanal elaborada con nuestro café. Ideal para acompañar postres o para el desayuno.",
    price: 120,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Derivados",
    isNew: true,
    isBestSeller: false,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Café y Derivados"
          subtitle="Descubre nuestros productos"
          centered={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-[#9c7a5b] hover:bg-[#8c6a4b] text-white">
            <Link href="/productos">Ver todos los productos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

