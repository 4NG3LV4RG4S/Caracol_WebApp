import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#e6ccb2]/30 border-t border-[#e6ccb2]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-[#9c7a5b] mb-4">Café Especial</h3>
            <p className="text-muted-foreground mb-4">
              Café de especialidad, seleccionado con cuidado para ofrecerte la mejor experiencia en cada taza. Del
              origen a tu mesa, con amor y dedicación.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors"
              >
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9c7a5b] hover:text-[#a8d5ba] transition-colors"
              >
                <Twitter />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#9c7a5b] mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#a8d5ba] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-muted-foreground hover:text-[#a8d5ba] transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-muted-foreground hover:text-[#a8d5ba] transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-[#a8d5ba] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-[#a8d5ba] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#9c7a5b] mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/productos?categoria=cafe"
                  className="text-muted-foreground hover:text-[#a8d5ba] transition-colors"
                >
                  Café en grano
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?categoria=cafe-molido"
                  className="text-muted-foreground hover:text-[#a8d5ba] transition-colors"
                >
                  Café molido
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?categoria=licor"
                  className="text-muted-foreground hover:text-[#a8d5ba] transition-colors"
                >
                  Licor de café
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?categoria=mermelada"
                  className="text-muted-foreground hover:text-[#a8d5ba] transition-colors"
                >
                  Mermelada de café
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?categoria=dulces"
                  className="text-muted-foreground hover:text-[#a8d5ba] transition-colors"
                >
                  Bombones y dulces
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#9c7a5b] mb-4">Contacto</h3>
            <address className="not-italic text-muted-foreground">
              <p>Calle Café #123</p>
              <p>Ciudad de México, México</p>
              <p className="mt-4">Email: info@cafeespecial.com</p>
              <p>Teléfono: +52 55 1234 5678</p>
            </address>
          </div>
        </div>

        <div className="border-t border-[#e6ccb2] mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Café Especial. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

