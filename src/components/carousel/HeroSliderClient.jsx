import { useEffect, useRef, useState } from 'preact/hooks';
import '@/styles/HeroSliderClient.css';

export default function HeroSliderClient({ images, interval = 8000, transition = 2000 }) {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, images.length]);

  return (
    <div className="relative w-full h-[50vw] min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] max-h-[700px] overflow-hidden bg-primary">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`hero-slide-img${active === idx ? ' active' : ''}`}
          style={{ zIndex: idx }}
          loading="lazy"
        />
      ))}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
        <div>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-warning text-left drop-shadow-2xl tracking-tight leading-tight">
            {images[active].text}
          </h1>
        </div>
      </div>
      {/* Estilos extraídos a HeroSliderClient.css */}
    </div>
  );
} 