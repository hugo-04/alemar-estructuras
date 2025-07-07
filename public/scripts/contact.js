/**
 * Manejo de formulario de contacto y Google Maps
 * @version 1.0.0
 */

(function() {
  'use strict';

  // Configuración
  const CONFIG = {
    selectors: {
      contactForm: '#contact-form',
      successPopup: '#success-popup'
    },
    mapConfig: {
      location: { lat: -16.409047, lng: -71.537451 }, // Arequipa, Perú
      zoom: 15
    },
    popupTimeout: 5000 // 5 segundos
  };

  /**
   * Muestra el popup de éxito
   * @param {HTMLElement} popup - Elemento del popup
   */
  function showSuccessPopup(popup) {
    try {
      popup.classList.add('is-visible');
      
      // Ocultar automáticamente después del timeout
      setTimeout(() => {
        popup.classList.remove('is-visible');
      }, CONFIG.popupTimeout);
    } catch (error) {
      console.error('Error al mostrar popup:', error);
    }
  }

  /**
   * Maneja el envío del formulario
   * @param {Event} event - Evento de submit
   * @param {HTMLFormElement} form - Formulario
   * @param {HTMLElement} successPopup - Popup de éxito
   */
  async function handleFormSubmit(event, form, successPopup) {
    event.preventDefault();

    try {
      const formData = new FormData(form);
      
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        }
      });

      if (response.ok) {
        showSuccessPopup(successPopup);
        form.reset();
      } else {
        const errorData = await response.json();
        alert(`Hubo un error al enviar su mensaje: ${errorData.error || response.statusText}. Por favor, inténtelo de nuevo.`);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error de conexión. Por favor, inténtelo de nuevo más tarde.');
    }
  }

  /**
   * Inicializa el formulario de contacto
   */
  function initContactForm() {
    try {
      const form = document.querySelector(CONFIG.selectors.contactForm);
      const successPopup = document.querySelector(CONFIG.selectors.successPopup);

      if (form && successPopup) {
        form.addEventListener('submit', (event) => {
          handleFormSubmit(event, form, successPopup);
        });

        // Escucha el evento personalizado para cerrar el popup
        document.addEventListener('close-success-popup', (event) => {
          if (event.detail.popupId === 'success-popup') {
            successPopup.classList.remove('is-visible');
          }
        });
      }
    } catch (error) {
      console.error('Error al inicializar formulario de contacto:', error);
    }
  }

  /**
   * Inicializa Google Maps
   */
  function initMap() {
    try {
      const mapElement = document.getElementById('map');
      if (!mapElement || !window.google) {
        console.warn('Google Maps no está disponible');
        return;
      }

      const map = new window.google.maps.Map(mapElement, {
        zoom: CONFIG.mapConfig.zoom,
        center: CONFIG.mapConfig.location,
      });

      const marker = new window.google.maps.Marker({
        position: CONFIG.mapConfig.location,
        map: map,
      });
    } catch (error) {
      console.error('Error al inicializar Google Maps:', error);
    }
  }

  /**
   * Carga dinámicamente la API de Google Maps
   * @param {string} apiKey - Clave de API de Google Maps
   */
  function loadGoogleMapsAPI(apiKey) {
    try {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } catch (error) {
      console.error('Error al cargar Google Maps API:', error);
    }
  }

  /**
   * Inicializa todo cuando el DOM esté listo
   */
  function init() {
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
      } else {
        initContactForm();
      }
    }
  }

  // Hacer initMap disponible globalmente para la API de Google Maps
  if (typeof window !== 'undefined') {
    window.initMap = initMap;
    window.loadGoogleMapsAPI = loadGoogleMapsAPI;
  }

  // Inicializar
  init();
})(); 