export interface Project {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  category: string;
  clientReview: string;
  clientName: string;
  location: string;
  completionDate: string;
  featured: boolean;
}

// Categorías organizadas jerárquicamente
export const projectCategories = {
  // INFRAESTRUCTURA INDUSTRIAL Y COMERCIAL
  "Naves Industriales": {
    name: "Naves Industriales y Plantas de Procesamiento",
    subcategories: [
      "Naves Industriales",
      "Plantas de Procesamiento",
      "Vestuarios Industriales",
      "Mobiliario Industrial"
    ]
  },
  "Infraestructura Comercial": {
    name: "Infraestructura Comercial y Empresarial",
    subcategories: [
      "Mezanines y Entrepisos",
      "Andamios Industriales",
      "Techos Metálicos Comerciales",
      "Oficinas"
    ]
  },
  
  // INFRAESTRUCTURA DE SALUD
  "Infraestructura de Salud": {
    name: "Hospitales y Centros Médicos",
    subcategories: [
      "Hospitales",
      "Clínicas",
      "Centrales de Esterilización"
    ]
  },
  
  // INFRAESTRUCTURA TURÍSTICA Y COMERCIAL
  "Infraestructura Turística": {
    name: "Centros Comerciales y Turismo",
    subcategories: [
      "Restaurantes Turísticos",
      "Galerías Comerciales",
      "Centros de Entretenimiento"
    ]
  },
  
  // ESTRUCTURAS METÁLICAS ESPECIALIZADAS
  "Estructuras Metálicas": {
    name: "Cubiertas y Techos Metálicos",
    subcategories: [
      "Techos Sol y Sombra",
      "Pasamanos",
      "Estructuras Especiales"
    ]
  },
  
  // SERVICIOS DE MANTENIMIENTO Y SEGURIDAD
  "Mantenimiento Industrial": {
    name: "Mantenimiento Industrial",
    subcategories: [
      "Cercos de Seguridad",
      "Mantenimiento de Estructuras"
    ]
  },
  
  // CARPINTERÍA METÁLICA
  "Carpintería Metálica": {
    name: "Puertas y Ventanas",
    subcategories: [
      "Puertas Metálicas",
      "Portones",
      "Ventanas"
    ]
  },
  
};

export const projects: Project[] = [
  // ========================================
  // INFRAESTRUCTURA INDUSTRIAL Y COMERCIAL
  // ========================================
  
  // Naves Industriales y Plantas de Procesamiento
  {
    title: "Nave Industrial para Despacho - Packing",
    slug: "nave-industrial-despacho-packing-plantaciones-el-sol",
    description: "Construcción completa de nave industrial para despacho y packing en Plantaciones El Sol. Incluye estructura metálica, techado, sistemas de ventilación y áreas de trabajo optimizadas para procesamiento agrícola.",
    imageUrl: "/images/Proyectos/nave-industrial-packing.jpg",
    category: "Naves Industriales",
    clientReview: "Excelente trabajo en nuestra nave industrial. La estructura es muy sólida y optimizada para nuestras operaciones de packing. Muy profesionales.",
    clientName: "Plantaciones El Sol",
    location: "Olmos",
    completionDate: "Marzo 2024",
    featured: true
  },
  {
    title: "Construcción de Vestuarios - Cosecha",
    slug: "construccion-vestuarios-cosecha-plantaciones-el-sol",
    description: "Construcción de vestuarios para trabajadores de cosecha en Plantaciones El Sol. Incluye estructura metálica, techado, instalaciones sanitarias y áreas de descanso.",
    imageUrl: "/images/Proyectos/vestuarios-cosecha.jpg",
    category: "Naves Industriales",
    clientReview: "Los vestuarios quedaron muy funcionales y cómodos para nuestros trabajadores. Construcción de primera calidad.",
    clientName: "Plantaciones El Sol",
    location: "Olmos",
    completionDate: "Febrero 2024",
    featured: false
  },
  {
    title: "Mobiliario en Acero Inoxidable para Packing",
    slug: "mobiliario-acero-inoxidable-packing-plantaciones-el-sol",
    description: "Fabricación e instalación de mobiliario especializado en acero inoxidable para planta de packing. Incluye mesas de trabajo, estanterías, y sistemas de transporte adaptados a normas sanitarias.",
    imageUrl: "/images/Proyectos/mobiliario-inoxidable-packing.jpg",
    category: "Naves Industriales",
    clientReview: "El mobiliario es perfecto para nuestras operaciones. Cumple con todas las normas sanitarias y es muy resistente.",
    clientName: "Plantaciones El Sol",
    location: "Olmos",
    completionDate: "Abril 2024",
    featured: true
  },
  
  // Infraestructura Comercial y Empresarial
  {
    title: "Mezanine y Entrepiso",
    slug: "mezanine-entrepiso-distribuidora-pialesa",
    description: "Construcción de mezanine y entrepiso metálico para optimizar espacios en Distribuidora Pialesa. Incluye estructura de acero, pisos industriales y sistemas de acceso.",
    imageUrl: "/images/Proyectos/mezanine-entrepiso.jpg",
    category: "Infraestructura Comercial",
    clientReview: "El mezanine nos permitió duplicar nuestro espacio de almacenamiento. Muy bien construido y funcional.",
    clientName: "Distribuidora Pialesa",
    location: "Lima",
    completionDate: "Enero 2024",
    featured: false
  },
  {
    title: "Andamios Industriales para Tiendas",
    slug: "andamios-industriales-tiendas-distribuidora-pintel",
    description: "Fabricación e instalación de andamios industriales para tiendas de Distribuidora Pintel SAC. Sistemas modulares de alta resistencia para exhibición y almacenamiento.",
    imageUrl: "/images/Proyectos/andamios-industriales.jpg",
    category: "Infraestructura Comercial",
    clientReview: "Los andamios son muy resistentes y nos permiten organizar mejor nuestros productos. Excelente calidad.",
    clientName: "Distribuidora Pintel SAC",
    location: "Lima",
    completionDate: "Diciembre 2023",
    featured: false
  },
  {
    title: "Techo Metálico Plano para Taller Mecánico",
    slug: "techo-metalico-plano-taller-mecanico-emtrafesa",
    description: "Instalación de techo metálico plano para taller mecánico de Emtrafesa. Estructura de acero galvanizado, láminas metálicas y sistema de drenaje completo.",
    imageUrl: "/images/Proyectos/techo-metalico-taller.jpg",
    category: "Infraestructura Comercial",
    clientReview: "El techo es muy resistente y funcional para nuestro taller. Protege perfectamente nuestros equipos.",
    clientName: "Emtrafesa",
    location: "Trujillo",
    completionDate: "Noviembre 2023",
    featured: true
  },
  {
    title: "Techo en Voladizo Zona de Preembarque",
    slug: "techo-voladizo-preembarque-emtrafesa",
    description: "Construcción de techo en voladizo para zona de preembarque de Emtrafesa. Diseño especializado para protección de mercancías y operaciones logísticas.",
    imageUrl: "/images/Proyectos/techo-voladizo.jpg",
    category: "Infraestructura Comercial",
    clientReview: "El techo en voladizo es perfecto para nuestras operaciones de carga. Muy bien diseñado y construido.",
    clientName: "Emtrafesa",
    location: "Trujillo",
    completionDate: "Octubre 2023",
    featured: false
  },
  {
    title: "Techo Metálico Oficina - Imprenta Gardel",
    slug: "techo-metalico-oficina-imprenta-gardel",
    description: "Instalación de techo metálico para oficinas de Imprenta Gardel. Incluye estructura liviana, aislamiento térmico y acabados interiores.",
    imageUrl: "/images/Proyectos/techo-oficina-gardel.jpg",
    category: "Infraestructura Comercial",
    clientReview: "El techo de la oficina quedó excelente. Muy buen aislamiento y acabado profesional.",
    clientName: "Imprenta Gardel",
    location: "Lima",
    completionDate: "Septiembre 2023",
    featured: false
  },
  {
    title: "Techo a Dos Aguas - Imprenta Gardel",
    slug: "techo-dos-aguas-imprenta-gardel",
    description: "Construcción de techo a dos aguas para área de producción de Imprenta Gardel. Diseño clásico con estructura metálica y sistema de ventilación natural.",
    imageUrl: "/images/Proyectos/techo-dos-aguas.jpg",
    category: "Infraestructura Comercial",
    clientReview: "El techo a dos aguas es muy funcional y estético. Permite buena ventilación en nuestro área de producción.",
    clientName: "Imprenta Gardel",
    location: "Lima",
    completionDate: "Agosto 2023",
    featured: false
  },
  {
    title: "Techo Metálico Oficina - Piedras Castillo",
    slug: "techo-metalico-oficina-piedras-castillo",
    description: "Instalación de techo metálico para oficinas de Piedras Castillo. Estructura moderna con acabados premium y sistema de iluminación integrado.",
    imageUrl: "/images/Proyectos/techo-oficina-castillo.jpg",
    category: "Infraestructura Comercial",
    clientReview: "El techo de nuestras oficinas quedó muy elegante y funcional. Excelente trabajo y acabados.",
    clientName: "Piedras Castillo",
    location: "Arequipa",
    completionDate: "Julio 2023",
    featured: false
  },

  // ========================================
  // INFRAESTRUCTURA DE SALUD
  // ========================================
  
  // Hospitales y Centros Médicos
  {
    title: "Central de Esterilización - IREN Norte",
    slug: "central-esterilizacion-iren-norte",
    description: "Construcción de central de esterilización para IREN Norte. Incluye estructura especializada, sistemas de ventilación, acabados sanitarios y cumplimiento de normas hospitalarias.",
    imageUrl: "/images/Proyectos/central-esterilizacion.jpg",
    category: "Infraestructura de Salud",
    clientReview: "La central de esterilización cumple con todos los estándares hospitalarios. Trabajo muy profesional y técnico.",
    clientName: "IREN Norte",
    location: "Trujillo",
    completionDate: "Mayo 2024",
    featured: true
  },
  {
    title: "Instalación de Cobertura - Hospital Regional Docente de Trujillo",
    slug: "instalacion-cobertura-hospital-trujillo",
    description: "Instalación de cobertura especializada en Hospital Regional Docente de Trujillo. Diseño hospitalario con materiales certificados y sistemas de protección climática.",
    imageUrl: "/images/Proyectos/cobertura-hospital.jpg",
    category: "Infraestructura de Salud",
    clientReview: "La cobertura protege perfectamente nuestras instalaciones. Cumple con todas las normas hospitalarias.",
    clientName: "Hospital Regional Docente de Trujillo",
    location: "Trujillo",
    completionDate: "Abril 2024",
    featured: true
  },
  {
    title: "Ampliación de Salas de Espera - Clínica Suárez",
    slug: "ampliacion-salas-espera-clinica-suarez",
    description: "Ampliación de salas de espera para Clínica Suárez. Incluye estructura metálica, acabados sanitarios, sistemas de climatización y diseño ergonómico.",
    imageUrl: "/images/Proyectos/salas-espera-clinica.jpg",
    category: "Infraestructura de Salud",
    clientReview: "Las salas de espera quedaron muy cómodas y funcionales. Nuestros pacientes están muy satisfechos.",
    clientName: "Clínica Suárez",
    location: "Lima",
    completionDate: "Marzo 2024",
    featured: false
  },

  // ========================================
  // INFRAESTRUCTURA TURÍSTICA Y COMERCIAL
  // ========================================
  
  // Centros Comerciales y Turismo
  {
    title: "Escenario y Almacén - Restaurant Turístico El Limonero",
    slug: "escenario-almacen-restaurant-el-limonero",
    description: "Construcción de escenario y almacén para Restaurant Turístico El Limonero. Diseño arquitectónico especializado para entretenimiento y almacenamiento gastronómico.",
    imageUrl: "/images/Proyectos/escenario-restaurant.jpg",
    category: "Infraestructura Turística",
    clientReview: "El escenario transformó nuestro restaurant. Ahora podemos ofrecer espectáculos y nuestros clientes están encantados.",
    clientName: "Restaurant Turístico El Limonero",
    location: "Trujillo",
    completionDate: "Febrero 2024",
    featured: true
  },
  {
    title: "Proyecto Integral - Galería La Promesa de Dios",
    slug: "proyecto-integral-galeria-promesa-dios",
    description: "Proyecto integral para Galería La Promesa de Dios incluyendo techos metálicos, pasamanos de seguridad, andamios comerciales, reja de ingreso, puertas enrollables y divisiones de ambiente.",
    imageUrl: "/images/Proyectos/galeria-integral.jpg",
    category: "Infraestructura Turística",
    clientReview: "Un proyecto muy completo que transformó toda nuestra galería. Excelente coordinación y acabados de primera.",
    clientName: "Galería La Promesa de Dios",
    location: "Lima",
    completionDate: "Enero 2024",
    featured: true
  },

  // ========================================
  // ESTRUCTURAS METÁLICAS ESPECIALIZADAS
  // ========================================
  
  // Cubiertas y Techos Metálicos
  {
    title: "Techos Estilo Sol y Sombra",
    slug: "techos-sol-sombra-diversos",
    description: "Instalación de techos estilo sol y sombra para diversos proyectos. Diseño especializado para protección solar con ventilación natural y estructura liviana.",
    imageUrl: "/images/Proyectos/techos-sol-sombra.jpg",
    category: "Estructuras Metálicas",
    clientReview: "Los techos sol y sombra son perfectos para nuestro clima. Proporcionan protección y ventilación ideal.",
    clientName: "Diversos Clientes",
    location: "Nacional",
    completionDate: "Diversos",
    featured: false
  },
  {
    title: "Pasamanos en Acero Inoxidable",
    slug: "pasamanos-acero-inoxidable-diversos",
    description: "Fabricación e instalación de pasamanos en acero inoxidable para diversos proyectos. Diseño moderno, resistente a la corrosión y cumplimiento de normas de seguridad.",
    imageUrl: "/images/Proyectos/pasamanos-inoxidable.jpg",
    category: "Estructuras Metálicas",
    clientReview: "Los pasamanos son muy elegantes y resistentes. Perfectos para nuestras instalaciones.",
    clientName: "Diversos Clientes",
    location: "Nacional",
    completionDate: "Diversos",
    featured: false
  },

  // ========================================
  // SERVICIOS DE MANTENIMIENTO Y SEGURIDAD
  // ========================================
  
  // Mantenimiento Industrial
  {
    title: "Mantenimiento de Cercos con Malla Olímpica - Subestación UPAO",
    slug: "mantenimiento-cercos-malla-olimpica-upao",
    description: "Mantenimiento especializado de cercos con malla olímpica en subestación de generadores eléctricos de UPAO. Incluye reparación, refuerzo y pintura anticorrosiva.",
    imageUrl: "/images/Proyectos/cercos-malla-upao.jpg",
    category: "Mantenimiento Industrial",
    clientReview: "El mantenimiento de los cercos fue muy profesional. Ahora tenemos mayor seguridad en nuestras instalaciones.",
    clientName: "UPAO",
    location: "Trujillo",
    completionDate: "Junio 2024",
    featured: false
  },

  // ========================================
  // CARPINTERÍA METÁLICA
  // ========================================
  
  // Puertas y Ventanas
  {
    title: "Puertas, Portones y Ventanas",
    slug: "puertas-portones-ventanas-diversos",
    description: "Fabricación e instalación de puertas, portones y ventanas metálicas para diversos proyectos. Diseños personalizados con acabados premium y sistemas de seguridad.",
    imageUrl: "/images/Proyectos/carpinteria-metalica.jpg",
    category: "Carpintería Metálica",
    clientReview: "Las puertas y ventanas son de excelente calidad. Muy seguras y con acabados perfectos.",
    clientName: "Diversos Clientes",
    location: "Nacional",
    completionDate: "Diversos",
    featured: false
  }
];