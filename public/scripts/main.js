/**
 * Script principal para inicializar todos los componentes
 * @version 1.0.0
 * Optimizado para Vercel
 */

(function() {
  'use strict';

  // Configuración de scripts
  const SCRIPTS_CONFIG = {
    debug: false, // Cambiar a true para debugging en desarrollo
    loadTimeout: 5000,
    retryAttempts: 3
  };

  /**
   * Logger para debugging
   * @param {string} message - Mensaje a loggear
   * @param {string} level - Nivel de log (info, warn, error)
   */
  function log(message, level = 'info') {
    if (SCRIPTS_CONFIG.debug) {
      console[level](`[ALEMAR Scripts] ${message}`);
    }
  }

  /**
   * Verifica si un elemento existe en el DOM
   * @param {string} selector - Selector CSS
   * @returns {boolean}
   */
  function elementExists(selector) {
    return document.querySelector(selector) !== null;
  }

  /**
   * Verifica si un script está cargado
   * @param {string} scriptName - Nombre del script
   * @returns {boolean}
   */
  function scriptLoaded(scriptName) {
    return document.querySelector(`script[src*="${scriptName}"]`) !== null;
  }

  /**
   * Carga un script dinámicamente con reintentos
   * @param {string} src - Ruta del script
   * @param {number} attempts - Número de intentos
   * @returns {Promise}
   */
  function loadScript(src, attempts = 0) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        log(`Script cargado: ${src}`);
        resolve();
      };
      script.onerror = () => {
        log(`Error al cargar script: ${src}`, 'error');
        if (attempts < SCRIPTS_CONFIG.retryAttempts) {
          log(`Reintentando carga de ${src} (intento ${attempts + 1})`, 'warn');
          setTimeout(() => {
            loadScript(src, attempts + 1).then(resolve).catch(reject);
          }, 1000);
        } else {
          reject(new Error(`No se pudo cargar después de ${SCRIPTS_CONFIG.retryAttempts} intentos: ${src}`));
        }
      };
      document.head.appendChild(script);
    });
  }

  /**
   * Inicializa el menú móvil si está disponible
   */
  function initMobileMenu() {
    if (elementExists('#mobile-sidebar')) {
      log('Inicializando menú móvil');
      // El script menu.js se ejecuta automáticamente
    } else {
      log('Menú móvil no encontrado', 'warn');
    }
  }

  /**
   * Inicializa AOS si está disponible
   */
  function initAOS() {
    if (typeof window !== 'undefined' && window.AOS) {
      log('Inicializando AOS');
      // El script aos.js se ejecuta automáticamente
    } else {
      log('AOS no encontrado', 'warn');
    }
  }

  /**
   * Inicializa el formulario de contacto si está disponible
   */
  function initContactForm() {
    if (elementExists('#contact-form')) {
      log('Inicializando formulario de contacto');
      // El script contact.js se ejecuta automáticamente
    } else {
      log('Formulario de contacto no encontrado', 'warn');
    }
  }

  /**
   * Inicializa los popups de éxito si están disponibles
   */
  function initSuccessPopups() {
    if (elementExists('[id^="success-popup"]')) {
      log('Inicializando popups de éxito');
      // El script successPopup.js se ejecuta automáticamente
    } else {
      log('Popups de éxito no encontrados', 'warn');
    }
  }

  /**
   * Inicializa las categorías si están disponibles
   */
  function initCategories() {
    if (elementExists('#toggle-services-button')) {
      log('Inicializando categorías');
      // El script category.js se ejecuta automáticamente
    } else {
      log('Categorías no encontradas', 'warn');
    }
  }

  /**
   * Inicializa el carousel si está disponible
   */
  function initCarousel() {
    if (elementExists('[id^="carousel-"]')) {
      log('Inicializando carousel');
      // El script main-carousel.js se ejecuta automáticamente
    } else {
      log('Carousel no encontrado', 'warn');
    }
  }

  /**
   * Verifica que todos los scripts estén cargados
   */
  function verifyScripts() {
    const scripts = [
      'main.js',
      'menu.js', 
      'aos.js',
      'contact.js',
      'successPopup.js',
      'category.js',
      'serviceCarousel.js',
      'main-carousel.js'
    ];

    let loadedCount = 0;
    scripts.forEach(script => {
      if (scriptLoaded(script)) {
        log(`Script ${script} cargado correctamente`);
        loadedCount++;
      } else {
        log(`Script ${script} no encontrado`, 'error');
      }
    });

    log(`Total de scripts cargados: ${loadedCount}/${scripts.length}`);
    return loadedCount === scripts.length;
  }

  /**
   * Inicializa todos los componentes
   */
  function initAll() {
    try {
      log('Iniciando inicialización de componentes');
      
      // Verificar scripts primero
      const allScriptsLoaded = verifyScripts();
      
      if (!allScriptsLoaded) {
        log('Algunos scripts no se cargaron correctamente', 'warn');
      }
      
      initMobileMenu();
      initAOS();
      initContactForm();
      initSuccessPopups();
      initCategories();
      initCarousel();
      
      log('Inicialización completada');
    } catch (error) {
      log(`Error durante la inicialización: ${error.message}`, 'error');
      console.error('Error completo:', error);
    }
  }

  /**
   * Inicializa cuando el DOM esté listo
   */
  function init() {
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
      } else {
        initAll();
      }

      // Reinicializar después de navegación SPA
      document.addEventListener('astro:page-load', initAll);
    }
  }

  // Inicializar
  init();

  // Exponer funciones globalmente si es necesario
  if (typeof window !== 'undefined') {
    window.alemarScripts = {
      initAll,
      initMobileMenu,
      initAOS,
      initContactForm,
      initSuccessPopups,
      initCategories,
      initCarousel,
      verifyScripts
    };
  }
})(); 