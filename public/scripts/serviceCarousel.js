/**
 * Script mejorado para el componente ServiceCarousel
 * Soporta navegación SPA y limpieza de estados previos
 * @version 2.1.0
 */

(function() {
  'use strict';

  // Configuración del carousel
  const CAROUSEL_CONFIG = {
    defaultInterval: 5000,
    transitionDuration: 500,
    autoplayEnabled: true,
    debug: false
  };

  // Almacena instancias para limpiar event listeners
  const carouselInstances = new Map();

  function log(msg) {
    if (CAROUSEL_CONFIG.debug) console.log('[ServiceCarousel]', msg);
  }

  function cleanupAllServiceCarousels() {
    carouselInstances.forEach((instance, id) => {
      log('Limpiando carousel: ' + id);
      instance.cleanup();
    });
    carouselInstances.clear();
  }

  function setActiveSlide(items, thumbnails, index) {
    items.forEach(item => item.classList.remove('active'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    if (items[index]) items[index].classList.add('active');
    if (thumbnails[index]) thumbnails[index].classList.add('active');
  }

  function ensureActiveSlide(items, thumbnails) {
    const hasActive = items.some(item => item.classList.contains('active'));
    if (!hasActive && items.length > 0) {
      items[0].classList.add('active');
      if (thumbnails[0]) thumbnails[0].classList.add('active');
    }
  }

  /**
   * Inicializa un carousel de servicios
   * @param {HTMLElement} container - Contenedor del carousel
   */
  function initServiceCarousel(container) {
    try {
      const carouselId = container.id || Math.random().toString(36).slice(2, 10);
      if (carouselInstances.has(carouselId)) {
        log('Ya inicializado: ' + carouselId);
        return;
      }

      const carouselInner = container.querySelector('.carousel-inner');
      const items = Array.from(container.querySelectorAll('.carousel-item'));
      const thumbnails = Array.from(container.querySelectorAll('.thumbnail-btn'));
      const prevBtn = container.querySelector('[data-carousel-prev]');
      const nextBtn = container.querySelector('[data-carousel-next]');
      const counterCurrent = container.querySelector('.carousel-counter-current');
      const counterTotal = container.querySelector('.carousel-counter-total');

      const imagesLength = items.length - 2; // por los clones
      let currentIndex = 1; // Primer slide real
      let isTransitioning = false;
      let autoplayInterval;

      const options = {
        autoplay: container.dataset.autoplay === 'true',
        interval: parseInt(container.dataset.interval) || CAROUSEL_CONFIG.defaultInterval,
      };

      function updateCarousel(instant = false) {
        if (carouselInner) {
          if (instant) {
            carouselInner.style.transition = 'none';
          } else {
            carouselInner.style.transition = `transform ${CAROUSEL_CONFIG.transitionDuration}ms ease-in-out`;
          }
          carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        // Actualizar miniaturas activas
        thumbnails.forEach((thumb, idx) => {
          if (idx === ((currentIndex - 1 + imagesLength) % imagesLength)) {
            thumb.classList.add('active');
          } else {
            thumb.classList.remove('active');
          }
        });
        if (counterCurrent) counterCurrent.textContent = ((currentIndex - 1 + imagesLength) % imagesLength) + 1;
      }

      function goToIndex(index) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = index + 1; // por el clon inicial
        updateCarousel();
        setTimeout(() => { isTransitioning = false; }, CAROUSEL_CONFIG.transitionDuration);
      }

      function goToNext() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        updateCarousel();
        if (currentIndex >= imagesLength + 1) {
          setTimeout(() => {
            currentIndex = 1;
            updateCarousel(true);
            isTransitioning = false;
          }, CAROUSEL_CONFIG.transitionDuration);
        } else {
          setTimeout(() => { isTransitioning = false; }, CAROUSEL_CONFIG.transitionDuration);
        }
      }

      function goToPrev() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        updateCarousel();
        if (currentIndex < 1) {
          setTimeout(() => {
            currentIndex = imagesLength;
            updateCarousel(true);
            isTransitioning = false;
          }, CAROUSEL_CONFIG.transitionDuration);
        } else {
          setTimeout(() => { isTransitioning = false; }, CAROUSEL_CONFIG.transitionDuration);
        }
      }

      function startAutoplay() {
        if (!options.autoplay || imagesLength <= 1) return;
        stopAutoplay();
        autoplayInterval = setInterval(goToNext, options.interval);
      }
      function stopAutoplay() {
        if (autoplayInterval) {
          clearInterval(autoplayInterval);
          autoplayInterval = null;
        }
      }

      // Guardar referencias a los handlers para poder quitarlos correctamente
      const thumbHandlers = thumbnails.map((thumb, idx) => {
        function handler() {
          goToIndex(idx);
          startAutoplay();
        }
        thumb.addEventListener('click', handler);
        return handler;
      });

      // Event listeners
      if (prevBtn) prevBtn.addEventListener('click', goToPrev);
      if (nextBtn) nextBtn.addEventListener('click', goToNext);
      container.addEventListener('mouseenter', stopAutoplay);
      container.addEventListener('mouseleave', startAutoplay);

      // Limpieza
      function cleanup() {
        if (prevBtn) prevBtn.removeEventListener('click', goToPrev);
        if (nextBtn) nextBtn.removeEventListener('click', goToNext);
        thumbnails.forEach((thumb, idx) => {
          thumb.removeEventListener('click', thumbHandlers[idx]);
        });
        container.removeEventListener('mouseenter', stopAutoplay);
        container.removeEventListener('mouseleave', startAutoplay);
        stopAutoplay();
      }

      // Inicialización
      if (counterTotal) counterTotal.textContent = imagesLength;
      updateCarousel(true);
      startAutoplay();

      carouselInstances.set(carouselId, { cleanup });
      log('Inicializado: ' + carouselId);
    } catch (error) {
      console.error('Error al inicializar ServiceCarousel:', error);
    }
  }

  /**
   * Inicializa todos los carousels de servicios
   */
  function initAllServiceCarousels() {
    try {
      cleanupAllServiceCarousels();
      const carousels = document.querySelectorAll('.service-carousel-container');
      carousels.forEach(initServiceCarousel);
    } catch (error) {
      console.error('Error al inicializar ServiceCarousels:', error);
    }
  }

  /**
   * Inicializa cuando el DOM esté listo
   */
  function init() {
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllServiceCarousels);
      } else {
        initAllServiceCarousels();
      }
      document.addEventListener('astro:page-load', initAllServiceCarousels);
      document.addEventListener('astro:after-swap', initAllServiceCarousels);
      document.addEventListener('astro:before-swap', cleanupAllServiceCarousels);
    }
  }

  // Inicializar
  init();

  // Exponer funciones globalmente si es necesario
  if (typeof window !== 'undefined') {
    window.initServiceCarousel = initServiceCarousel;
    window.initAllServiceCarousels = initAllServiceCarousels;
    window.cleanupAllServiceCarousels = cleanupAllServiceCarousels;
  }
})(); 