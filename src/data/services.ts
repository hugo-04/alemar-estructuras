export interface Service {
  title: string;
  slug: string; // Identificador único y amigable para la URL del servicio (usar guiones en lugar de espacios).
  description: string; // Descripción detallada del servicio.
  whatsappLink: string; // Enlace de WhatsApp para cotizar este servicio.
  imageUrls: string[]; // Array de URLs de imágenes del servicio (debe estar en la carpeta public/images).
  category: string; // Categoría a la que pertenece el servicio.
  subcategory?: string; // Subcategoría del servicio.
  isMostClicked?: boolean; // Opcional: true si quieres destacarlo como "más clicado" en la página principal de servicios.
  active?: boolean; // Indica si el servicio es uno de los más adquiridos.
}

// Array que contiene todos los servicios disponibles.
// Para agregar un nuevo servicio, simplemente añade un nuevo objeto a este array.
// Asegúrate de que el 'slug' sea único y que las 'imageUrls' apunten a imágenes válidas en /public/images.
export const services: Service[] = [
  // --- CATEGORÍA: TECHOS METÁLICOS ---
  
  // 1.1 Domiciliarios
  {
    title: "Sol y Sombra",
    slug: "sol-y-sombra",
    description: "Protección solar elegante para terrazas y patios. Ideal para crear espacios de sombra en hogares y comercios.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20sol%20y%20sombra%20para%20mi%20proyecto.",
    imageUrls: ["/images/techo-casa.jpg"],
    category: "Techos Metálicos",
    subcategory: "Domiciliarios",
    isMostClicked: true,
    active: true
  },
  {
    title: "Techos Comerciales",
    slug: "techos-comerciales",
    description: "Cobertura metálica profesional con vigas reticuladas y Aluzinc TR4. Perfecto para locales comerciales y negocios.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20techo%20comercial%20para%20mi%20negocio.",
    imageUrls: ["/images/techo-comercial.jpg"],
    category: "Techos Metálicos",
    subcategory: "Domiciliarios",
    isMostClicked: true,
    active: true
  },
  
  // 1.2 Industriales
  {
    title: "Techos Rectos o Planos",
    slug: "techos-rectos-planos",
    description: "Cobertura económica con inclinación mínima. Solución versátil para naves industriales y almacenes.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20techo%20recto%20o%20plano%20industrial.",
    imageUrls: ["/images/techo-recto.jpg"],
    category: "Techos Metálicos",
    subcategory: "Industriales",
    active: true
  },
  {
    title: "Techos Parabólicos",
    slug: "techos-parabolicos",
    description: "Cubiertas de gran envergadura sin soportes intermedios. Ideal para almacenes y espacios industriales amplios.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20techo%20parabólico%20industrial.",
    imageUrls: ["/images/techo-parabolico.jpg"],
    category: "Techos Metálicos",
    subcategory: "Industriales",
    active: false
  },
  {
    title: "Techos a Dos Aguas",
    slug: "techos-dos-aguas",
    description: "Doble pendiente para evacuación eficiente de agua. Perfecto para zonas con lluvias intensas.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20techo%20a%20dos%20aguas%20industrial.",
    imageUrls: ["/images/techo-dos-aguas.jpg"],
    category: "Techos Metálicos",
    subcategory: "Industriales",
    active: false
  },
  {
    title: "Naves Industriales",
    slug: "naves-industriales",
    description: "Construcciones metálicas de gran escala. Soluciones completas para plantas de producción y almacenes.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20nave%20industrial%20para%20mi%20empresa.",
    imageUrls: ["/images/nave-industrial.jpg"],
    category: "Techos Metálicos",
    subcategory: "Industriales",
    isMostClicked: true,
    active: true
  },
  
  // --- CATEGORÍA: CONSTRUCCIÓN EN SECO ---
  {
    title: "Construcción en Seco",
    slug: "construccion-en-seco",
    description: "Estructura metálica combinada con drywall. Construcción rápida y eficiente para interiores.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20construcción%20en%20seco%20para%20mi%20proyecto.",
    imageUrls: ["/images/estructura-metalica-almacen.jpg"],
    category: "Construcción en Seco",
    isMostClicked: true,
    active: true
  },
  
  // --- CATEGORÍA: ESTRUCTURAS ESPECIALES ---
  
  // 3.1 Mezanine y entrepisos metálicos
  {
    title: "Mezanine y Entre pisos Metálicos",
    slug: "mezanine-entrepisos-metalicos",
    description: "Plataformas intermedias para maximizar el espacio vertical. Ideal para almacenes y áreas comerciales.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20mezanine%20o%20entre%20pisos%20metálicos.",
    imageUrls: ["/images/IMG-20250628-WA0057.jpg"],
    category: "Estructuras Especiales",
    subcategory: "Mezanine y entrepisos metálicos",
    isMostClicked: true,
    active: true
  },
  
  // 3.2 Estructuras con acabado color madera
  {
    title: "Estructuras con Acabado Color Madera",
    slug: "estructuras-acabado-madera",
    description: "Soluciones metálicas que simulan la madera. Durabilidad del metal con la calidez visual de la madera.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20estructura%20con%20acabado%20color%20madera.",
    imageUrls: ["/images/IMG-20250628-WA0058.jpg"],
    category: "Estructuras Especiales",
    subcategory: "Estructuras con acabado color madera",
    active: false
  },
  
  // 3.3 Carpintería Metálica
  {
    title: "Carpintería Metálica",
    slug: "carpinteria-metalica",
    description: "Puertas, ventanas, cercos y rejas metálicas. Seguridad y durabilidad en elementos de cerramiento.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20carpintería%20metálica%20para%20mi%20proyecto.",
    imageUrls: ["/images/IMG-20250628-WA0060.jpg"],
    category: "Estructuras Especiales",
    subcategory: "Carpintería Metálica",
    isMostClicked: true,
    active: true
  },
  
  // 3.4 Trabajos en acero inoxidable
  {
    title: "Trabajos en Acero Inoxidable",
    slug: "trabajos-acero-inoxidable",
    description: "Pasamanos, barandas y mobiliario en acero inoxidable. Resistencia y elegancia para espacios exigentes.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20trabajo%20en%20acero%20inoxidable.",
    imageUrls: ["/images/IMG-20250628-WA0059.jpg"],
    category: "Estructuras Especiales",
    subcategory: "Trabajos en acero inoxidable",
    active: false
  },
  
  // --- CATEGORÍA: MANTENIMIENTO ---
  {
    title: "Mantenimiento de Estructuras Metálicas",
    slug: "mantenimiento-estructuras-metalicas",
    description: "Servicios de mantenimiento preventivo y correctivo. Prolongamos la vida útil de sus estructuras metálicas.",
    whatsappLink: "https://wa.me/51915157257?text=Hola,%20me%20interesa%20mantenimiento%20de%20estructuras%20metálicas.",
    imageUrls: ["/images/IMG-20250628-WA0061.jpg"],
    category: "Mantenimiento",
    isMostClicked: true,
    active: true
  }
];

/*
  Para agregar un nuevo servicio, simplemente añade un nuevo objeto a este array con las siguientes propiedades:
  - title: El título del servicio (string).
  - slug: Un identificador único y amigable para la URL del servicio (string, usar guiones en lugar de espacios).
  - description: Una descripción detallada del servicio (string).
  - whatsappLink: El enlace de WhatsApp para cotizar este servicio (string).
  - imageUrls: Un array de URLs de imágenes del servicio (string[]).
  - category: La categoría a la que pertenece el servicio (string).
  - subcategory: (Opcional) La subcategoría del servicio (string).
  - isMostClicked: (Opcional) true si quieres destacarla como "más clicado" (boolean).
*/