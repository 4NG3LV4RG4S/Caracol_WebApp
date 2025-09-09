"use client"

import { useLoading } from "@/contexts/LoadingContext"
import LoadingOverlay from "@/components/ui/loading-overlay"

export default function LoadingWrapper() {
  const { isLoading } = useLoading()
  
  return <LoadingOverlay isLoading={isLoading} />
}
