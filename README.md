# Caracol WebApp

Aplicación web de café especializado construida con Next.js 15, TypeScript y Clean Architecture.

## 🏗️ Arquitectura

Este proyecto implementa **Clean Architecture** con principios **SOLID**, organizando el código en capas bien definidas:

### 📁 Estructura de Capas

```
src/
├── domain/                 # Capa de Dominio
│   ├── entities/          # Entidades del negocio
│   └── repositories/      # Interfaces de repositorios
├── application/           # Capa de Aplicación
│   └── services/         # Servicios de aplicación
├── infrastructure/       # Capa de Infraestructura
│   ├── config/          # Configuraciones
│   ├── di/              # Inyección de dependencias
│   ├── http/            # Cliente HTTP
│   └── repositories/    # Implementaciones de repositorios
└── presentation/         # Capa de Presentación
    ├── components/      # Componentes reutilizables
    └── hooks/          # Hooks personalizados
```

### 🎯 Principios Implementados

- **Single Responsibility Principle (SRP)**: Cada clase tiene una única responsabilidad
- **Open/Closed Principle (OCP)**: Abierto para extensión, cerrado para modificación
- **Liskov Substitution Principle (LSP)**: Las implementaciones son intercambiables
- **Interface Segregation Principle (ISP)**: Interfaces específicas y cohesivas
- **Dependency Inversion Principle (DIP)**: Dependencias hacia abstracciones

## 🚀 Características

- ✅ **Clean Architecture** con separación de capas
- ✅ **Inyección de Dependencias** con ServiceContainer
- ✅ **Manejo de errores centralizado** con ErrorBoundary
- ✅ **Estados de carga** con componentes reutilizables
- ✅ **Hooks personalizados** para lógica de negocio
- ✅ **Tipos TypeScript** estrictos
- ✅ **Componentes reutilizables** con Radix UI
- ✅ **Responsive design** con Tailwind CSS

## 🛠️ Tecnologías

- **Next.js 15** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Radix UI** - Componentes primitivos
- **Axios** - Cliente HTTP
- **Lucide React** - Iconos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🏛️ Patrones de Diseño

### Repository Pattern
```typescript
interface IProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
}
```

### Service Layer
```typescript
class ProductService {
  constructor(private readonly productRepository: IProductRepository) {}
  
  async getAllProducts(): Promise<Product[]> {
    // Lógica de negocio
  }
}
```

### Dependency Injection
```typescript
const productService = ServiceContainer.getInstance()
  .get<ProductService>('ProductService');
```

## 🎨 Componentes

### Hooks Personalizados
- `useProducts()` - Gestión de productos
- `useFeaturedProducts()` - Productos destacados
- `useNews()` - Gestión de noticias
- `useLatestNews()` - Últimas noticias

### Componentes de UI
- `LoadingSpinner` - Indicador de carga
- `ErrorMessage` - Mensajes de error
- `ErrorBoundary` - Manejo de errores React

## 🔧 Configuración

### API Configuration
```typescript
export const API_CONFIG = {
  BASE_URL: 'https://webservice.caracolillo.net/',
  ENDPOINTS: {
    PRODUCTS: {
      GET_ALL: '/api/Product/GetAllProductsAsync',
      GET_TOP_SUGGESTED: '/api/Product/GetTopSuggestedProducts',
    }
  }
};
```

## 📝 Mejoras Implementadas

1. **Eliminación de código duplicado** - Interfaces centralizadas
2. **Separación de responsabilidades** - Cada capa tiene su propósito
3. **Manejo de errores mejorado** - Estados de error consistentes
4. **Inyección de dependencias** - Acoplamiento reducido
5. **Hooks reutilizables** - Lógica compartida
6. **Componentes de UI consistentes** - Experiencia uniforme

## 🎯 Próximos Pasos

- [ ] Implementar tests unitarios
- [ ] Agregar validación con Zod
- [ ] Implementar cache con React Query
- [ ] Añadir autenticación
- [ ] Optimizar rendimiento con React.memo
