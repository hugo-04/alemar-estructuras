// import type { ImageMetadata } from 'astro:assets'; // No longer needed if images are in public

interface CarouselImage {
  src: string; // Changed to string as images will be directly referenced from public
  alt: string;
  text?: string; // Texto opcional para mostrar sobre la imagen
}

export const mainCarouselImages: CarouselImage[] = [
  { src: '/images/techo-casa.jpg',
    alt: 'Techo instalado en casa de cliente',
    text: 'Techos metálicos residenciales de alta calidad' },
  { src: '/images/estructura-metalica-almacen.jpg',
    alt: 'Estructura metálica para almacén',
    text: 'Estructuras industriales robustas y seguras' },
  { src: '/images/pergola-jardin.jpg',
    alt: 'Pérgola metálica en jardín',
    text: 'Diseño y elegancia en espacios exteriores' },
  { src: '/images/revestimiento-fachada-edificio.jpg',
    alt: 'Revestimiento de fachada de edificio',
    text: 'Fachadas modernas y resistentes' },
  { src: '/images/instalacion-canaletas.jpg',
    alt: 'Instalación de canaletas',
    text: 'Soluciones integrales en canaletas y drenaje' },
  { src: '/images/reparacion-techo-industrial.jpg',
    alt: 'Reparación de techo industrial',
    text: 'Mantenimiento y reparación profesional' },
];

export const clientCarouselImages: CarouselImage[] = [
  { src: '/images/Clientes/alemar-cliente-1.png',
    alt: 'Cliente 1' },
  { src: '/images/Clientes/alemar-cliente-2.png',
    alt: 'Cliente 2' },
  { src: '/images/Clientes/alemar-cliente-4.png',
    alt: 'Cliente 4' },
  { src: '/images/Clientes/alemar-cliente-6.png',
    alt: 'Cliente 6' },
  { src: '/images/Clientes/alemar-cliente-7.png',
    alt: 'Cliente 7' },
  { src: '/images/Clientes/alemar-cliente-8.png',
    alt: 'Cliente 8' },
  { src: '/images/Clientes/alemar-cliente-9.png',
    alt: 'Cliente 9' },
  { src: '/images/Clientes/alemar-cliente-10.png',
    alt: 'Cliente 10' },
  { src: '/images/Clientes/alemar-cliente-11.png',
    alt: 'Cliente 11' },
  { src: '/images/Clientes/alemar-cliente-12.png',
    alt: 'Cliente 12' },
  { src: '/images/Clientes/alemar-cliente-13.png',
    alt: 'Cliente 13' },
  { src: '/images/Clientes/alemar-cliente-14.png',
    alt: 'Cliente 14' },
  { src: '/images/Clientes/alemar-cliente-15.png',
    alt: 'Cliente 15' },
  { src: '/images/Clientes/alemar-cliente16.png',
    alt: 'Cliente 16' },
];
