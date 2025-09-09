import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingProvider } from "@/contexts/LoadingContext"
import LoadingWrapper from "@/components/LoadingWrapper"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Café Especial | Café de Especialidad y Productos Derivados",
  description:
    "Tienda de café de especialidad con granos selectos, métodos de extracción y productos derivados del café como licores, mermeladas y más.",
    generator: 'v0.dev'
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <LoadingWrapper />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </LoadingProvider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen bg-[#f7f3e9]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  )
}


