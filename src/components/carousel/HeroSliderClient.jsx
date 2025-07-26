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
    <div className="relative w-full h-[60vw] xs:h-[55vw] sm:h-[50vw] md:h-[45vw] lg:h-[40vw] xl:h-[35vw] min-h-[280px] xs:min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px] max-h-[600px] overflow-hidden bg-primary">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`hero-slide-img${active === idx ? ' active' : ''}`}
          style={{ zIndex: idx }}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      {/* Overlay gradient para mejor legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-5 pointer-events-none"></div>
      
      {/* Contenedor de texto optimizado para todos los dispositivos */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold text-white text-left drop-shadow-2xl tracking-tight leading-tight max-w-4xl">
            {images[active].text}
          </h1>
        </div>
      </div>
      
      {/* Indicadores de navegación */}
      <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
              active === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setActive(idx)}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Estilos extraídos a HeroSliderClient.css */}
    </div>
  );
} 