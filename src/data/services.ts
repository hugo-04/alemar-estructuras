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
  previewImageUrl: string; // URL de la imagen de vista previa para el servicio.
}

// Array que contiene todos los servicios disponibles.
// Para agregar un nuevo servicio, simplemente añade un nuevo objeto a este array.
// Asegúrate de que el 'slug' sea único y que las 'imageUrls' apunten a imágenes válidas en /public/images.
export const services: Service[] = [
  // --- CATEGORÍA: TECHOS METÁLICOS ---
  
  // RESIDENCIALES
  {
    title: "Sol y Sombra",
    slug: "sol-y-sombra",
    description: "Ideales para terrazas, patios y espacios de recreación. Protección solar elegante que combina funcionalidad y estética.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20sol%20y%20sombra%20para%20mi%20proyecto.",
    previewImageUrl: "/images/Servicios/sol_sombra/IMG_20240106_171642.jpg",
    imageUrls: [
      "/images/Servicios/sol_sombra/IMG_20240106_171642.jpg",
      "/images/Servicios/sol_sombra/IMG_20240106_171638.jpg",
      "/images/Servicios/sol_sombra/IMG_20240124_130141.jpg",
      "/images/Servicios/sol_sombra/IMG_20240103_113717.jpg",
      "/images/Servicios/sol_sombra/IMG_20240301_095811.jpg"
    ],
    category: "Techos Metálicos",
    subcategory: "Residenciales",
    isMostClicked: true,
    active: true
  },
  {
    title: "Techos a Dos Aguas Residenciales",
    slug: "techos-dos-aguas-residenciales",
    description: "Perfectos para viviendas con evacuación eficiente de agua. Diseño clásico con máxima funcionalidad.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20techo%20a%20dos%20aguas%20residencial.",
    previewImageUrl: "/images/Servicios/techos_dos_aguas/techo-dos-agua.jpg",
    imageUrls: [
      "/images/Servicios/techos_dos_aguas/techo-dos-agua.jpg",
      "/images/Servicios/techos_dos_aguas/techo-dos-agua-2.jpg",
      "/images/Servicios/techos_dos_aguas/techo-dos-agua-3.jpg",
      "/images/Servicios/techos_dos_aguas/techo-dos-agua-5.jpg",
      "/images/Servicios/techos_dos_aguas/techo-dos-agua-6.jpg"
    ],
    category: "Techos Metálicos",
    subcategory: "Residenciales",
    active: true
  },
  {
    title: "Techos a Un Agua",
    slug: "techos-un-agua",
    description: "Solución económica para espacios simples. Diseño minimalista y funcional para coberturas básicas.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20techo%20a%20un%20agua.",
    previewImageUrl: "/images/Servicios/techo-un-agua/techo-un-agua.jpg",
    imageUrls: ["/images/Servicios/techo-un-agua/techo-un-agua.jpg"],
    category: "Techos Metálicos",
    subcategory: "Residenciales",
    active: true
  },
  
  // COMERCIALES
  {
    title: "Techos Planos Comerciales",
    slug: "techos-planos-comerciales",
    description: "Estructura con vigas reticuladas o listones de soporte. Ideales para locales comerciales y negocios.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20techo%20plano%20comercial.",
    previewImageUrl: "/images/techo-comercial.jpg",
    imageUrls: ["/images/techo-comercial.jpg"],
    category: "Techos Metálicos",
    subcategory: "Comerciales",
    isMostClicked: true,
    active: true
  },
  {
    title: "Techos a Dos Aguas Comerciales",
    slug: "techos-dos-aguas-comerciales",
    description: "Con cobertura Aluzinc TR4 de alta durabilidad. Perfectos para establecimientos comerciales exigentes.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20techo%20a%20dos%20aguas%20comercial.",
    previewImageUrl: "/images/techo-dos-aguas-comercial.jpg",
    imageUrls: ["/images/techo-dos-aguas-comercial.jpg"],
    category: "Techos Metálicos",
    subcategory: "Comerciales",
    active: true
  },
  {
    title: "Diseños Personalizados",
    slug: "disenos-personalizados",
    description: "Adaptados a necesidades específicas. Soluciones únicas para proyectos comerciales especiales.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20diseño%20personalizado%20para%20mi%20negocio.",
    previewImageUrl: "/images/diseno-personalizado.jpg",
    imageUrls: ["/images/diseno-personalizado.jpg"],
    category: "Techos Metálicos",
    subcategory: "Comerciales",
    active: false
  },
  
  // INDUSTRIALES
  {
    title: "Techos Rectos/Planos Industriales",
    slug: "techos-rectos-planos-industriales",
    description: "Inclinación máxima 10°, solución económica y versátil. Perfectos para naves industriales y almacenes.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20techo%20recto%20industrial.",
    previewImageUrl: "/images/techo-recto.jpg",
    imageUrls: ["/images/techo-recto.jpg"],
    category: "Techos Metálicos",
    subcategory: "Industriales",
    active: true
  },
  {
    title: "Techos Parabólicos",
    slug: "techos-parabolicos",
    description: "Cubren grandes luces sin parantes intermedios. Ideales para almacenes y colegios de gran envergadura.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20techo%20parabólico.",
    previewImageUrl: "/images/techo-parabolico.jpg",
    imageUrls: ["/images/techo-parabolico.jpg"],
    category: "Techos Metálicos",
    subcategory: "Industriales",
    active: false
  },
  {
    title: "Techos a Dos Aguas Industriales",
    slug: "techos-dos-aguas-industriales",
    description: "Ideales para zonas con fuertes precipitaciones. Evacuación eficiente de agua para instalaciones industriales.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20techo%20a%20dos%20aguas%20industrial.",
    previewImageUrl: "/images/Servicios/Techos_dos_aguas_industriales/1.jpg",
    imageUrls: [
      "/images/Servicios/Techos_dos_aguas_industriales/2.jpg",
      "/images/Servicios/Techos_dos_aguas_industriales/3.jpg",
      "/images/Servicios/Techos_dos_aguas_industriales/4.jpg",
      "/images/Servicios/Techos_dos_aguas_industriales/5.jpg"
    ],
    category: "Techos Metálicos",
    subcategory: "Industriales",
    active: true
  },
  {
    title: "Naves Industriales",
    slug: "naves-industriales",
    description: "Construcciones de gran envergadura para almacenes y plantas. Soluciones completas para espacios industriales.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20nave%20industrial.",
    previewImageUrl: "/images/nave-industrial.jpg",
    imageUrls: ["/images/nave-industrial.jpg"],
    category: "Techos Metálicos",
    subcategory: "Industriales",
    isMostClicked: true,
    active: true
  },
  
  // --- CATEGORÍA: CONSTRUCCIÓN EN SECO ---
  {
    title: "Estructura Metálica + Drywall",
    slug: "estructura-metalica-drywall",
    description: "Sistemas constructivos rápidos y eficientes. Construcción moderna para interiores residenciales y comerciales.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20estructura%20metálica%20con%20drywall.",
    previewImageUrl: "/images/estructura-metalica-almacen.jpg",
    imageUrls: ["/images/estructura-metalica-almacen.jpg"],
    category: "Construcción en Seco",
    subcategory: "Sistemas constructivos",
    isMostClicked: true,
    active: true
  },
  {
    title: "Tabiquería Liviana",
    slug: "tabiqueria-liviana",
    description: "Divisiones internas modulares. Soluciones flexibles para crear espacios funcionales rápidamente.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20tabiquería%20liviana.",
    previewImageUrl: "/images/tabiqueria-liviana.jpg",
    imageUrls: ["/images/tabiqueria-liviana.jpg"],
    category: "Construcción en Seco",
    subcategory: "Divisiones internas",
    active: true
  },
  {
    title: "Cielorrasos",
    slug: "cielorrasos",
    description: "Acabados profesionales para techos. Soluciones estéticas y funcionales para cualquier ambiente.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20cielorrasos.",
    previewImageUrl: "/images/cielorrasos.jpg",
    imageUrls: ["/images/cielorrasos.jpg"],
    category: "Construcción en Seco",
    subcategory: "Acabados",
    active: false
  },
  
  // --- CATEGORÍA: ESTRUCTURAS VERTICALES ---
  {
    title: "Mezanines Metálicos",
    slug: "mezanines-metalicos",
    description: "Aprovechamiento de espacios verticales. Plataformas intermedias para maximizar el área útil.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20mezanine%20metálico.",
    previewImageUrl: "/images/IMG-20250628-WA0057.jpg",
    imageUrls: ["/images/IMG-20250628-WA0057.jpg"],
    category: "Estructuras Verticales",
    subcategory: "Mezanines",
    isMostClicked: true,
    active: true
  },
  {
    title: "Entrepisos Metálicos",
    slug: "entrepisos-metalicos",
    description: "Ampliación de áreas útiles. Soluciones para crear niveles adicionales en espacios existentes.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20entrepiso%20metálico.",
    previewImageUrl: "/images/entrepiso-metalico.jpg",
    imageUrls: ["/images/entrepiso-metalico.jpg"],
    category: "Estructuras Verticales",
    subcategory: "Entrepisos",
    active: true
  },
  {
    title: "Estructuras de Soporte",
    slug: "estructuras-soporte",
    description: "Diseño según carga requerida. Soluciones estructurales para soportar equipos y maquinaria pesada.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20estructura%20de%20soporte.",
    previewImageUrl: "/images/estructura-soporte.jpg",
    imageUrls: ["/images/estructura-soporte.jpg"],
    category: "Estructuras Verticales",
    subcategory: "Soporte",
    active: false
  },
  
  // --- CATEGORÍA: ACABADOS ESPECIALIZADOS ---
  {
    title: "Estructuras Color Madera",
    slug: "estructuras-color-madera",
    description: "Combinación de resistencia metálica con estética natural. Durabilidad del metal con la calidez visual de la madera.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20estructura%20color%20madera.",
    previewImageUrl: "/images/IMG-20250628-WA0058.jpg",
    imageUrls: ["/images/IMG-20250628-WA0058.jpg"],
    category: "Acabados Especializados",
    subcategory: "Acabado madera",
    active: false
  },
  {
    title: "Tratamientos Anticorrosivos",
    slug: "tratamientos-anticorrosivos",
    description: "Protección y durabilidad para estructuras metálicas. Sistemas de protección contra corrosión y oxidación.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20tratamiento%20anticorrosivo.",
    previewImageUrl: "/images/tratamiento-anticorrosivo.jpg",
    imageUrls: ["/images/tratamiento-anticorrosivo.jpg"],
    category: "Acabados Especializados",
    subcategory: "Protección",
    active: true
  },
  {
    title: "Pinturas Especializadas",
    slug: "pinturas-especializadas",
    description: "Acabados personalizados para estructuras metálicas. Amplia gama de colores y acabados especiales.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20pintura%20especializada.",
    previewImageUrl: "/images/pintura-especializada.jpg",
    imageUrls: ["/images/pintura-especializada.jpg"],
    category: "Acabados Especializados",
    subcategory: "Pinturas",
    active: false
  },
  
  // --- CATEGORÍA: ACERO INOXIDABLE ---
  {
    title: "Pasamanos y Barandas",
    slug: "pasamanos-barandas",
    description: "Seguridad y elegancia en acero inoxidable. Elementos de protección con diseño moderno y durabilidad.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20pasamanos%20y%20barandas.",
    previewImageUrl: "/images/Servicios/pasamanos.jpg",
    imageUrls: ["/images/Servicios/pasamanos.jpg"],
    category: "Acero Inoxidable",
    subcategory: "Seguridad",
    active: true
  },
  {
    title: "Mobiliario de Cocina",
    slug: "mobiliario-cocina",
    description: "Mesadas, estanterías y equipamiento en acero inoxidable. Soluciones higiénicas para cocinas profesionales.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20mobiliario%20de%20cocina.",
    previewImageUrl: "/images/mobiliario-cocina.jpg",
    imageUrls: ["/images/mobiliario-cocina.jpg"],
    category: "Acero Inoxidable",
    subcategory: "Cocina",
    active: false
  },
  {
    title: "Mobiliario Hospitalario",
    slug: "mobiliario-hospitalario",
    description: "Cumpliendo normativas sanitarias. Equipamiento médico y hospitalario en acero inoxidable de grado médico.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20mobiliario%20hospitalario.",
    previewImageUrl: "/images/mobiliario-hospitalario.jpg",
    imageUrls: ["/images/mobiliario-hospitalario.jpg"],
    category: "Acero Inoxidable",
    subcategory: "Hospitalario",
    active: false
  },
  {
    title: "Elementos Decorativos",
    slug: "elementos-decorativos",
    description: "Diseños modernos y funcionales. Piezas decorativas en acero inoxidable para espacios contemporáneos.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20elementos%20decorativos.",
    previewImageUrl: "/images/elementos-decorativos.jpg",
    imageUrls: ["/images/elementos-decorativos.jpg"],
    category: "Acero Inoxidable",
    subcategory: "Decorativo",
    active: false
  },
  
  // --- CATEGORÍA: CARPINTERÍA METÁLICA ---
  {
    title: "Puertas Metálicas",
    slug: "puertas-metalicas",
    description: "Residenciales, comerciales e industriales. Seguridad y durabilidad en diferentes estilos y medidas.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20puertas%20metálicas.",
    previewImageUrl: "/images/IMG-20250628-WA0060.jpg",
    imageUrls: ["/images/IMG-20250628-WA0060.jpg"],
    category: "Carpintería Metálica",
    subcategory: "Puertas",
    isMostClicked: true,
    active: true
  },
  {
    title: "Ventanas Metálicas",
    slug: "ventanas-metalicas",
    description: "Diferentes estilos y medidas. Soluciones de ventilación e iluminación con marcos metálicos resistentes.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20ventanas%20metálicas.",
    previewImageUrl: "/images/ventanas-metalicas.jpg",
    imageUrls: ["/images/ventanas-metalicas.jpg"],
    category: "Carpintería Metálica",
    subcategory: "Ventanas",
    active: true
  },
  {
    title: "Cercos y Marcos",
    slug: "cercos-marcos",
    description: "Instalación completa de cercos y marcos metálicos. Estructuras de soporte para puertas y ventanas.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20cercos%20y%20marcos.",
    previewImageUrl: "/images/cercos-marcos.jpg",
    imageUrls: ["/images/cercos-marcos.jpg"],
    category: "Carpintería Metálica",
    subcategory: "Cercos",
    active: false
  },
  {
    title: "Rejas de Seguridad",
    slug: "rejas-seguridad",
    description: "Protección y diseño para ventanas y puertas. Seguridad sin comprometer la estética del inmueble.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20rejas%20de%20seguridad.",
    previewImageUrl: "/images/rejas-seguridad.jpg",
    imageUrls: ["/images/rejas-seguridad.jpg"],
    category: "Carpintería Metálica",
    subcategory: "Rejas",
    active: true
  },
  {
    title: "Escaleras Metálicas",
    slug: "escaleras-metalicas",
    description: "Interiores y exteriores. Soluciones de acceso seguras y duraderas para diferentes niveles.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20escaleras%20metálicas.",
    previewImageUrl: "/images/escaleras-metalicas.jpg",
    imageUrls: ["/images/escaleras-metalicas.jpg"],
    category: "Carpintería Metálica",
    subcategory: "Escaleras",
    active: false
  },
  {
    title: "Portones",
    slug: "portones",
    description: "Manuales y automáticos. Acceso vehicular y peatonal con sistemas de apertura tradicionales o automatizados.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20portones.",
    previewImageUrl: "/images/portones.jpg",
    imageUrls: ["/images/portones.jpg"],
    category: "Carpintería Metálica",
    subcategory: "Portones",
    active: true
  },
  {
    title: "Cerramientos",
    slug: "cerramientos",
    description: "Perímetros y divisiones. Soluciones completas para delimitar y proteger espacios residenciales e industriales.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20cerramientos.",
    previewImageUrl: "/images/cerramientos.jpg",
    imageUrls: ["/images/cerramientos.jpg"],
    category: "Carpintería Metálica",
    subcategory: "Cerramientos",
    active: false
  },
  
  // --- CATEGORÍA: MANTENIMIENTO Y SERVICIOS ---
  {
    title: "Mantenimiento Preventivo",
    slug: "mantenimiento-preventivo",
    description: "Inspecciones regulares para prolongar la vida útil de estructuras metálicas. Prevención de problemas mayores.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20mantenimiento%20preventivo.",
    previewImageUrl: "/images/IMG-20250628-WA0061.jpg",
    imageUrls: ["/images/IMG-20250628-WA0061.jpg"],
    category: "Mantenimiento y Servicios",
    subcategory: "Preventivo",
    isMostClicked: true,
    active: true
  },
  {
    title: "Reparaciones",
    slug: "reparaciones",
    description: "Soldadura y refuerzo de estructuras metálicas. Restauración de elementos dañados con técnicas especializadas.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20reparaciones%20de%20estructuras.",
    previewImageUrl: "/images/reparaciones.jpg",
    imageUrls: ["/images/reparaciones.jpg"],
    category: "Mantenimiento y Servicios",
    subcategory: "Reparaciones",
    active: true
  },
  {
    title: "Pintado y Protección",
    slug: "pintado-proteccion",
    description: "Renovación de acabados y protección anticorrosiva. Mantenimiento estético y funcional de estructuras.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20pintado%20y%20protección.",
    previewImageUrl: "/images/pintado-proteccion.jpg",
    imageUrls: ["/images/pintado-proteccion.jpg"],
    category: "Mantenimiento y Servicios",
    subcategory: "Protección",
    active: false
  },
  {
    title: "Modificaciones",
    slug: "modificaciones",
    description: "Adaptaciones y ampliaciones de estructuras existentes. Soluciones para actualizar y expandir instalaciones.",
    whatsappLink: "https://wa.me/51946595095?text=Hola,%20me%20interesa%20modificaciones%20estructurales.",
    previewImageUrl: "/images/modificaciones.jpg",
    imageUrls: ["/images/modificaciones.jpg"],
    category: "Mantenimiento y Servicios",
    subcategory: "Modificaciones",
    active: false
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
  - active: (Opcional) true si el servicio está activo (boolean).
*/