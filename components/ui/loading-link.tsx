"use client"

import { useRouter } from "next/navigation"
import { ReactNode, MouseEvent, useEffect } from "react"
import { useLoading } from "@/contexts/LoadingContext"
import { usePathname } from "next/navigation"

interface LoadingLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  replace?: boolean
}

export default function LoadingLink({ 
  href, 
  children, 
  className = "", 
  onClick,
  replace = false 
}: LoadingLinkProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { startLoading, stopLoading } = useLoading()

  // Stop loading when pathname changes (navigation complete)
  useEffect(() => {
    stopLoading()
  }, [pathname, stopLoading])

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Execute custom onClick if provided
    if (onClick) {
      onClick()
    }
    
    // Don't show loading for same page or anchor links
    if (href === pathname || href.startsWith('#')) {
      if (replace) {
        router.replace(href)
      } else {
        router.push(href)
      }
      return
    }
    
    // Start loading animation
    startLoading()
    
    // Navigate after a small delay to ensure loading animation starts
    setTimeout(() => {
      if (replace) {
        router.replace(href)
      } else {
        router.push(href)
      }
    }, 100)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`cursor-pointer transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  )
}
