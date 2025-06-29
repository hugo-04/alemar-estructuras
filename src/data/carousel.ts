// import type { ImageMetadata } from 'astro:assets'; // No longer needed if images are in public

interface CarouselImage {
  src: string; // Changed to string as images will be directly referenced from public
  alt: string;
}

export const mainCarouselImages: CarouselImage[] = [
  { src: '/images/carousel-1.jpg', 
    alt: 'Imagen de Carrusel 1' },
  { src: '/images/carousel-2.jpg', 
    alt: 'Imagen de Carrusel 2' },
  { src: '/images/carousel-3.jpg', 
    alt: 'Imagen de Carrusel 3' },
];

export const clientCarouselImages: CarouselImage[] = [
  { src: '/images/client-1.png', 
    alt: 'Logo Cliente 1' },
  { src: '/images/client-2.png', 
    alt: 'Logo Cliente 2' },
  { src: '/images/client-3.png', 
    alt: 'Logo Cliente 3' },
];
