/**
 * Inicialización de AOS (Animate On Scroll)
 * @version 1.0.0
 */

(function() {
  'use strict';

  // Configuración de AOS
  const AOS_CONFIG = {
    duration: 900,
    once: true,
    easing: 'ease-in-out'
  };

  /**
   * Inicializa AOS si está disponible
   */
  function initAOS() {
    try {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init(AOS_CONFIG);
      }
    } catch (error) {
      console.error('Error al inicializar AOS:', error);
    }
  }

  /**
   * Inicializa AOS cuando el DOM esté listo
   */
  function initWhenReady() {
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAOS);
      } else {
        initAOS();
      }

      // Inicializar después de navegación SPA
      document.addEventListener('astro:page-load', initAOS);
    }
  }

  /**
   * Inicializa AOS después de navegación SPA
   */
  function initAfterSwap() {
    if (typeof window !== 'undefined') {
      window.addEventListener('astro:after-swap', initAOS);
    }
  }

  // Inicializar
  initWhenReady();
  initAfterSwap();

  // Exponer función globalmente si es necesario
  if (typeof window !== 'undefined') {
    window.initAOS = initAOS;
  }
})(); 