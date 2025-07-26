/**
 * Manejo de popups de éxito
 * @version 1.0.0
 */

(function() {
  'use strict';

  // Configuración
  const CONFIG = {
    popupSelector: '[id^="success-popup"]',
    closeButtonSelector: '#close-btn-'
  };

  /**
   * Cierra un popup específico
   * @param {string} popupId - ID del popup a cerrar
   */
  function closePopup(popupId) {
    try {
      document.dispatchEvent(
        new CustomEvent('close-success-popup', {
          detail: { popupId: popupId }
        })
      );
    } catch (error) {
      console.error('Error al cerrar popup:', error);
    }
  }

  /**
   * Inicializa los popups de éxito
   */
  function initSuccessPopups() {
    try {
      const successPopups = document.querySelectorAll(CONFIG.popupSelector);

      successPopups.forEach(popup => {
        const id = popup.id;
        const closeButton = popup.querySelector(`${CONFIG.closeButtonSelector}${id}`);

        if (closeButton) {
          closeButton.addEventListener('click', () => {
            closePopup(id);
          });
        }
      });
    } catch (error) {
      newFunction(error);
    }

    function newFunction(error) {
      console.error('Error al inicializar popups de éxito:', error);
    }
  }

  /**
   * Inicializa cuando el DOM esté listo
   */
  function init() {
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSuccessPopups);
      } else {
        initSuccessPopups();
      }
    }
  }

  // Inicializar
  init();
})();
