"use client"

import { ReactNode, MouseEvent } from "react"
import { useLoading } from "@/contexts/LoadingContext"
import { Button } from "@/components/ui/button"

interface LoadingButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}

export default function LoadingButton({ 
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  asChild = false,
  disabled = false,
  type = "button",
  ...props
}: LoadingButtonProps) {
  const { startLoading } = useLoading()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    
    // Start loading animation
    startLoading()
    
    // Execute custom onClick if provided
    if (onClick) {
      setTimeout(() => {
        onClick()
      }, 100)
    }
  }

  return (
    <Button
      onClick={handleClick}
      className={className}
      variant={variant}
      size={size}
      asChild={asChild}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </Button>
  )
}
