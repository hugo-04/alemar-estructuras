export interface Service {
  title: string;
  slug: string; // Identificador único y amigable para la URL del servicio (usar guiones en lugar de espacios).
  description: string; // Descripción detallada del servicio.
  whatsappLink: string; // Enlace de WhatsApp para cotizar este servicio.
  imageUrls: string[]; // Array de URLs de imágenes del servicio (debe estar en la carpeta public/images).
  category: string; // Categoría a la que pertenece el servicio.
  isMostClicked?: boolean; // Opcional: true si quieres destacarlo como "más clicado" en la página principal de servicios.
}

// Array que contiene todos los servicios disponibles.
// Para agregar un nuevo servicio, simplemente añade un nuevo objeto a este array.
// Asegúrate de que el 'slug' sea único y que las 'imageUrls' apunten a imágenes válidas en /public/images.
export const services: Service[] = [
  // --- CATEGORÍA: TECHOS METÁLICOS ---
  {
    title: "Techos Metálicos: Sol y Sombra",
    slug: "techos-metalicos-sol-y-sombra",
    description: "Ideales para terrazas, patios y decoraciones comerciales.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20techo%20sol%20y%20sombra.",
    imageUrls: ["/images/techo-casa.jpg"],
    category: "Techos Metálicos",
    isMostClicked: true
  },
  {
    title: "Techos Metálicos: Comerciales",
    slug: "techos-metalicos-comerciales",
    description: "Techos metálicos planos o a dos aguas cuya estructura es a base de vigas reticuladas o listones de soporte. Siendo el Aluzinc TR4 la cobertura más utilizada.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20techo%20comercial.",
    imageUrls: ["/images/techo-comercial.jpg"],
    category: "Techos Metálicos"
  },
  {
    title: "Techos Metálicos: Rectos o Planos",
    slug: "techos-metalicos-rectos-o-planos",
    description: "Techos metálicos cuya inclinación no supera los 10° de inclinación, son versátiles y más económicos debido a que se usa menos materiales.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20techo%20recto%20o%20plano.",
    imageUrls: ["/images/techo-recto.jpg"],
    category: "Techos Metálicos"
  },
  {
    title: "Techos Metálicos: Parabólicos",
    slug: "techos-metalicos-parabolicos",
    description: "Permite cubrir grandes luces sin necesidad de parantes intermedios, ideal para almacenes o colegios.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20techo%20parabolico.",
    imageUrls: ["/images/techo-parabolico.jpg"],
    category: "Techos Metálicos"
  },
  {
    title: "Techos Metálicos: Dos Aguas",
    slug: "techos-metalicos-dos-aguas",
    description: "Consta de dos caras inclinadas lo que permite evacuar fácilmente el agua, son ideales para zonas con fuertes lluvias.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20techo%20dos%20aguas.",
    imageUrls: ["/images/techo-dos-aguas.jpg"],
    category: "Techos Metálicos"
  },
  {
    title: "Techos Metálicos: Naves Industriales",
    slug: "techos-metalicos-naves-industriales",
    description: "Construcciones metálicas de gran tamaño ideal para almacenes, plantas de producción y/o cualquier espacio industrial.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20nave%20industrial.",
    imageUrls: ["/images/nave-industrial.jpg"],
    category: "Techos Metálicos"
  },
  // --- CATEGORÍA: CONSTRUCCIÓN EN SECO ---
  {
    title: "Construcción en seco",
    slug: "construccion-en-seco",
    description: "Estructura metálica + drywall.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20construcción%20en%20seco.",
    imageUrls: ["/images/estructura-metalica-almacen.jpg"],
    category: "Construcción en seco"
  },
  // --- CATEGORÍA: MEZANINE Y ENTREPISOS METÁLICOS ---
  {
    title: "Mezanine y entrepisos metálicos",
    slug: "mezanine-entrepisos-metalicos",
    description: "Estructuras metálicas para crear nuevos niveles o entrepisos en ambientes industriales o comerciales.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20mezanine%20o%20entrepisos%20metálicos.",
    imageUrls: ["/images/IMG-20250628-WA0057.jpg"],
    category: "Mezanine y entrepisos metálicos"
  },
  // --- CATEGORÍA: ESTRUCTURAS CON ACABADO COLOR MADERA ---
  {
    title: "Estructuras con acabado color madera",
    slug: "estructuras-color-madera",
    description: "Estructuras metálicas con acabados que simulan la madera, combinando durabilidad y diseño.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20estructura%20con%20acabado%20color%20madera.",
    imageUrls: ["/images/IMG-20250628-WA0058.jpg"],
    category: "Estructuras con acabado color madera"
  },
  // --- CATEGORÍA: TRABAJOS EN ACERO INOXIDABLE ---
  {
    title: "Trabajos en acero inoxidable",
    slug: "trabajos-acero-inoxidable",
    description: "Pasamanos, barandas, mobiliario de cocina y hospitalario.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20trabajo%20en%20acero%20inoxidable.",
    imageUrls: ["/images/IMG-20250628-WA0059.jpg"],
    category: "Trabajos en acero inoxidable"
  },
  // --- CATEGORÍA: CARPINTERÍA METÁLICA ---
  {
    title: "Carpintería Metálica",
    slug: "carpinteria-metalica",
    description: "Puertas, ventanas, cercos, rejas, escaleras, portones y cerramientos en general.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20carpintería%20metálica.",
    imageUrls: ["/images/IMG-20250628-WA0060.jpg"],
    category: "Carpintería Metálica"
  },
  // --- CATEGORÍA: MANTENIMIENTO GENERAL DE ESTRUCTURAS METÁLICAS ---
  {
    title: "Mantenimiento general de Estructuras Metálicas",
    slug: "mantenimiento-estructuras-metalicas",
    description: "Servicios de mantenimiento preventivo y correctivo para prolongar la vida útil de las estructuras metálicas.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20mantenimiento%20de%20estructuras%20metálicas.",
    imageUrls: ["/images/IMG-20250628-WA0061.jpg"],
    category: "Mantenimiento general de Estructuras Metálicas"
  },
  {
    title: "Mantenimiento y Reparación de Techos",
    slug: "mantenimiento-reparacion-techos",
    description: "Servicios de mantenimiento preventivo y correctivo para prolongar la vida útil de su techo, incluyendo sellado de filtraciones y reemplazo de piezas dañadas.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20el%20mantenimiento%20y%20reparación%20de%20techos.",
    imageUrls: [
      "/images/reparacion-techo-industrial.jpg",
      "/images/IMG-20250628-WA0060.jpg",
      "/images/IMG-20250628-WA0061.jpg",
      "/images/IMG-20250628-WA0062.jpg"
    ],
    category: "Techos",
    isMostClicked: true
  },
  {
    title: "Fabricación de Estructuras Metálicas",
    slug: "fabricacion-estructuras-metalicas",
    description: "Diseño y fabricación de estructuras metálicas a medida para naves industriales, almacenes, pasarelas y cualquier proyecto que requiera solidez y precisión.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20fabricación%20de%20estructuras%20metálicas.",
    imageUrls: [
      "/images/estructura-metalica-almacen.jpg",
      "/images/IMG-20250628-WA0063.jpg",
      "/images/IMG-20250628-WA0064.jpg",
      "/images/IMG-20250628-WA0065.jpg"
    ],
    category: "Estructuras",
    isMostClicked: true
  },
  {
    title: "Soldadura Especializada",
    slug: "soldadura-especializada",
    description: "Servicios de soldadura TIG, MIG y de arco para diversos metales, asegurando uniones fuertes y duraderas en sus proyectos.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20soldadura%20especializada.",
    imageUrls: [
      "/images/IMG-20250628-WA0066.jpg",
      "/images/IMG-20250628-WA0067.jpg",
      "/images/IMG-20250628-WA0068.jpg",
      "/images/IMG-20250628-WA0069.jpg"
    ],
    category: "Estructuras",
    isMostClicked: true
  },
  {
    title: "Impermeabilización de Techos",
    slug: "impermeabilizacion-techos",
    description: "Aplicación de sistemas impermeabilizantes de alta calidad para proteger su techo de la humedad y las filtraciones, prolongando su vida útil.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20impermeabilización%20de%20techos.",
    imageUrls: [
      "/images/IMG-20250628-WA0070.jpg",
      "/images/IMG-20250628-WA0071.jpg",
      "/images/IMG-20250628-WA0072.jpg",
      "/images/IMG-20250628-WA0073.jpg"
    ],
    category: "Techos",
    isMostClicked: true
  },
  {
    title: "Diseño y Montaje de Cubiertas",
    slug: "diseno-montaje-cubiertas",
    description: "Diseño personalizado y montaje profesional de cubiertas para patios, terrazas y áreas recreativas, combinando funcionalidad y estética.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20el%20diseño%20y%20montaje%20de%20cubiertas.",
    imageUrls: [
      "/images/IMG-20250628-WA0074.jpg",
      "/images/IMG-20250628-WA0075.jpg",
      "/images/IMG-20250628-WA0076.jpg",
      "/images/IMG-20250628-WA0077.jpg"
    ],
    category: "Techos",
    isMostClicked: true
  },
  {
    title: "Instalación de Canaletas y Bajantes",
    slug: "instalacion-canaletas-bajantes",
    description: "Sistemas completos de canaletas y bajantes para una correcta gestión del agua de lluvia, protegiendo su propiedad de la erosión y filtraciones.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20instalación%20de%20canaletas%20y%20bajantes.",
    imageUrls: [
      "/images/instalacion-canaletas.jpg",
      "/images/IMG-20250628-WA0078.jpg",
      "/images/IMG-20250628-WA0079.jpg",
      "/images/IMG-20250628-WA0080.jpg"
    ],
    category: "Techos"
  },
  {
    title: "Revestimiento de Fachadas Metálicas",
    slug: "revestimiento-fachadas-metalicas",
    description: "Embellecimiento y protección de fachadas con revestimientos metálicos, ofreciendo un acabado moderno y de bajo mantenimiento.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20el%20revestimiento%20de%20fachadas%20metálicas.",
    imageUrls: [
      "/images/revestimiento-fachada-edificio.jpg",
      "/images/IMG-20250628-WA0081.jpg",
      "/images/IMG-20250628-WA0082.jpg",
      "/images/IMG-20250628-WA0084.jpg"
    ],
    category: "Estructuras"
  },
  
  {
    title: "Estructuras para Paneles Solares",
    slug: "estructuras-paneles-solares",
    description: "Diseño y montaje de estructuras metálicas robustas y seguras para la instalación de paneles solares en techos y terrenos.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20las%20estructuras%20para%20paneles%20solares.",
    imageUrls: [
      "/images/IMG-20250628-WA0085.jpg",
      "/images/IMG-20250628-WA0086.jpg",
      "/images/IMG-20250628-WA0087.jpg",
      "/images/IMG-20250628-WA0088.jpg"
    ],
    category: "Estructuras"
  },
  {
    title: "Pérgolas y Toldos Metálicos",
    slug: "pergolas-toldos-metalicos",
    description: "Fabricación e instalación de pérgolas y toldos metálicos para crear espacios de sombra y confort en jardines y terrazas.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20las%20pérgolas%20y%20toldos%20metálicos.",
    imageUrls: [
      "/images/pergola-jardin.jpg",
      "/images/IMG-20250628-WA0089.jpg",
      "/images/IMG-20250628-WA0090.jpg",
      "/images/IMG-20250628-WA0091.jpg"
    ],
    category: "Mobiliario"
  },
  {
    title: "Barandales y Pasamanos Metálicos",
    slug: "barandales-pasamanos-metalicos",
    description: "Diseño y fabricación de barandales y pasamanos de metal para escaleras, balcones y terrazas, combinando seguridad y diseño.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20los%20barandales%20y%20pasamanos%20metálicos.",
    imageUrls: [
      "/images/IMG-20250628-WA0093.jpg",
      "/images/IMG-20250628-WA0095.jpg",
      "/images/IMG_20230916_090815.jpg",
      "/images/IMG-20250628-WA0060.jpg"
    ],
    category: "Mobiliario"
  },
  {
    title: "Portones y Rejas Metálicas",
    slug: "portones-rejas-metalicas",
    description: "Fabricación e instalación de portones y rejas metálicas personalizadas para entradas, jardines y seguridad perimetral.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20los%20portones%20y%20rejas%20metálicas.",
    imageUrls: [
      "/images/IMG-20250628-WA0061.jpg",
      "/images/IMG-20250628-WA0062.jpg",
      "/images/IMG-20250628-WA0063.jpg",
      "/images/IMG-20250628-WA0064.jpg"
    ],
    category: "Mobiliario"
  },
  {
    title: "Refuerzo Estructural Metálico",
    slug: "refuerzo-estructural-metalico",
    description: "Servicios de refuerzo estructural con elementos metálicos para mejorar la resistencia y estabilidad de edificios existentes.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20el%20refuerzo%20estructural%20metálico.",
    imageUrls: [
      "/images/IMG-20250628-WA0065.jpg",
      "/images/IMG-20250628-WA0066.jpg",
      "/images/IMG-20250628-WA0067.jpg",
      "/images/IMG-20250628-WA0068.jpg"
    ],
    category: "Estructuras"
  },
  {
    title: "Limpieza y Pintura de Techos",
    slug: "limpieza-pintura-techos",
    description: "Servicios de limpieza profunda y aplicación de pintura protectora para techos, mejorando su apariencia y resistencia a la intemperie.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20limpieza%20y%20pintura%20de%20techos.",
    imageUrls: [
      "/images/IMG-20250628-WA0069.jpg",
      "/images/IMG-20250628-WA0070.jpg",
      "/images/IMG-20250628-WA0071.jpg",
      "/images/IMG-20250628-WA0072.jpg"
    ],
    category: "Techos"
  },
  {
    title: "Instalación de Domos y Tragaluces",
    slug: "instalacion-domos-tragaluces",
    description: "Instalación de domos y tragaluces metálicos para optimizar la entrada de luz natural en sus espacios, reduciendo el consumo energético.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20instalación%20de%20domos%20y%20tragaluces.",
    imageUrls: [
      "/images/IMG-20250628-WA0073.jpg",
      "/images/IMG-20250628-WA0074.jpg",
      "/images/IMG-20250628-WA0075.jpg",
      "/images/IMG-20250628-WA0076.jpg"
    ],
    category: "Techos"
  },
  {
    title: "Diseño y Fabricación de Escaleras Metálicas",
    slug: "diseno-fabricacion-escaleras-metalicas",
    description: "Escaleras metálicas a medida, combinando funcionalidad, seguridad y un diseño que se adapte a la estética de su espacio.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20el%20diseño%20y%20fabricación%20de%20escaleras%20metálicas.",
    imageUrls: [
      "/images/IMG-20250628-WA0077.jpg",
      "/images/IMG-20250628-WA0078.jpg",
      "/images/IMG-20250628-WA0079.jpg",
      "/images/IMG-20250628-WA0080.jpg"
    ],
    category: "Mobiliario"
  },
  {
    title: "Mobiliario Urbano Metálico",
    slug: "mobiliario-urbano-metalico",
    description: "Fabricación de mobiliario urbano como bancas, papeleras y señalética en metal, resistentes y duraderos para espacios públicos y privados.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20el%20mobiliario%20urbano%20metálico.",
    imageUrls: [
      "/images/IMG-20250628-WA0081.jpg",
      "/images/IMG-20250628-WA0082.jpg",
      "/images/IMG-20250628-WA0084.jpg",
      "/images/IMG-20250628-WA0085.jpg"
    ],
    category: "Mobiliario"
  },
  {
    title: "Corte y Doblez de Lámina",
    slug: "corte-doblez-lamina",
    description: "Servicios de corte y doblez de lámina metálica con maquinaria de precisión para proyectos que requieren piezas a medida.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20el%20corte%20y%20doblez%20de%20lámina.",
    imageUrls: [
      "/images/IMG-20250628-WA0086.jpg",
      "/images/IMG-20250628-WA0087.jpg",
      "/images/IMG-20250628-WA0088.jpg",
      "/images/IMG-20250628-WA0089.jpg"
    ],
    category: "Procesos"
  },
  {
    title: "Asesoría y Consultoría en Proyectos Metálicos",
    slug: "asesoria-consultoria-proyectos-metalicos",
    description: "Asesoramiento experto en la planificación y ejecución de proyectos que involucren estructuras y elementos metálicos.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20la%20asesoría%20y%20consultoría%20en%20proyectos%20metálicos.",
    imageUrls: [
      "/images/IMG-20250628-WA0090.jpg",
      "/images/IMG-20250628-WA0091.jpg",
      "/images/IMG-20250628-WA0093.jpg",
      "/images/IMG-20250628-WA0095.jpg"
    ],
    category: "Consultoría"
  },
  {
    title: "Proyectos Especiales en Metal",
    slug: "proyectos-especiales-metal",
    description: "Desarrollo y ejecución de proyectos metálicos personalizados y complejos, adaptados a sus necesidades específicas y desafíos únicos.",
    whatsappLink: "https://wa.me/XXXXXXXXXXX?text=Hola,%20me%20interesa%20los%20proyectos%20especiales%20en%20metal.",
    imageUrls: [
      "/images/IMG_20230916_090815.jpg",
      "/images/IMG-20250628-WA0057.jpg",
      "/images/IMG-20250628-WA0058.jpg",
      "/images/IMG-20250628-WA0059.jpg"
    ],
    category: "Proyectos Especiales"
  },
].map(service => ({
  ...service,
  imageUrls: service.imageUrls,
  imageUrl: undefined
}));

/*
  Para agregar un nuevo servicio, simplemente añade un nuevo objeto a este array con las siguientes propiedades:
  - title: El título del servicio (string).
  - slug: Un identificador único y amigable para la URL del servicio (string, usar guiones en lugar de espacios).
  - description: Una descripción detallada del servicio (string).
  - whatsappLink: El enlace de WhatsApp para cotizar este servicio (string).
  - imageUrls: Un array de URLs de imágenes del servicio (string[]).
  - category: La categoría a la que pertenece el servicio (string).
  - isMostClicked: (Opcional) true si quieres destacarla como "más clicado" (boolean).
*/