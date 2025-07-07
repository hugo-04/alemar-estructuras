/**
 * Script robusto para menú móvil
 * Funciona siempre incluso tras navegación SPA
 * @version 1.0.0
 */

(function() {
  'use strict';

  // Configuración del menú
  const CONFIG = {
    selectors: {
      mobileSidebar: '#mobile-sidebar',
      sidebarOverlay: '#sidebar-overlay',
      hamburgerIconWrapper: '#hamburger-icon-wrapper',
      menuButton: '#menu-button',
      closeSidebarButton: '#close-sidebar-button',
      servicesToggle: '#services-toggle',
      projectsToggle: '#projects-toggle',
      servicesMenu: '#services-menu',
      projectsMenu: '#projects-menu'
    },
    classes: {
      translateHidden: '-translate-x-full',
      hidden: 'hidden',
      open: 'open',
      rotate180: 'rotate-180'
    }
  };

  /**
   * Alterna la visibilidad del sidebar móvil
   * @param {boolean} show - Si mostrar o ocultar el sidebar
   */
  function toggleSidebar(show) {
    try {
      const mobileSidebar = document.querySelector(CONFIG.selectors.mobileSidebar);
      const sidebarOverlay = document.querySelector(CONFIG.selectors.sidebarOverlay);
      const hamburgerIconWrapper = document.querySelector(CONFIG.selectors.hamburgerIconWrapper);
      
      if (mobileSidebar) {
        if (show) {
          mobileSidebar.classList.remove(CONFIG.classes.translateHidden);
          mobileSidebar.style.display = 'block';
        } else {
          mobileSidebar.classList.add(CONFIG.classes.translateHidden);
          mobileSidebar.style.display = 'block';
        }
      }
      
      if (sidebarOverlay) {
        sidebarOverlay.style.display = show ? 'block' : 'none';
      }
      
      document.body.style.overflow = show ? 'hidden' : '';
      
      if (hamburgerIconWrapper) {
        hamburgerIconWrapper.classList.toggle(CONFIG.classes.open, show);
      }
    } catch (error) {
      console.error('Error al alternar sidebar:', error);
    }
  }

  /**
   * Cierra el sidebar móvil
   */
  function closeSidebar() {
    toggleSidebar(false);
  }

  /**
   * Abre el sidebar móvil
   */
  function openSidebar() {
    toggleSidebar(true);
  }

  /**
   * Alterna un submenú específico
   * @param {string} menuId - ID del menú a alternar
   * @param {string} toggleId - ID del botón toggle
   */
  function toggleSubmenu(menuId, toggleId) {
    try {
      const menu = document.getElementById(menuId);
      const toggle = document.querySelector(toggleId);
      const chevron = toggle?.querySelector('svg');
      
      if (menu) {
        menu.classList.toggle(CONFIG.classes.hidden);
      }
      if (chevron) {
        chevron.classList.toggle(CONFIG.classes.rotate180);
      }
    } catch (error) {
      console.error('Error al alternar submenú:', error);
    }
  }

  /**
   * Maneja los clics en el documento
   * @param {Event} e - Evento de clic
   */
  function handleDocumentClick(e) {
    const target = e.target;
    
    try {
      // Botón menú hamburguesa
      if (target?.closest(CONFIG.selectors.menuButton)) {
        const mobileSidebar = document.querySelector(CONFIG.selectors.mobileSidebar);
        const isOpen = mobileSidebar && !mobileSidebar.classList.contains(CONFIG.classes.translateHidden);
        toggleSidebar(!isOpen);
      }
      
      // Overlay o botón cerrar
      if (target?.closest(CONFIG.selectors.sidebarOverlay) || target?.closest(CONFIG.selectors.closeSidebarButton)) {
        closeSidebar();
      }
      
      // Clic en enlace del sidebar
      if (target?.closest(CONFIG.selectors.mobileSidebar) && target.tagName === 'A') {
        closeSidebar();
      }
      
      // Toggle de servicios
      if (target?.closest(CONFIG.selectors.servicesToggle)) {
        toggleSubmenu('services-menu', CONFIG.selectors.servicesToggle);
      }
      
      // Toggle de proyectos
      if (target?.closest(CONFIG.selectors.projectsToggle)) {
        toggleSubmenu('projects-menu', CONFIG.selectors.projectsToggle);
      }
    } catch (error) {
      console.error('Error al manejar clic:', error);
    }
  }

  /**
   * Inicializa el menú móvil
   */
  function initMobileMenu() {
    try {
      // Delegación de eventos para máxima robustez
      document.addEventListener('click', handleDocumentClick);

      // Reaplica tras navegación SPA
      if (typeof window !== 'undefined') {
        window.addEventListener('astro:after-swap', closeSidebar);
      }
    } catch (error) {
      console.error('Error al inicializar menú móvil:', error);
    }
  }

  // Inicializar cuando el DOM esté listo
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
      initMobileMenu();
    }
  }

  // Exponer funciones globalmente si es necesario
  if (typeof window !== 'undefined') {
    window.initMobileMenu = initMobileMenu;
  }
})(); 