import { useEffect, useRef, useState } from 'preact/hooks';
import '@/styles/ServiceCarousel.css';

export default function ServiceCarouselClient({ images = [], id, autoplay = true, interval = 3000 }) {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [instant, setInstant] = useState(false);
  const [imageStates, setImageStates] = useState({});
  const innerRef = useRef();
  const timeoutRef = useRef();

  // Función para determinar el object-fit basado en el tamaño de la imagen
  const handleImageLoad = (event, imageIndex) => {
    const img = event.target;
    const containerWidth = img.parentElement.offsetWidth;
    const containerHeight = img.parentElement.offsetHeight;
    
    // Si la imagen es más pequeña que el contenedor, usar contain
    // Si es más grande, usar cover
    const useContain = img.naturalWidth < containerWidth || img.naturalHeight < containerHeight;
    
    setImageStates(prev => ({
      ...prev,
      [imageIndex]: {
        objectFit: useContain ? 'contain' : 'cover',
        loaded: true
      }
    }));
  };

  // Autoplay
  useEffect(() => {
    if (!autoplay || images.length <= 1) return;
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [active, autoplay, interval, images.length]);

  // Función para avanzar
  function handleNext() {
    setTransitioning(true);
    setInstant(false);
    setActive((prev) => prev + 1);
  }

  // Efecto para el loop infinito visual
  useEffect(() => {
    if (!transitioning) return;
    if (active === images.length) {
      // Espera a que termine la transición
      const timer = setTimeout(() => {
        setTransitioning(false);
        setActive(0);
        if (innerRef.current) {
          innerRef.current.style.transition = 'none';
          innerRef.current.style.transform = `translateX(-100%)`;
          void innerRef.current.offsetWidth;
          innerRef.current.style.transition = '';
        }
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setTransitioning(false);
    }
  }, [active, images.length, transitioning]);

  // Transición instantánea al seleccionar miniatura
  function handleThumbnail(index) {
    if (index === active) return;
    setInstant(true);
    setActive(index);
  }

  // Calcular el índice real para el loop
  const displayIndex = active === images.length ? 0 : active;

  if (images.length === 0) {
    return (
      <div class="w-full h-full flex items-center justify-center bg-red-100 text-red-700 font-bold min-h-[180px] sm:min-h-[220px] md:min-h-[340px] rounded-3xl text-base sm:text-lg">
        No hay imágenes para este servicio
      </div>
    );
  }

  return (
    <div
      id={id}
      class="service-carousel-container relative flex flex-col items-center border border-slate-200/50 backdrop-blur-sm rounded-3xl shadow-2xl max-w-4xl w-full mx-auto group p-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div class="carousel-viewport w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center aspect-[16/9] min-h-[180px] sm:min-h-[220px] md:min-h-[340px] max-h-[800px]" style={{ border: '2px solid #e0e7ef', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.10)' }}>
        <div
          class={`carousel-inner flex w-full h-full ${instant ? '' : 'transition-transform duration-700 ease-in-out'}`}
          ref={innerRef}
          style={{
            transform: `translateX(-${(active + 1) * 100}%)`,
          }}
          onTransitionEnd={() => setInstant(false)}
        >
          {/* Clon de la última imagen al inicio para transición suave */}
          <div class="carousel-item w-full flex-shrink-0" data-index="clone-last">
            <img 
              src={images[images.length - 1].src} 
              alt={images[images.length - 1].alt} 
              class="w-full h-full max-w-full max-h-[800px] object-cover mx-auto bg-white transition-opacity duration-300"
              style={{ 
                objectFit: 'cover',
                opacity: imageStates[images.length - 1]?.loaded ? 1 : 0
              }}
              onLoad={(e) => handleImageLoad(e, images.length - 1)}
            />
          </div>
          {/* Imágenes originales */}
          {images.map((image, index) => (
            <div class="carousel-item w-full flex-shrink-0" data-index={index} key={index}>
              <img 
                src={image.src} 
                alt={image.alt || 'Imagen de servicio'} 
                class="w-full h-full max-w-full max-h-[800px] object-cover mx-auto bg-white transition-opacity duration-300"
                style={{ 
                  objectFit: 'cover',
                  opacity: imageStates[index]?.loaded ? 1 : 0
                }}
                onLoad={(e) => handleImageLoad(e, index)}
              />
            </div>
          ))}
          {/* Clon de la primera imagen al final para transición suave */}
          <div class="carousel-item w-full flex-shrink-0" data-index="clone-first">
            <img 
              src={images[0].src} 
              alt={images[0].alt} 
              class="w-full h-full max-w-full max-h-[800px] object-cover mx-auto bg-white transition-opacity duration-300"
              style={{ 
                objectFit: 'cover',
                opacity: imageStates[0]?.loaded ? 1 : 0
              }}
              onLoad={(e) => handleImageLoad(e, 0)}
            />
          </div>
        </div>
      </div>
      {/* Miniaturas */}
      <div class="flex justify-center overflow-x-auto scrollbar-hide w-full px-2 sm:px-4 mt-2 sm:mt-4">
        <div class="flex space-x-2 sm:space-x-3 md:space-x-4 max-w-full justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              class={`thumbnail-btn relative border-2 ${displayIndex === index ? 'border-blue-500' : 'border-transparent'} rounded-xl overflow-hidden focus:outline-none flex-shrink-0 transition-all duration-300 bg-white shadow-lg hover:shadow-xl hover:scale-110 group/thumb`}
              onClick={() => handleThumbnail(index)}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover transition-transform duration-300 group-hover/thumb:scale-110 bg-white rounded-xl"
                style={{ aspectRatio: '16/9' }}
              />
            </button>
          ))}
        </div>
      </div>
      {/* Contador */}
      <div class="text-center mt-2">
        <div class="inline-flex items-center bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg border border-slate-200/50">
          <span class="text-xs sm:text-sm md:text-base text-slate-700 font-semibold">
            <span class="carousel-counter-current text-blue-600">{displayIndex + 1}</span>
            <span class="text-slate-500 mx-1">de</span>
            <span class="carousel-counter-total">{images.length}</span>
          </span>
        </div>
      </div>
    </div>
  );
}