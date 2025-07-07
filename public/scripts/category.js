/**
 * Manejo de categorías y listas de servicios
 * @version 1.0.0
 */

(function() {
  'use strict';

  // Configuración
  const CONFIG = {
    selectors: {
      toggleButton: '#toggle-services-button',
      servicesList: '#services-list',
      serviceItem: '.service-item'
    },
    classes: {
      hidden: 'hidden'
    },
    defaultVisibleServices: 3
  };

  /**
   * Alterna la visibilidad de los servicios
   * @param {HTMLButtonElement} toggleButton - Botón de toggle
   * @param {NodeList} serviceItems - Lista de elementos de servicio
   * @param {boolean} allVisible - Estado actual de visibilidad
   * @returns {boolean} Nuevo estado de visibilidad
   */
  function toggleServicesVisibility(toggleButton, serviceItems, allVisible) {
    try {
      const newState = !allVisible;
      
      serviceItems.forEach((item, index) => {
        if (index >= CONFIG.defaultVisibleServices) {
          item.classList.toggle(CONFIG.classes.hidden, !newState);
        }
      });

      toggleButton.textContent = newState ? 'Ver Menos' : 'Ver Más';
      
      return newState;
    } catch (error) {
      console.error('Error al alternar visibilidad de servicios:', error);
      return allVisible;
    }
  }

  /**
   * Inicializa el manejo de categorías
   */
  function initCategory() {
    try {
      const toggleButton = document.querySelector(CONFIG.selectors.toggleButton);
      if (!toggleButton) {
        // Silenciar advertencia: el botón puede no existir en todas las páginas
        return;
      }

      const servicesList = document.querySelector(CONFIG.selectors.servicesList);
      if (!servicesList) {
        console.warn('Lista de servicios no encontrada');
        return;
      }

      const serviceItems = servicesList.querySelectorAll(CONFIG.selectors.serviceItem);
      let allVisible = false;

      toggleButton.addEventListener('click', () => {
        allVisible = toggleServicesVisibility(toggleButton, serviceItems, allVisible);
      });
    } catch (error) {
      console.error('Error al inicializar categorías:', error);
    }
  }

  /**
   * Inicializa cuando el DOM esté listo
   */
  function init() {
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCategory);
      } else {
        initCategory();
      }
    }
  }

  // Inicializar
  init();
})(); 