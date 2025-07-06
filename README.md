# ALEMAR Estructuras - Sitio Web

Sitio web profesional para ALEMAR Estructuras, empresa especializada en soluciones integrales de techado y estructuras metálicas.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Navegación SPA**: Transiciones suaves entre páginas con Astro View Transitions
- **SEO Optimizado**: Meta tags, Open Graph y Twitter Cards
- **Accesibilidad**: Cumple con estándares WCAG
- **Performance**: Carga rápida con optimizaciones de imágenes y CSS
- **TypeScript**: Código tipado para mayor mantenibilidad

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework para sitios web estáticos
- **Tailwind CSS**: Framework de CSS utilitario
- **TypeScript**: Lenguaje de programación tipado
- **Vue.js**: Componentes interactivos
- **AOS**: Animaciones al hacer scroll

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── data/               # Datos estáticos (servicios, proyectos)
├── layouts/            # Layouts de páginas
├── pages/              # Páginas del sitio
├── scripts/            # Scripts JavaScript/TypeScript
└── styles/             # Estilos globales
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd alemar-estructuras
```

2. Instala las dependencias:
```bash
npm install
```

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
- Soporte para Vue.js
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

Desarrollado con ❤️ para ALEMAR Estructuras
