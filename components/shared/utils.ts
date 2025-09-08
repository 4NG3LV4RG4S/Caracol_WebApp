// Shared utility functions for Caracol WebApp

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency for Colombian Pesos
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

// Format date for Spanish locale
export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  
  return new Intl.DateTimeFormat('es-ES', { ...defaultOptions, ...options }).format(date)
}

// Format time ago (e.g., "hace 2 horas")
export function formatTimeAgo(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) return "Hace menos de 1 minuto"
  
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) return `Hace ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`
  
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`
  
  const diffInWeeks = Math.floor(diffInDays / 7)
  if (diffInWeeks < 4) return `Hace ${diffInWeeks} semana${diffInWeeks > 1 ? 's' : ''}`
  
  return formatDate(date)
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}

// Generate initials from name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone format (Colombian)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+57|57)?[1-9]\d{9}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Generate slug from text
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

// Calculate reading time (words per minute)
export function calculateReadingTime(text: string, wpm: number = 200): number {
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wpm)
}

// Get category color class
export function getCategoryColor(category: string): string {
  const colors: { [key: string]: string } = {
    "café": "bg-amber-100 text-amber-800",
    "espresso": "bg-amber-100 text-amber-800",
    "recetas": "bg-green-100 text-green-800",
    "filtrado": "bg-blue-100 text-blue-800",
    "eventos": "bg-blue-100 text-blue-800",
    "frio": "bg-cyan-100 text-cyan-800",
    "cultura": "bg-purple-100 text-purple-800",
    "especial": "bg-purple-100 text-purple-800",
    "sostenibilidad": "bg-emerald-100 text-emerald-800",
    "empresa": "bg-gray-100 text-gray-800",
    "workshop": "bg-blue-100 text-blue-800",
    "tasting": "bg-amber-100 text-amber-800",
    "meetup": "bg-green-100 text-green-800",
    "competition": "bg-red-100 text-red-800",
    "course": "bg-purple-100 text-purple-800"
  }
  return colors[category.toLowerCase()] || "bg-gray-100 text-gray-800"
}

// Get role color class
export function getRoleColor(role: string): string {
  const colors: { [key: string]: string } = {
    "moderator": "bg-blue-100 text-blue-800",
    "expert": "bg-purple-100 text-purple-800",
    "barista": "bg-amber-100 text-amber-800",
    "member": "bg-gray-100 text-gray-800"
  }
  return colors[role.toLowerCase()] || "bg-gray-100 text-gray-800"
}

// Get badge rarity color
export function getBadgeRarityColor(rarity: string): string {
  const colors: { [key: string]: string } = {
    "legendary": "bg-gradient-to-r from-yellow-400 to-orange-500",
    "epic": "bg-gradient-to-r from-purple-400 to-pink-500",
    "rare": "bg-gradient-to-r from-blue-400 to-indigo-500",
    "common": "bg-gradient-to-r from-gray-400 to-gray-500"
  }
  return colors[rarity.toLowerCase()] || "bg-gradient-to-r from-gray-400 to-gray-500"
}

// Debounce function for search inputs
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Local storage helpers
export const storage = {
  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  },
  
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Handle storage errors silently
    }
  },
  
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  }
}

// Array utility functions
export const arrayUtils = {
  // Remove duplicates from array
  unique: <T>(array: T[]): T[] => [...new Set(array)],
  
  // Group array by key
  groupBy: <T, K extends keyof T>(array: T[], key: K): Record<string, T[]> => {
    return array.reduce((groups, item) => {
      const group = String(item[key])
      groups[group] = groups[group] || []
      groups[group].push(item)
      return groups
    }, {} as Record<string, T[]>)
  },
  
  // Shuffle array
  shuffle: <T>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
}
