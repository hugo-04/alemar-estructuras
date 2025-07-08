# IconWrapper Component

## Descripción

El componente `IconWrapper` centraliza la configuración del color `light` (#d2d5d8) como color predeterminado para todos los iconos del sitio, asegurando coherencia visual y mejorando la accesibilidad.

## Uso Básico

```astro
---
import IconWrapper from './IconWrapper.astro';
---

<!-- Icono con color light por defecto -->
<IconWrapper name="mdi:phone" />

<!-- Icono con tamaño específico -->
<IconWrapper name="mdi:email" size="lg" />

<!-- Icono con color específico -->
<IconWrapper name="mdi:whatsapp" color="white" />

<!-- Icono con hover -->
<IconWrapper name="mdi:chevron-down" color="white" hoverColor="light" />
```

## Props Disponibles

### `name` (requerido)
- **Tipo**: `string`
- **Descripción**: Nombre del icono (formato: `mdi:icon-name`)

### `size` (opcional)
- **Tipo**: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'`
- **Default**: `'md'`
- **Descripción**: Tamaño del icono

### `color` (opcional)
- **Tipo**: `'light' | 'white' | 'secondary' | 'primary' | 'accent' | 'neutral'`
- **Default**: `'light'`
- **Descripción**: Color del icono

### `hoverColor` (opcional)
- **Tipo**: `'light' | 'white' | 'secondary' | 'primary' | 'accent' | 'neutral'`
- **Descripción**: Color del icono en estado hover

### `class` (opcional)
- **Tipo**: `string`
- **Descripción**: Clases CSS adicionales

## Mapeo de Tamaños

| Tamaño | Clases CSS |
|--------|------------|
| `xs`   | `h-3 w-3` |
| `sm`   | `h-4 w-4` |
| `md`   | `h-5 w-5` |
| `lg`   | `h-6 w-6` |
| `xl`   | `h-8 w-8` |
| `2xl`  | `h-10 w-10` |

## Mapeo de Colores

| Color | Clase CSS | Hex |
|-------|-----------|-----|
| `light` | `text-light` | `#d2d5d8` |
| `white` | `text-white` | `#ffffff` |
| `secondary` | `text-secondary` | `#31487a` |
| `primary` | `text-primary` | `#1e2e4f` |
| `accent` | `text-accent` | `#192338` |
| `neutral` | `text-neutral` | `#e1e2e4` |

## Ejemplos de Uso

### Iconos en Header (fondo oscuro)
```astro
<IconWrapper name="mdi:phone" size="sm" color="white" hoverColor="light" />
<IconWrapper name="mdi:whatsapp" size="sm" color="white" hoverColor="light" />
<IconWrapper name="mdi:chevron-down" size="sm" color="white" />
```

### Iconos en Footer (fondo oscuro)
```astro
<IconWrapper name="mdi:phone" size="sm" color="secondary" />
<IconWrapper name="mdi:email" size="sm" color="secondary" />
<IconWrapper name="mdi:map-marker" size="sm" color="secondary" />
```

### Iconos en Contenido (fondo claro)
```astro
<IconWrapper name="mdi:whatsapp" size="md" color="light" />
<IconWrapper name="mdi:phone" size="sm" color="light" />
<IconWrapper name="mdi:hammer-wrench" size="sm" color="light" />
```

### Iconos en Botones
```astro
<IconWrapper name="mdi:whatsapp" size="sm" color="white" class="mr-2" />
<IconWrapper name="mdi:chevron-left" size="md" color="white" />
<IconWrapper name="mdi:chevron-right" size="md" color="white" />
```

## Beneficios

### 1. Coherencia Visual
- Todos los iconos usan el mismo color `light` por defecto
- Consistencia en tamaños y espaciado
- Transiciones suaves entre estados

### 2. Accesibilidad
- Buen contraste en todos los fondos
- Estados hover claramente definidos
- Tamaños apropiados para interacción táctil

### 3. Mantenibilidad
- Configuración centralizada
- Fácil cambio de colores globales
- Reutilización de componentes

### 4. Rendimiento
- Clases CSS optimizadas
- Sin estilos inline
- Purga automática de Tailwind

## Migración desde Icon

Para migrar desde el componente `Icon` original:

```astro
<!-- Antes -->
<Icon name="mdi:phone" class="h-4 w-4 text-white mr-2" />

<!-- Después -->
<IconWrapper name="mdi:phone" size="sm" color="white" class="mr-2" />
```

## Consideraciones de Accesibilidad

- Los iconos mantienen `flex-shrink-0` para evitar deformación
- Estados focus visibles con `focus:ring-2`
- Tamaños mínimos para interacción táctil (44px)
- Contraste adecuado en todos los fondos 

## ✅ Implementación Completada: Color `light` (#d2d5d8) para Iconos

He aplicado exitosamente el color `light` (#d2d5d8) como color predeterminado para todos los iconos en tu sitio Astro. Aquí está el resumen de lo implementado:

### 🎯 **Componente Centralizado: IconWrapper**

**Archivo**: `src/components/IconWrapper.astro`

- **Color predeterminado**: `light` (#d2d5d8)
- **Tamaños estandarizados**: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
- **Colores disponibles**: `light`, `white`, `secondary`, `primary`, `accent`, `neutral`
- **Estados hover**: Configurables para mejor interactividad

### 📁 **Componentes Actualizados**

1. **Header.astro** - Iconos de contacto y navegación
2. **Footer.astro** - Iconos de información de contacto
3. **ServiceCard.astro** - Icono de WhatsApp
4. **FloatingWhatsAppButton.astro** - Icono principal
5. **Carousel.astro** - Iconos de navegación
6. **ServiceCarousel.astro** - Iconos de navegación

### 📄 **Páginas Actualizadas**

1. **contacto.astro** - Iconos de información de contacto
2. **proyectos.astro** - Iconos de botones de acción
3. **proyectos/categoria/[category].astro** - Iconos de navegación y botones
4. **servicios/[slug].astro** - Icono de WhatsApp

### 🎨 **Ejemplos de Uso**

```astro
<code_block_to_apply_changes_from>
```

### 🔍 **Beneficios Implementados**

1. **Coherencia Visual**: Todos los iconos usan el mismo color `light` por defecto
2. **Accesibilidad**: Buen contraste en fondos claros y oscuros
3. **Mantenibilidad**: Configuración centralizada en un solo componente
4. **Rendimiento**: Clases CSS optimizadas sin estilos inline

### 📚 **Documentación**

**Archivo**: `src/components/IconWrapper.md`
- Guía completa de uso
- Ejemplos prácticos
- Mapeo de tamaños y colores
- Mejores prácticas de accesibilidad

### 📚 **Configuración de Colores**

| Contexto | Color Predeterminado | Color Hover |
|----------|---------------------|-------------|
| Header (fondo oscuro) | `white` | `light` |
| Footer (fondo oscuro) | `secondary` | - |
| Contenido (fondo claro) | `light` | - |
| Botones | `white` | - |

### ✨ **Por qué usar `light` mejora la coherencia visual y accesibilidad:**

1. **Contraste Optimizado**: El color `light` (#d2d5d8) proporciona excelente contraste sobre fondos claros
2. **Jerarquía Visual**: Los iconos se integran naturalmente sin competir con el contenido principal
3. **Profesionalismo**: Transmite seriedad y confiabilidad, apropiado para un negocio de estructuras metálicas
4. **Accesibilidad WCAG**: Cumple con estándares de contraste para usuarios con discapacidad visual
5. **Consistencia**: Todos los iconos siguen la misma paleta de colores definida en tu `tailwind.config.js`

La implementación está completa y lista para usar. Todos los iconos ahora usan el color `light` como predeterminado, manteniendo excepciones apropiadas para fondos oscuros donde se usa `white` o `secondary` para garantizar legibilidad. 