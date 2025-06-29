# Documentación del Proyecto Astro

Este documento proporciona una guía completa sobre la estructura, configuración y mantenimiento del proyecto Astro.

## 🚀 Estructura del Proyecto

El proyecto sigue una estructura estándar de Astro, organizada para facilitar la escalabilidad y la mantenibilidad:

```
astro-project/
├── public/
│   ├── images/             # Almacena imágenes estáticas del sitio (ej: logos, imágenes de servicios).
│   └── favicon.svg         # Icono de la página.
├── src/
│   ├── components/         # Componentes reutilizables de Astro (ej: Header, Footer, ServiceCard).
│   │   ├── FloatingWhatsAppButton.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ServiceCard.astro
│   │   ├── ServicePreviewCard.astro
│   │   └── SuccessPopup.astro # Nuevo componente para mensajes de éxito.
│   ├── data/               # Archivos de datos (ej: servicios, productos).
│   │   └── services.ts     # Definición de la interfaz Service y el array de servicios.
│   ├── layouts/            # Layouts de página (plantillas base).
│   │   └── Layout.astro    # Layout principal que incluye Header, Footer y estilos globales.
│   ├── pages/              # Páginas del sitio web (rutas).
│   │   ├── contacto.astro  # Página de contacto con formulario.
│   │   ├── index.astro     # Página de inicio.
│   │   ├── nosotros.astro  # Página "Sobre Nosotros".
│   │   ├── proyectos-realizados.astro # Página de proyectos realizados.
│   │   ├── servicios/      # Carpeta para páginas relacionadas con servicios.
│   │   │   ├── [slug].astro # Página dinámica para detalles de cada servicio.
│   │   │   └── servicios.astro # Página principal de servicios.
│   │   └── (gracias.astro) # Página de agradecimiento (ya no es necesaria con el pop-up).
│   └── styles/             # Archivos de estilos globales.
│       └── global.css      # Estilos CSS globales (incluye Tailwind CSS).
├── .astro/                 # Archivos generados por Astro.
├── .git/                   # Repositorio Git.
├── .vscode/                # Configuración de VS Code.
├── node_modules/           # Dependencias del proyecto.
├── .gitignore              # Archivos y carpetas a ignorar por Git.
├── astro.config.mjs        # Archivo de configuración de Astro.
├── package-lock.json       # Bloqueo de versiones de dependencias.
├── package.json            # Definición del proyecto y scripts.
└── tsconfig.json           # Configuración de TypeScript.
```

## 🛠️ Configuración y Ejecución

### Dependencias

Este proyecto utiliza las siguientes dependencias principales:

*   `astro`: El framework web.
*   `@tailwindcss/vite`: Integración de Tailwind CSS para Vite (usado por Astro).
*   `astro-icon`: Para el uso de íconos SVG de forma sencilla.
*   `@iconify-json/mdi`: Conjunto de íconos de Material Design (MDI) para `astro-icon`.
*   `tailwindcss`: El framework CSS de utilidad.

### Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

### Desarrollo

Para iniciar el servidor de desarrollo de Astro, ejecuta:

```bash
npm run dev
```

Esto iniciará un servidor local (normalmente en `http://localhost:4321`) donde podrás ver los cambios en tiempo real.

### Construcción (Build)

Para construir el proyecto para producción, ejecuta:

```bash
npm run build
```

Esto generará los archivos estáticos optimizados en la carpeta `dist/`.

### Previsualización

Para previsualizar la versión de producción después de construirla, ejecuta:

```bash
npm run preview
```

## 🖼️ Gestión de Imágenes

Las imágenes del sitio se almacenan en la carpeta `public/images/`. Para usar una imagen en cualquier parte de tu código Astro, simplemente refiérete a ella con una ruta absoluta desde la raíz de `public/`. Por ejemplo, si tienes `public/images/mi-imagen.jpg`, puedes usarla como `/images/mi-imagen.jpg`.

**Para agregar nuevas imágenes:**

1.  Coloca tus archivos de imagen (JPG, PNG, SVG, etc.) en la carpeta `public/images/`.
2.  Actualiza la propiedad `imageUrl` en `src/data/services.ts` o en cualquier otro lugar donde uses la imagen, apuntando a la nueva ruta (ej: `imageUrl: "/images/nueva-imagen.jpg"`).

## ⚙️ Gestión de Servicios

Los datos de los servicios se gestionan en el archivo `src/data/services.ts`.

### `src/data/services.ts`

Este archivo exporta una interfaz `Service` y un array `services`.

*   **`Service` Interface:** Define la estructura de un objeto de servicio:
    ```typescript
    export interface Service {
      title: string; // Título del servicio.
      slug: string; // Identificador único para la URL (ej: "instalacion-techos-metalicos").
      description: string; // Descripción detallada.
      whatsappLink: string; // Enlace directo a WhatsApp.
      imageUrl: string; // Ruta de la imagen en public/images.
      category: string; // Categoría del servicio.
      isMostClicked?: boolean; // Opcional: true para destacar en la página principal.
    }
    ```

*   **`services` Array:** Contiene todos los objetos de servicio. Para agregar un nuevo servicio, simplemente añade un nuevo objeto al array con las propiedades definidas en la interfaz `Service`.

    **Ejemplo de cómo agregar un nuevo servicio:**

    ```typescript
    // ... otros servicios
    {
      title: "Nuevo Servicio de Prueba",
      slug: "nuevo-servicio-prueba", // Asegúrate de que sea único y en minúsculas con guiones.
      description: "Esta es la descripción detallada de mi nuevo servicio.",
      whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20el%20nuevo%20servicio.",
      imageUrl: "/images/nueva-imagen-servicio.jpg", // Asegúrate de que la imagen exista en public/images.
      category: "Nuevas Categorías",
      isMostClicked: false // O true si quieres que aparezca en la sección destacada.
    },
    // ...
    ```

### Servicios Destacados (`isMostClicked`)

Para controlar qué servicios aparecen en la sección "Servicios Más Solicitados" en la página `src/pages/servicios.astro`:

1.  Abre `src/data/services.ts`.
2.  En el objeto del servicio que deseas destacar, establece la propiedad `isMostClicked` a `true`.
3.  Si no deseas que un servicio aparezca, establece `isMostClicked` a `false` o simplemente omite la propiedad.

## 📧 Configuración del Formulario de Contacto (Formspree)

El formulario de contacto en `src/pages/contacto.astro` está configurado para usar [Formspree](https://formspree.io/), un servicio gratuito que te permite recibir envíos de formularios por correo electrónico sin necesidad de un backend.

**Funcionamiento Actual:**

En lugar de redirigir a una página de agradecimiento, el formulario ahora utiliza JavaScript para enviar los datos a Formspree de forma asíncrona. Tras un envío exitoso, se muestra un pop-up de confirmación directamente en la página.

**Pasos para configurar Formspree:**

1.  **Crea una cuenta en Formspree:** Ve a [https://formspree.io/](https://formspree.io/) y regístrate.
2.  **Crea un nuevo formulario:** Sigue las instrucciones en Formspree para crear un nuevo formulario. Te proporcionarán una URL de endpoint (ej: `https://formspree.io/f/your-form-id`).
3.  **Actualiza el formulario en Astro:**
    *   Abre `src/pages/contacto.astro`.
    *   Busca la etiqueta `<form id="contact-form">`.
    *   Reemplaza `https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT` en el atributo `action` con la URL de endpoint que obtuviste de Formspree.

    ```html
    <form id="contact-form" action="https://formspree.io/f/your-form-id" method="POST" class="space-y-4">
      <!-- ... tus campos de formulario ... -->
      <input type="hidden" name="_subject" value="Nueva Consulta desde el Sitio Web">
      <input type="hidden" name="_next" value="no_redirect"> <!-- Importante para evitar la redirección de Formspree -->
      <!-- ... -->
    </form>
    ```

4.  **Mensaje de Éxito:** Tras el envío exitoso, aparecerá un pop-up con el mensaje "¡Gracias por tu envío! Nos comunicaremos contigo lo antes posible para cotizar el servicio que deseas."

## ✨ Buenas Prácticas y Reusabilidad

*   **Componentización:** El proyecto está dividido en componentes (`Header`, `Footer`, `ServiceCard`, `SuccessPopup`, etc.) para promover la reutilización y mantener el código modular.
*   **Separación de Datos:** Los datos de los servicios se mantienen separados de la lógica de los componentes en `src/data/services.ts`, facilitando la gestión del contenido.
*   **Layouts:** El uso de `Layout.astro` centraliza la estructura común de las páginas, asegurando consistencia y facilidad de actualización.
*   **Tailwind CSS:** Utilizado para un desarrollo rápido y responsivo, permitiendo un control granular sobre el estilo directamente en el marcado.
*   **TypeScript:** Proporciona tipado estático para mejorar la robustez y la legibilidad del código, especialmente en los datos y las interfaces.
*   **Comentarios:** El código está comentado para explicar la funcionalidad de las secciones clave y facilitar la comprensión a futuros desarrolladores.

## 🐛 Depuración de Errores

Si encuentras algún error, revisa la consola de tu navegador (F12) y la terminal donde ejecutas `npm run dev`. Los mensajes de error suelen proporcionar pistas útiles sobre la causa del problema.

---

¡Esperamos que esta documentación te sea de gran ayuda para gestionar y expandir tu proyecto Astro!
