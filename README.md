# ALEMAR Estructuras - Sitio Web

Sitio web profesional para ALEMAR Estructuras, empresa especializada en soluciones integrales de techado y estructuras metálicas.

## 🚀 Características

## ✨ Características Destacadas

- 🚀 **Astro 5.11.0** - Framework moderno con generación estática
- 🎨 **Tailwind CSS** - Diseño responsive y moderno
- 📱 **PWA Ready** - Manifest y optimizaciones móviles
- 🔍 **SEO Perfecto** - Meta tags, sitemap, robots.txt y datos estructurados
- ⚡ **Performance Optimizado** - Prefetch, compresión HTML y assets optimizados
- 🧪 **TypeScript Estricto** - Tipado completo y configuración avanzada
- 🎯 **Multi-Framework** - Soporte para Preact, Vue y React
- 🛠️ **DevEx Excelente** - ESLint, Prettier, CI/CD y herramientas de desarrollo

## 🏗️ Estructura del Proyecto

```text
📁 alemar-estructuras/
├── 📁 .github/workflows/     # CI/CD con GitHub Actions
├── 📁 public/               # Assets estáticos
│   ├── 🤖 robots.txt        # Configuración SEO para crawlers
│   ├── 📱 manifest.json     # PWA manifest
│   └── 🖼️ images/          # Imágenes optimizadas
├── 📁 src/
│   ├── 📁 components/       # Componentes reutilizables
│   │   ├── 📁 cards/        # Componentes de tarjetas
│   │   ├── 📁 carousel/     # Sliders y carruseles
│   │   ├── 📁 layout/       # Header, Footer, Navigation
│   │   └── 📁 ui/           # Componentes de interfaz
│   ├── 📁 data/             # Datos tipados (TypeScript)
│   ├── 📁 layouts/          # Layouts base de Astro
│   ├── 📁 pages/            # Páginas del sitio
│   ├── 📁 styles/           # Estilos CSS modulares
│   ├── 📁 types/            # Definiciones TypeScript
│   └── 📁 utils/            # Utilidades y helpers
├── 🔧 astro.config.mjs      # Configuración Astro optimizada
├── 🎨 tailwind.config.mjs   # Configuración Tailwind personalizada
├── 📝 tsconfig.json         # TypeScript configuración estricta
├── 🔍 .eslintrc.cjs         # Reglas de linting
├── 💅 .prettierrc.json      # Formateo de código
└── 🌍 .env.example          # Variables de entorno
```

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 22.x o superior
- **npm** o **yarn**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/alemar-estructuras.git
cd alemar-estructuras

# Instalar dependencias
npm install

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción

## 🎨 Personalización

### Colores del Tema

El proyecto utiliza una paleta de colores personalizada definida en `tailwind.config.mjs`:

- **Primary**: Azul corporativo (#1e3a5f)
- **Accent**: Dorado (#c8aa6e)
- **Neutral**: Grises para texto y fondos

### Agregar Nuevos Servicios

1. Edita `src/data/services.ts`
2. Agrega un nuevo objeto al array `services`
3. Asegúrate de incluir todas las propiedades requeridas
4. Agrega las imágenes correspondientes en `public/images/`

### Agregar Nuevos Proyectos

1. Edita `src/data/projects.ts`
2. Agrega un nuevo objeto al array `projects`
3. Incluye imágenes en `public/images/`

## 📱 Responsive Design

El sitio está optimizado para:

- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuración

### Tailwind CSS

La configuración de Tailwind se encuentra en `tailwind.config.mjs` e incluye:

- Colores personalizados
- Fuentes (Inter)
- Animaciones personalizadas
- Breakpoints responsivos

### Astro

La configuración de Astro está en `astro.config.mjs` e incluye:

- Integración con Tailwind CSS
- Soporte para Preact (componentes interactivos)
- Integración con iconos (astro-icon)

## 🚀 Despliegue

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de salida: `dist`

### Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Astro
3. El despliegue se realizará automáticamente

## 📈 SEO y Performance

### Optimizaciones Implementadas

- Meta tags dinámicos
- Open Graph y Twitter Cards
- Preconnect a dominios externos
- Optimización de imágenes
- Lazy loading de componentes

### Lighthouse Score Objetivo

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

ALEMAR Estructuras
- Teléfono: +51 915 157 257
- WhatsApp: +51 915 157 257
- Email: servicios@multiserviciosprecisur.com
- Ubicación: Arequipa / Lima, Perú

---

Desarrollado para ALEMAR Estructuras
