import ProductCard from "@/components/product-card"
import SectionTitle from "@/components/section-title"

type RelatedProductsProps = {
  currentProductId: string
  category: string
}

// Datos de ejemplo para productos relacionados
const allProducts = [
  {
    id: "cafe-lavado",
    name: "Café Lavado Premium",
    description: "Café de especialidad con proceso lavado, notas de chocolate y frutos rojos.",
    price: 220,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: true,
    isBestSeller: false,
  },
  {
    id: "cafe-honey",
    name: "Café Honey Process",
    description: "Proceso honey que conserva parte del mucílago, logrando notas dulces de caramelo.",
    price: 250,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "cafe-natural",
    name: "Café Natural Etiopía",
    description: "Proceso natural con intensas notas frutales y florales características de Etiopía.",
    price: 280,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: true,
    isBestSeller: false,
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
    description: "Mezcla especial para máquinas de espresso, con cuerpo intenso y notas de chocolate.",
    price: 230,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Café en grano",
    isNew: false,
    isBestSeller: false,
  },
  {
    id: "licor-cafe",
    name: "Licor de Café Artesanal",
    description: "Delicioso licor elaborado con nuestro café de especialidad.",
    price: 180,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Licores",
    isNew: false,
    isBestSeller: true,
  },
  {
    id: "mermelada-cafe",
    name: "Mermelada de Café",
    description: "Irresistible mermelada artesanal elaborada con nuestro café.",
    price: 120,
    imageUrl: "/placeholder.svg?height=500&width=500",
    category: "Derivados",
    isNew: true,
    isBestSeller: false,
  },
]

// export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
//   // Filtrar productos relacionados (misma categoría, pero no el producto actual)
//   const relatedProducts = allProducts
//     .filter((product) => product.category === category && product.id !== currentProductId)
//     .slice(0, 4) // Limitar a 4 productos

//   if (relatedProducts.length === 0) {
//     return null
//   }

//   return (
//     <section className="mt-16">
//       <SectionTitle title="Productos relacionados" subtitle="También te pueden interesar" />

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
//         {relatedProducts.map((product) => (
//           //<ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </section>
//   )
// }

