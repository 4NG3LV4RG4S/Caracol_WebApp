import ProductCard from "@/components/product-card"
import SectionTitle from "@/components/section-title"

// Datos de ejemplo de productos
const products = [
  {
    id: "cafe-lavado",
    name: "Café Lavado Premium",
    description:
      "Café de especialidad con proceso lavado, notas de chocolate y frutos rojos. Ideal para métodos de filtro.",
    price: 220,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "cafe-honey",
    name: "Café Honey Process",
    description:
      "Proceso honey que conserva parte del mucílago, logrando notas dulces de caramelo y frutas tropicales.",
    price: 250,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "cafe-molido-premium",
    name: "Café Molido Premium",
    description: "Nuestro café premium, molido a punto para cafetera italiana o prensa francesa.",
    price: 200,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café molido",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "cafe-espresso",
    name: "Blend para Espresso",
    description: "Mezcla especial para máquinas de espresso, con cuerpo intenso y notas de chocolate amargo.",
    price: 230,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: false,
    isBestSeller: false,
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
  {
    id: "bombones-cafe",
    name: "Bombones de Café",
    description:
      "Deliciosos bombones rellenos de ganache de café. Una explosión de sabor para los amantes del chocolate y el café.",
    price: 150,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Dulces",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "crema-cafe",
    name: "Crema de Café",
    description:
      "Crema para untar con intenso sabor a café. Perfecta para acompañar pan, galletas o para utilizar en repostería.",
    price: 140,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Derivados",
    isNew: true,
    isBestSeller: false,
  },
]

export default function ProductosPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <SectionTitle
        title="Nuestros Productos"
        subtitle="Descubre nuestra selección de café y productos derivados"
        centered={true}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

