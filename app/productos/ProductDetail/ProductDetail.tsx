import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductCarousel from "@/components/ProductDetail/product-carousel"
import ProductInfo from "@/components/ProductDetail/product-info"
import ProductPurchase from "@/components/ProductDetail/product-purchase"
import { Separator } from "@/components/ui/separator"

// Datos de ejemplo para los productos
const productsData = {
  "cafe-lavado": {
    id: "cafe-lavado",
    name: "Café Lavado Premium",
    category: "Café en grano",
    price: 220,
    description: `
      <p>Nuestro Café Lavado Premium es una joya de la región de Chiapas, México, cultivado a una altitud de 1,500-1,800 metros sobre el nivel del mar. Este café de especialidad ha sido cuidadosamente seleccionado y procesado mediante el método de lavado, que resalta su perfil limpio y brillante.</p>
      
      <p>El proceso de lavado consiste en remover completamente el mucílago del grano después de la despulpación, lo que permite que las características intrínsecas del grano se expresen con mayor claridad. Después de la cosecha selectiva, donde solo se recolectan los frutos en su punto óptimo de maduración, los granos pasan por un riguroso control de calidad antes de ser tostados artesanalmente en pequeños lotes.</p>
      
      <p>Este café destaca por su equilibrio perfecto entre acidez y dulzor, con un cuerpo medio-alto y una textura sedosa. En taza, revela notas predominantes de chocolate negro, complementadas por toques de frutos rojos como cereza y frambuesa, con un sutil final a caramelo.</p>
      
      <p>Ideal para disfrutar en métodos de filtro como V60, Chemex o Aeropress, donde sus matices pueden apreciarse plenamente. También ofrece una excelente experiencia en espresso, desarrollando un cuerpo cremoso con notas intensificadas de chocolate.</p>
    `,
    origin: "Chiapas, México",
    altitude: "1,500-1,800 msnm",
    process: "Lavado",
    variety: "Bourbon, Typica",
    flavor_notes: ["Chocolate negro", "Cereza", "Frambuesa", "Caramelo"],
    roast_level: "Medio",
    isNew: true,
    isBestSeller: false,
    isOrganic: true,
    isFairTrade: true,
    isGrindable: true,
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Café Lavado Premium - Vista principal",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Café Lavado Premium - Granos de café",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Café Lavado Premium - Empaque",
      },
      {
        id: 4,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Café Lavado Premium - Preparación",
      },
    ],
  },
  "cafe-honey": {
    id: "cafe-honey",
    name: "Café Honey Process",
    category: "Café en grano",
    price: 250,
    description: `
      <p>Nuestro Café Honey Process representa la perfecta fusión entre tradición e innovación en el mundo del café. Cultivado en las montañas de Veracruz a una altitud de 1,600-1,900 metros sobre el nivel del mar, este café especial se distingue por su método de procesamiento único que le confiere características extraordinarias.</p>
      
      <p>El proceso honey, también conocido como semi-lavado o pulped natural, consiste en retirar la cáscara del fruto pero conservar parte del mucílago (la capa dulce y pegajosa que rodea el grano) durante el secado. Este mucílago rico en azúcares fermenta naturalmente y es absorbido por el grano, resultando en un perfil de sabor distintivo que combina la limpieza de un café lavado con la dulzura y cuerpo de un natural.</p>
      
      <p>Dependiendo de la cantidad de mucílago que se deja en el grano, nuestro proceso honey se clasifica como "honey amarillo", un punto intermedio que permite un equilibrio perfecto entre dulzor y acidez. Los granos se secan cuidadosamente en camas africanas elevadas, con rotación constante para garantizar un secado uniforme.</p>
      
      <p>En taza, este café revela una dulzura natural prominente con notas de caramelo y miel, complementadas por toques de frutas tropicales como piña y mango. Su cuerpo es sedoso y redondo, con una acidez brillante pero equilibrada y un final prolongado con reminiscencias a frutos secos.</p>
      
      <p>Este café versátil brilla especialmente en métodos como Chemex y V60, donde su complejidad puede apreciarse plenamente, pero también ofrece una experiencia excepcional en espresso y métodos de inmersión como la prensa francesa.</p>
    `,
    origin: "Veracruz, México",
    altitude: "1,600-1,900 msnm",
    process: "Honey (Amarillo)",
    variety: "Caturra, Bourbon",
    flavor_notes: ["Caramelo", "Miel", "Piña", "Mango", "Frutos secos"],
    roast_level: "Medio",
    isNew: false,
    isBestSeller: true,
    isOrganic: true,
    isFairTrade: true,
    isGrindable: true,
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Café Honey Process - Vista principal",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Café Honey Process - Granos de café",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Café Honey Process - Empaque",
      },
      {
        id: 4,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Café Honey Process - Proceso de secado",
      },
    ],
  },
  "licor-cafe": {
    id: "licor-cafe",
    name: "Licor de Café Artesanal",
    category: "Licores",
    price: 180,
    description: `
      <p>Nuestro Licor de Café Artesanal es una creación exclusiva que captura la esencia y los aromas de nuestro café de especialidad en una experiencia líquida indulgente. Elaborado meticulosamente en pequeños lotes, este licor representa la perfecta fusión entre la tradición licorera y nuestra pasión por el café.</p>
      
      <p>El proceso de elaboración comienza con una infusión de nuestros granos de café premium recién tostados en una base de alcohol neutro de alta calidad. Esta infusión se realiza a temperatura controlada durante varias semanas, permitiendo que los aceites esenciales y compuestos aromáticos del café se integren completamente con el alcohol.</p>
      
      <p>Posteriormente, la mezcla se filtra cuidadosamente y se endulza ligeramente con azúcar de caña natural, logrando un equilibrio perfecto entre la intensidad del café, la calidez del alcohol y un dulzor sutil que realza los sabores sin dominarlos.</p>
      
      <p>El resultado es un licor de color ámbar oscuro con reflejos caoba, que ofrece un aroma intenso a café recién preparado con notas de vainilla, chocolate y un sutil toque de caramelo. En boca, presenta un cuerpo aterciopelado y una textura sedosa, con un sabor intenso pero equilibrado que combina la robustez del café con dulces matices de especias y un final largo y cálido.</p>
      
      <p>Este licor versátil puede disfrutarse solo, con hielo, como parte de cócteles sofisticados o como acompañamiento para postres. También constituye un regalo excepcional para los amantes del café y los espíritus finos.</p>
    `,
    origin: "Elaborado en México",
    process: "Infusión y maceración",
    flavor_notes: ["Café intenso", "Vainilla", "Chocolate", "Caramelo", "Especias"],
    isNew: false,
    isBestSeller: true,
    isOrganic: false,
    isFairTrade: true,
    isGrindable: false,
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Licor de Café Artesanal - Botella",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Licor de Café Artesanal - Servido en copa",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Licor de Café Artesanal - Detalle de etiqueta",
      },
    ],
  },
  "mermelada-cafe": {
    id: "mermelada-cafe",
    name: "Mermelada de Café",
    category: "Derivados",
    price: 120,
    description: `
      <p>Nuestra Mermelada de Café es una creación gourmet única que transforma la experiencia del café en un delicioso untable. Elaborada artesanalmente en pequeños lotes, esta mermelada combina la intensidad aromática del café con la dulzura natural de las frutas y especias seleccionadas.</p>
      
      <p>El proceso de elaboración comienza con una infusión concentrada de nuestro café de especialidad, que se combina con pulpa de manzana, azúcar de caña orgánica y un toque de canela y cardamomo. La mezcla se cocina lentamente hasta alcanzar la consistencia perfecta, permitiendo que los sabores se integren armoniosamente.</p>
      
      <p>El resultado es una mermelada de textura suave con pequeños trozos de fruta, color ámbar oscuro y un aroma cautivador que combina las notas tostadas del café con matices frutales y especiados. En paladar, ofrece un equilibrio perfecto entre dulzor y amargor, con la complejidad aromática del café complementada por la frescura de la fruta y la calidez de las especias.</p>
      
      <p>Esta versátil mermelada es perfecta para acompañar tostadas, panqueques o waffles en el desayuno, como complemento para quesos en una tabla de aperitivos, o como ingrediente sorprendente en repostería y postres. También constituye un regalo original para los amantes de la gastronomía y el café.</p>
    `,
    origin: "Elaborado en México",
    process: "Cocción artesanal",
    flavor_notes: ["Café", "Manzana", "Canela", "Cardamomo", "Caramelo"],
    isNew: true,
    isBestSeller: false,
    isOrganic: true,
    isFairTrade: false,
    isGrindable: false,
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Mermelada de Café - Frasco",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Mermelada de Café - Servida en tostada",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=600&width=600",
        alt: "Mermelada de Café - Detalle de textura",
      },
    ],
  },
}

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = productsData[params.id]

  if (!product) {
    return {
      title: "Producto no encontrado | Café Especial",
      description: "El producto que buscas no existe o ha sido removido.",
    }
  }

  return {
    title: `${product.name} | Café Especial`,
    description: `Descubre nuestro ${product.name}. ${product.description.substring(0, 150).replace(/<\/?p>/g, "")}...`,
  }
}

export default function ProductPage({ params }: Props) {
  const product = productsData[params.id]

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div>
          <ProductCarousel images={product.images} />
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <ProductInfo
            name={product.name}
            category={product.category}
            price={product.price}
            origin={product.origin}
            altitude={product.altitude}
            process={product.process}
            variety={product.variety}
            flavor_notes={product.flavor_notes}
            roast_level={product.roast_level}
            isNew={product.isNew}
            isBestSeller={product.isBestSeller}
            isOrganic={product.isOrganic}
            isFairTrade={product.isFairTrade}
          />

          <Separator className="bg-[#e6ccb2]" />

          <ProductPurchase productId={product.id} isGrindable={product.isGrindable} />
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-[#9c7a5b] mb-6">Descripción del producto</h2>
        <div
          className="prose prose-stone max-w-none text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>

      {/* Related Products */}
      {/* <RelatedProducts currentProductId={product.id} category={product.category} /> */}
    </div>
  )
}

