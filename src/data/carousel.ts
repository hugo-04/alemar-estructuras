// import type { ImageMetadata } from 'astro:assets'; // No longer needed if images are in public

interface CarouselImage {
  src: string; // Changed to string as images will be directly referenced from public
  alt: string;
}

export const mainCarouselImages: CarouselImage[] = [
  { src: '/images/techo-casa.jpg', alt: 'Techo instalado en casa de cliente' },
  { src: '/images/estructura-metalica-almacen.jpg', alt: 'Estructura metálica para almacén' },
  { src: '/images/pergola-jardin.jpg', alt: 'Pérgola metálica en jardín' },
  { src: '/images/revestimiento-fachada-edificio.jpg', alt: 'Revestimiento de fachada de edificio' },
  { src: '/images/instalacion-canaletas.jpg', alt: 'Instalación de canaletas' },
  { src: '/images/reparacion-techo-industrial.jpg', alt: 'Reparación de techo industrial' },
];

export const clientCarouselImages: CarouselImage[] = [
  { src: '/images/IMG-20250628-WA0090.jpg', alt: 'Logo Cliente 1' },
  { src: '/images/IMG-20250628-WA0093.jpg', alt: 'Logo Cliente 2' },
  { src: '/images/IMG-20250628-WA0095.jpg', alt: 'Logo Cliente 3' },
];
