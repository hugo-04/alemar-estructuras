// import type { ImageMetadata } from 'astro:assets'; // No longer needed if images are in public

interface CarouselImage {
  src: string; // Changed to string as images will be directly referenced from public
  alt: string;
}

export const mainCarouselImages: CarouselImage[] = [
  { src: 'https://via.placeholder.com/800x400/1a2238/FFFFFF?text=Proyecto+1', 
    alt: 'Imagen de Carrusel 1' },
  { src: 'https://via.placeholder.com/800x400/1a2238/FFFFFF?text=Proyecto+2', 
    alt: 'Imagen de Carrusel 2' },
  { src: 'https://via.placeholder.com/800x400/1a2238/FFFFFF?text=Proyecto+3', 
    alt: 'Imagen de Carrusel 3' },
];

export const clientCarouselImages: CarouselImage[] = [
  { src: 'https://via.placeholder.com/200x100/1a2238/FFFFFF?text=Cliente+1', 
    alt: 'Logo Cliente 1' },
  { src: 'https://via.placeholder.com/200x100/1a2238/FFFFFF?text=Cliente+2', 
    alt: 'Logo Cliente 2' },
  { src: 'https://via.placeholder.com/200x100/1a2238/FFFFFF?text=Cliente+3', 
    alt: 'Logo Cliente 3' },
];
