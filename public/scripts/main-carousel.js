/**
 * Script robusto para el carousel principal
 * Maneja navegación SPA de Astro de manera más efectiva
 * @version 3.0.0
 */

(function() {
  'use strict';

  // Configuración del carousel
  const CAROUSEL_CONFIG = {
    defaultInterval: 5000,
    transitionDuration: 700,
    debug: true
  };

  // Almacenar instancias de carousel para evitar duplicados
  const carouselInstances = new Map();

  /**
   * Logger para debugging
   */
  function log(message, level = 'info') {
    if (CAROUSEL_CONFIG.debug) {
      console[level](`[Carousel] ${message}`);
    }
  }

  /**
   * Inicializa un carousel específico
   * @param {HTMLElement} carousel - Elemento del carousel
   */
  function initCarousel(carousel) {
    try {
      const carouselId = carousel.id;
      
      // Evitar inicialización duplicada
      if (carouselInstances.has(carouselId)) {
        log(`Carousel ${carouselId} ya está inicializado`);
        return;
      }

      log(`Inicializando carousel: ${carouselId}`);

      const autoplay = carousel.getAttribute("data-autoplay") === "true";
      const interval = parseInt(carousel.getAttribute("data-interval") || CAROUSEL_CONFIG.defaultInterval.toString());
      const imagesLength = parseInt(carousel.getAttribute("data-images-length") || "0");
      
      const carouselInner = carousel.querySelector(".carousel-inner");
      const prevButton = carousel.querySelector("[data-carousel-prev]");
      const nextButton = carousel.querySelector("[data-carousel-next]");
      const indicatorsContainer = carousel.querySelector(".carousel-indicators");
      
      if (!carouselInner) {
        log(`No se encontró carousel-inner en ${carouselId}`, 'error');
        return;
      }

      let currentIndex = 1; // Empezar en la primera imagen real (no en el clon)
      let autoSlideInterval;
      let isTransitioning = false;

      /**
       * Actualiza la posición del carousel
       * @param {boolean} instant - Si la transición debe ser instantánea
       */
      function updateCarousel(instant = false) {
        if (carouselInner) {
          if (instant) {
            carouselInner.style.transition = 'none';
          } else {
            carouselInner.style.transition = `transform ${CAROUSEL_CONFIG.transitionDuration}ms ease-in-out`;
          }
          carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        if (indicatorsContainer) {
          indicatorsContainer.querySelectorAll("button").forEach(function (button, idx) {
            // Calcular el índice real (sin contar los clones)
            const realIndex = (currentIndex - 1 + imagesLength) % imagesLength;
            if (idx === realIndex) {
              button.classList.add("opacity-100");
              button.classList.remove("opacity-50");
            } else {
              button.classList.add("opacity-50");
              button.classList.remove("opacity-100");
            }
          });
        }
      }

      /**
       * Navega al siguiente elemento
       */
      function goToNext() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentIndex++;
        
        // Si llegamos al clon de la primera imagen
        if (currentIndex >= imagesLength + 1) {
          updateCarousel();
          
          // Después de la transición, saltar instantáneamente al inicio real
          setTimeout(() => {
            currentIndex = 1;
            updateCarousel(true);
            isTransitioning = false;
          }, CAROUSEL_CONFIG.transitionDuration);
        } else {
          updateCarousel();
          setTimeout(() => {
            isTransitioning = false;
          }, CAROUSEL_CONFIG.transitionDuration);
        }
      }

      /**
       * Navega al elemento anterior
       */
      function goToPrev() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        currentIndex--;
        
        // Si vamos antes del inicio real
        if (currentIndex < 1) {
          // Saltar instantáneamente al clon de la última imagen
          currentIndex = imagesLength;
          updateCarousel(true);
          
          // Luego hacer la transición
          setTimeout(() => {
            currentIndex = imagesLength;
            updateCarousel();
            setTimeout(() => {
              isTransitioning = false;
            }, CAROUSEL_CONFIG.transitionDuration);
          }, 10);
        } else {
          updateCarousel();
          setTimeout(() => {
            isTransitioning = false;
          }, CAROUSEL_CONFIG.transitionDuration);
        }
      }

      /**
       * Navega a un índice específico
       * @param {number} index - Índice al que navegar
       */
      function goToIndex(index) {
        if (isTransitioning) return;
        
        isTransitioning = true;
        // Ajustar el índice para contar el clon al inicio
        currentIndex = index + 1;
        updateCarousel();
        
        setTimeout(() => {
          isTransitioning = false;
        }, CAROUSEL_CONFIG.transitionDuration);
      }

      /**
       * Inicia el autoplay
       */
      function startAutoSlide() {
        if (autoplay && imagesLength > 1) {
          stopAutoSlide();
          autoSlideInterval = window.setInterval(goToNext, interval);
          log(`Autoplay iniciado para ${carouselId}`);
        }
      }

      /**
       * Detiene el autoplay
       */
      function stopAutoSlide() {
        if (autoSlideInterval) {
          clearInterval(autoSlideInterval);
          autoSlideInterval = null;
          log(`Autoplay detenido para ${carouselId}`);
        }
      }

      /**
       * Limpia los event listeners
       */
      function cleanup() {
        if (prevButton) {
          prevButton.removeEventListener("click", handlePrevClick);
        }
        if (nextButton) {
          nextButton.removeEventListener("click", handleNextClick);
        }
        if (indicatorsContainer) {
          indicatorsContainer.removeEventListener("click", handleIndicatorClick);
        }
        carousel.removeEventListener("mouseenter", stopAutoSlide);
        carousel.removeEventListener("mouseleave", startAutoSlide);
        stopAutoSlide();
      }

      // Event handlers
      function handlePrevClick() {
        stopAutoSlide();
        goToPrev();
        startAutoSlide();
      }

      function handleNextClick() {
        stopAutoSlide();
        goToNext();
        startAutoSlide();
      }

      function handleIndicatorClick(e) {
        const target = e.target;
        if (target.matches("[data-carousel-indicator]")) {
          stopAutoSlide();
          const index = parseInt(target.getAttribute("data-carousel-indicator") || "0");
          goToIndex(index);
          startAutoSlide();
        }
      }

      // Event listeners para botones de navegación
      if (prevButton) {
        prevButton.addEventListener("click", handlePrevClick);
      }

      if (nextButton) {
        nextButton.addEventListener("click", handleNextClick);
      }

      // Event listeners para indicadores
      if (indicatorsContainer) {
        indicatorsContainer.addEventListener("click", handleIndicatorClick);
      }

      // Pausar en hover
      carousel.addEventListener("mouseenter", stopAutoSlide);
      carousel.addEventListener("mouseleave", startAutoSlide);

      // Inicializar carousel
      updateCarousel(true);
      startAutoSlide();

      // Guardar instancia para evitar duplicados
      carouselInstances.set(carouselId, {
        cleanup,
        startAutoSlide,
        stopAutoSlide
      });

      log(`Carousel ${carouselId} inicializado exitosamente`);

    } catch (error) {
      console.error('Error al inicializar carousel:', error);
    }
  }

  /**
   * Limpia todos los carousels existentes
   */
  function cleanupAllCarousels() {
    try {
      carouselInstances.forEach((instance, id) => {
        log(`Limpiando carousel: ${id}`);
        instance.cleanup();
      });
      carouselInstances.clear();
    } catch (error) {
      console.error('Error al limpiar carousels:', error);
    }
  }

  /**
   * Inicializa todos los carousels en la página
   */
  function initAllCarousels() {
    try {
      log('Inicializando todos los carousels');
      
      // Limpiar instancias existentes
      cleanupAllCarousels();
      
      const carousels = document.querySelectorAll('[id^="carousel-"]');
      log(`Encontrados ${carousels.length} carousels`);
      
      carousels.forEach(initCarousel);
    } catch (error) {
      console.error('Error al inicializar carousels:', error);
    }
  }

  /**
   * Inicializa cuando el DOM esté listo
   */
  function init() {
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllCarousels);
      } else {
        initAllCarousels();
      }

      // Reinicializar después de navegación SPA
      document.addEventListener('astro:page-load', initAllCarousels);
      document.addEventListener('astro:after-swap', initAllCarousels);
      
      // También escuchar eventos de ViewTransitions
      document.addEventListener('astro:before-swap', cleanupAllCarousels);
    }
  }

  // Inicializar
  init();

  // Exponer funciones globalmente para debugging
  if (typeof window !== 'undefined') {
    window.carouselUtils = {
      initCarousel,
      initAllCarousels,
      cleanupAllCarousels,
      carouselInstances
    };
  }
})();