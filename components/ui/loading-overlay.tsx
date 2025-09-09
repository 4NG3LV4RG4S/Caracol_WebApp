"use client"

import { useEffect, useState } from "react"

interface LoadingOverlayProps {
  isLoading: boolean
}

const RotatingCoffee = () => (
  <div className="relative">
    {/* Coffee Cup SVG with rotation animation */}
    <div className="animate-spin-slow">
      <svg
        width="80"
        height="80"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Coffee Cup */}
        <path
          d="M80 120 L80 220 Q80 240 100 240 L200 240 Q220 240 220 220 L220 120 Z"
          fill="#9c7a5b"
          stroke="#8c6a4b"
          strokeWidth="3"
        />
        
        {/* Coffee Surface */}
        <ellipse cx="150" cy="120" rx="70" ry="8" fill="#6b4423" />
        
        {/* Handle */}
        <path
          d="M220 140 Q250 140 250 170 Q250 200 220 200"
          stroke="#9c7a5b"
          strokeWidth="8"
          fill="none"
        />
        
        {/* Saucer */}
        <ellipse cx="150" cy="250" rx="90" ry="12" fill="#a8d5ba" />
        <ellipse cx="150" cy="248" rx="90" ry="12" fill="#9bc5a8" />
        
        {/* Steam Animation */}
        <g className="animate-pulse">
          <path
            d="M130 110 Q135 100 130 90 Q125 80 130 70"
            stroke="#e6ccb2"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M150 110 Q155 100 150 90 Q145 80 150 70"
            stroke="#e6ccb2"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M170 110 Q175 100 170 90 Q165 80 170 70"
            stroke="#e6ccb2"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      </svg>
    </div>
    
    {/* Floating coffee beans around the cup */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 animate-float-1">
        <div className="w-3 h-5 bg-[#8c6a4b] rounded-full transform rotate-12" />
      </div>
      <div className="absolute top-4 right-2 animate-float-2">
        <div className="w-2 h-4 bg-[#8c6a4b] rounded-full transform -rotate-45" />
      </div>
      <div className="absolute bottom-2 left-4 animate-float-3">
        <div className="w-2.5 h-4 bg-[#8c6a4b] rounded-full transform rotate-30" />
      </div>
      <div className="absolute bottom-0 right-0 animate-float-1">
        <div className="w-2 h-3 bg-[#8c6a4b] rounded-full transform -rotate-12" />
      </div>
    </div>
  </div>
)

export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true)
    } else {
      // Delay hiding to allow for smooth transition
      const timer = setTimeout(() => setShowLoading(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  if (!showLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-500 ease-out ${
        isLoading 
          ? "opacity-100 backdrop-blur-md" 
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background overlay with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-[#f7f3e9]/40 to-[#e6ccb2]/60" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#9c7a5b] animate-pulse" />
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full bg-[#a8d5ba] animate-pulse delay-300" />
        <div className="absolute bottom-20 left-20 w-28 h-28 rounded-full bg-[#9c7a5b] animate-pulse delay-700" />
        <div className="absolute bottom-40 right-10 w-20 h-20 rounded-full bg-[#a8d5ba] animate-pulse delay-1000" />
      </div>
      
      {/* Loading content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6">
          
          {/* Rotating coffee animation */}
          <div className="flex justify-center">
            <RotatingCoffee />
          </div>
          
          {/* Loading text */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#6b4423] animate-pulse">
              Cargando...
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
