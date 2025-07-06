export interface Project {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  category: string;
  imageUrls: string[];
  clientReview: string;
  clientName: string;
  location: string;
  completionDate: string;
}

export const projects: Project[] = [
  {
    title: "Techo Metálico Industrial - Almacén Logístico",
    slug: "techo-metalico-industrial-almacen",
    description: "Instalación completa de techo metálico para almacén logístico de 2000m². Incluye estructura de soporte, láminas galvanizadas, canaletas y bajantes. Diseño optimizado para máxima durabilidad y resistencia a la intemperie.",
    imageUrl: "/images/estructura-metalica-almacen.jpg",
    category: "Techos Industriales",
    imageUrls: [
      "/images/IMG-20250628-WA0057.jpg",
      "/images/IMG-20250628-WA0058.jpg",
      "/images/IMG-20250628-WA0059.jpg",
    ],
    clientReview: "Excelente trabajo en nuestro almacén. El techo quedó perfecto y resistió las lluvias del invierno sin problemas. Muy profesionales y puntuales.",
    clientName: "Carlos Mendoza",
    location: "Arequipa",
    completionDate: "Enero 2024"
  },
  {
    title: "Cubierta Metálica para Restaurante",
    slug: "cubierta-metalica-restaurante",
    description: "Diseño e instalación de cubierta metálica para terraza de restaurante. Estructura de acero inoxidable con acabado premium, incluye iluminación integrada y sistema de drenaje.",
    imageUrl: "/images/pergola-jardin.jpg",
    category: "Cubiertas Comerciales",
    imageUrls: [
      "/images/IMG-20250628-WA0060.jpg",
      "/images/IMG-20250628-WA0061.jpg",
      "/images/IMG-20250628-WA0062.jpg",
    ],
    clientReview: "La cubierta transformó completamente nuestro restaurante. Los clientes adoran el ambiente y el diseño es exactamente lo que queríamos.",
    clientName: "María González",
    location: "Lima",
    completionDate: "Marzo 2024"
  },
  {
    title: "Estructura Metálica para Taller Mecánico",
    slug: "estructura-metalica-taller-mecanico",
    description: "Fabricación e instalación de estructura metálica completa para taller mecánico. Incluye columnas, vigas, techado y mezzanine de trabajo. Diseño resistente para equipos pesados.",
    imageUrl: "/images/IMG-20250628-WA0063.jpg",
    category: "Estructuras Industriales",
    imageUrls: [
      "/images/IMG-20250628-WA0064.jpg",
      "/images/IMG-20250628-WA0065.jpg",
      "/images/IMG-20250628-WA0066.jpg",
    ],
    clientReview: "La estructura es muy sólida y nos permite trabajar con toda la maquinaria pesada sin problemas. El equipo fue muy profesional desde el diseño hasta la instalación.",
    clientName: "Roberto Silva",
    location: "Arequipa",
    completionDate: "Febrero 2024"
  },
  {
    title: "Techo Residencial con Panel Sándwich",
    slug: "techo-residencial-panel-sandwich",
    description: "Instalación de techo con panel sándwich para casa residencial. Incluye aislamiento térmico y acústico, acabado interior y exterior premium. Sistema de ventilación integrado.",
    imageUrl: "/images/techo-casa.jpg",
    category: "Techos Residenciales",
    imageUrls: [
      "/images/IMG-20250628-WA0067.jpg",
      "/images/IMG-20250628-WA0068.jpg",
      "/images/IMG-20250628-WA0069.jpg",
    ],
    clientReview: "El techo quedó espectacular. La casa está mucho más fresca en verano y cálida en invierno. La instalación fue muy limpia y profesional.",
    clientName: "Ana Torres",
    location: "Lima",
    completionDate: "Diciembre 2023"
  },
  {
    title: "Pérgola Metálica para Jardín",
    slug: "pergola-metalica-jardin",
    description: "Diseño y fabricación de pérgola metálica para jardín residencial. Estructura de acero con acabado anticorrosivo, incluye sistema de sombreado retráctil y iluminación LED.",
    imageUrl: "/images/IMG-20250628-WA0070.jpg",
    category: "Pérgolas y Toldos",
    imageUrls: [
      "/images/IMG-20250628-WA0071.jpg",
      "/images/IMG-20250628-WA0072.jpg",
      "/images/IMG-20250628-WA0073.jpg",
    ],
    clientReview: "La pérgola es el punto focal de nuestro jardín. El diseño es elegante y funcional. Los materiales son de excelente calidad.",
    clientName: "Luis Ramírez",
    location: "Arequipa",
    completionDate: "Noviembre 2023"
  },
  {
    title: "Impermeabilización de Techo Comercial",
    slug: "impermeabilizacion-techo-comercial",
    description: "Aplicación de sistema impermeabilizante de alta calidad en techo comercial de 1500m². Incluye limpieza previa, reparación de grietas y aplicación de membrana líquida.",
    imageUrl: "/images/reparacion-techo-industrial.jpg",
    category: "Impermeabilización",
    imageUrls: [
      "/images/IMG-20250628-WA0074.jpg",
      "/images/IMG-20250628-WA0075.jpg",
      "/images/IMG-20250628-WA0076.jpg",
    ],
    clientReview: "Solucionaron completamente nuestros problemas de filtraciones. El trabajo fue impecable y la garantía nos da mucha tranquilidad.",
    clientName: "Comercial San Martín",
    location: "Lima",
    completionDate: "Octubre 2023"
  },
  {
    title: "Estructura para Paneles Solares",
    slug: "estructura-paneles-solares",
    description: "Fabricación e instalación de estructura metálica para sistema de paneles solares. Diseño optimizado para máxima exposición solar y resistencia a vientos fuertes.",
    imageUrl: "/images/IMG-20250628-WA0077.jpg",
    category: "Estructuras Especiales",
    imageUrls: [
      "/images/IMG-20250628-WA0078.jpg",
      "/images/IMG-20250628-WA0079.jpg",
      "/images/IMG-20250628-WA0080.jpg",
    ],
    clientReview: "La estructura es perfecta para nuestros paneles solares. Muy resistente y bien calculada para las condiciones climáticas de la zona.",
    clientName: "Energía Solar Perú",
    location: "Arequipa",
    completionDate: "Septiembre 2023"
  },
  {
    title: "Barandales Metálicos para Edificio",
    slug: "barandales-metalicos-edificio",
    description: "Fabricación e instalación de barandales metálicos para balcones y escaleras de edificio residencial. Diseño moderno con acabado anticorrosivo y pasamanos de seguridad.",
    imageUrl: "/images/IMG-20250628-WA0081.jpg",
    category: "Barandales y Pasamanos",
    imageUrls: [
      "/images/IMG-20250628-WA0082.jpg",
      "/images/IMG-20250628-WA0084.jpg",
      "/images/IMG-20250628-WA0085.jpg",
    ],
    clientReview: "Los barandales quedaron muy elegantes y seguros. El acabado es de primera calidad y la instalación fue muy profesional.",
    clientName: "Constructora Horizonte",
    location: "Lima",
    completionDate: "Agosto 2023"
  },
  {
    title: "Portón Metálico Automatizado",
    slug: "porton-metalico-automatizado",
    description: "Fabricación e instalación de portón metálico automatizado para acceso vehicular. Incluye motor eléctrico, sistema de seguridad y control remoto. Diseño resistente y elegante.",
    imageUrl: "/images/IMG-20250628-WA0086.jpg",
    category: "Portones y Rejas",
    imageUrls: [
      "/images/IMG-20250628-WA0087.jpg",
      "/images/IMG-20250628-WA0088.jpg",
      "/images/IMG-20250628-WA0089.jpg",
    ],
    clientReview: "El portón funciona perfectamente y es muy seguro. La automatización facilita mucho el acceso y el diseño es muy elegante.",
    clientName: "Familia Rodríguez",
    location: "Arequipa",
    completionDate: "Julio 2023"
  },
  {
    title: "Refuerzo Estructural de Edificio",
    slug: "refuerzo-estructural-edificio",
    description: "Refuerzo estructural de edificio comercial con elementos metálicos. Incluye análisis estructural, diseño de refuerzos y ejecución de obras. Certificación de ingeniería.",
    imageUrl: "/images/IMG-20250628-WA0090.jpg",
    category: "Refuerzos Estructurales",
    imageUrls: [
      "/images/IMG-20250628-WA0091.jpg",
      "/images/IMG-20250628-WA0093.jpg",
      "/images/IMG-20250628-WA0095.jpg",
    ],
    clientReview: "El refuerzo estructural fue fundamental para la seguridad del edificio. El trabajo técnico fue excelente y cumplieron todos los estándares de seguridad.",
    clientName: "Inmobiliaria Central",
    location: "Lima",
    completionDate: "Junio 2023"
  }
];
