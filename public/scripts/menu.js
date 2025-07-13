/**
 * Script robusto para menú móvil - Sidebar Clásico
 * Funciona siempre incluso tras navegación SPA
 * @version 2.2.0
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
      active: 'active',
      hidden: 'hidden',
      open: 'open',
      rotated: 'rotated',
      notRotated: 'not-rotated'
    }
  };

  /**
   * Alterna la visibilidad del sidebar móvil
   * @param {boolean} show - Si mostrar o ocultar el sidebar
   */
  function toggleSidebar(show) {
    try {
      console.log('🔄 Alternando sidebar:', show);
      
      const mobileSidebar = document.querySelector(CONFIG.selectors.mobileSidebar);
      const sidebarOverlay = document.querySelector(CONFIG.selectors.sidebarOverlay);
      const hamburgerIconWrapper = document.querySelector(CONFIG.selectors.hamburgerIconWrapper);
      const whatsappButton = document.getElementById('whatsapp-button');
      
      console.log('📱 Elementos encontrados:', {
        mobileSidebar: !!mobileSidebar,
        sidebarOverlay: !!sidebarOverlay,
        hamburgerIconWrapper: !!hamburgerIconWrapper,
        whatsappButton: !!whatsappButton
      });
      
      if (mobileSidebar) {
        if (show) {
          // Mostrar sidebar
          console.log('✅ Mostrando sidebar...');
          mobileSidebar.classList.add(CONFIG.classes.active);
          document.body.classList.add('sidebar-open');
          console.log('🎯 Clases después de mostrar:', mobileSidebar.className);
        } else {
          // Ocultar sidebar
          console.log('❌ Ocultando sidebar...');
          mobileSidebar.classList.remove(CONFIG.classes.active);
          document.body.classList.remove('sidebar-open');
          console.log('🎯 Clases después de ocultar:', mobileSidebar.className);
        }
      }
      
      if (sidebarOverlay) {
        if (show) {
          sidebarOverlay.classList.add(CONFIG.classes.active);
        } else {
          sidebarOverlay.classList.remove(CONFIG.classes.active);
        }
      }
      
      if (hamburgerIconWrapper) {
        hamburgerIconWrapper.classList.toggle(CONFIG.classes.open, show);
      }
      
      // Ocultar/mostrar el botón de WhatsApp con transición suave
      if (whatsappButton) {
        if (show) {
          whatsappButton.style.opacity = '0';
          whatsappButton.style.transform = 'scale(0.8)';
          setTimeout(() => {
            whatsappButton.style.display = 'none';
          }, 200);
        } else {
          whatsappButton.style.display = 'flex';
          setTimeout(() => {
            whatsappButton.style.opacity = '1';
            whatsappButton.style.transform = 'scale(1)';
          }, 50);
        }
      }
    } catch (error) {
      console.error('Error al alternar bottom sheet:', error);
    }
  }

  /**
   * Cierra el sidebar móvil
   */
  function closeSidebar() {
    console.log('🚪 Cerrando sidebar...');
    toggleSidebar(false);
  }

  /**
   * Abre el sidebar móvil
   */
  function openSidebar() {
    console.log('🚪 Abriendo sidebar...');
    toggleSidebar(true);
  }

  /**
   * Alterna un submenú específico
   * @param {string} menuId - ID del menú a alternar
   * @param {string} toggleId - ID del botón toggle
   */
  function toggleSubmenu(menuId, toggleId) {
    try {
      console.log('📂 Alternando submenú:', menuId);
      
      const menu = document.getElementById(menuId);
      const toggle = document.querySelector(toggleId);
      const chevronIcon = toggle?.querySelector('.chevron-icon');
      
      // Identificar el otro menú y su toggle
      const otherMenuId = menuId === 'services-menu' ? 'projects-menu' : 'services-menu';
      const otherToggleId = menuId === 'services-menu' ? CONFIG.selectors.projectsToggle : CONFIG.selectors.servicesToggle;
      const otherMenu = document.getElementById(otherMenuId);
      const otherToggle = document.querySelector(otherToggleId);
      const otherChevronIcon = otherToggle?.querySelector('.chevron-icon');

      if (menu) {
        const isHidden = menu.classList.contains(CONFIG.classes.hidden);
        console.log('📊 Estado del menú:', isHidden ? 'oculto' : 'visible');
        
        // Cerrar el otro menú y resetear su icono
        if (otherMenu && !otherMenu.classList.contains(CONFIG.classes.hidden)) {
          console.log('🔄 Cerrando otro menú:', otherMenuId);
          otherMenu.classList.add(CONFIG.classes.hidden);
          if (otherChevronIcon) {
            otherChevronIcon.classList.remove(CONFIG.classes.rotated);
            otherChevronIcon.classList.add(CONFIG.classes.notRotated);
          }
        }
        
        // Alternar el menú actual
        menu.classList.toggle(CONFIG.classes.hidden);
        
        // Rotar el icono
        if (chevronIcon) {
          chevronIcon.classList.remove(CONFIG.classes.rotated, CONFIG.classes.notRotated);
          if (isHidden) {
            chevronIcon.classList.add(CONFIG.classes.rotated);
            console.log('🔄 Rotando icono hacia abajo');
          } else {
            chevronIcon.classList.add(CONFIG.classes.notRotated);
            console.log('🔄 Rotando icono hacia arriba');
          }
        }
        
        // Actualizar aria-expanded
        if (toggle) {
          toggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        }
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
      console.log('🖱️ Clic detectado en:', target?.tagName, target?.className);
      
      // Botón menú hamburguesa
      if (target?.closest(CONFIG.selectors.menuButton)) {
        console.log('🍔 Clic en botón de menú hamburguesa');
        const mobileSidebar = document.querySelector(CONFIG.selectors.mobileSidebar);
        const isOpen = mobileSidebar && mobileSidebar.classList.contains(CONFIG.classes.active);
        console.log('📊 Estado actual del sidebar:', isOpen);
        toggleSidebar(!isOpen);
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      
      // Botón cerrar sidebar
      if (target?.closest(CONFIG.selectors.closeSidebarButton)) {
        console.log('❌ Clic en botón cerrar sidebar');
        closeSidebar();
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      
      // Overlay para cerrar
      if (target?.closest(CONFIG.selectors.sidebarOverlay)) {
        console.log('🖱️ Clic en overlay');
        closeSidebar();
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      
      // Clic en enlace del sidebar
      if (target?.closest(CONFIG.selectors.mobileSidebar) && target.tagName === 'A') {
        console.log('🔗 Clic en enlace del sidebar');
        closeSidebar();
        return;
      }
      
      // Toggle de servicios
      if (target?.closest(CONFIG.selectors.servicesToggle)) {
        console.log('🔧 Clic en toggle de servicios');
        toggleSubmenu('services-menu', CONFIG.selectors.servicesToggle);
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      
      // Toggle de proyectos
      if (target?.closest(CONFIG.selectors.projectsToggle)) {
        console.log('📁 Clic en toggle de proyectos');
        toggleSubmenu('projects-menu', CONFIG.selectors.projectsToggle);
        e.preventDefault();
        e.stopPropagation();
        return;
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
      console.log('🚀 Inicializando menú móvil...');
      
      // Delegación de eventos para máxima robustez
      document.addEventListener('click', handleDocumentClick);

      // Inicializar funcionalidad del sidebar
      initSidebar();

      // Reaplica tras navegación SPA
      if (typeof window !== 'undefined') {
        window.addEventListener('astro:after-swap', closeSidebar);
      }
      
      console.log('✅ Menú móvil inicializado correctamente');
    } catch (error) {
      console.error('Error al inicializar menú móvil:', error);
    }
  }

  /**
   * Inicializa la funcionalidad del sidebar
   */
  function initSidebar() {
    const sidebar = document.querySelector(CONFIG.selectors.mobileSidebar);
    if (!sidebar) return;

    // Cerrar sidebar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    });

    // Cerrar sidebar al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('active') && 
          !sidebar.contains(e.target) && 
          !e.target.closest(CONFIG.selectors.menuButton)) {
        closeSidebar();
      }
    });

    // Cierra el sidebar y permite la navegación al hacer clic en cualquier enlace dentro del sidebar
    setupSidebarLinkClose();
  }

  /**
   * Cierra el sidebar móvil y permite la navegación al hacer clic en cualquier enlace dentro del sidebar
   */
  function setupSidebarLinkClose() {
    const sidebar = document.querySelector(CONFIG.selectors.mobileSidebar);
    if (!sidebar) return;
    sidebar.addEventListener('click', function(e) {
      const link = e.target.closest('a');
      if (link && link.href) {
        // Cierra el sidebar
        closeSidebar();
        // Permite la navegación normal (no preventDefault)
        // Si usas SPA y quieres forzar navegación, puedes usar:
        // window.location = link.href;
      }
    });
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
    window.closeSidebar = closeSidebar;
    window.openSidebar = openSidebar;
    
    // Funciones para navegación de scroll
    window.scrollUp = function(type) {
      const container = document.querySelector(`.${type}-scroll`);
      if (container) {
        container.scrollBy({ top: -50, behavior: 'smooth' });
      }
    };
    
    window.scrollDown = function(type) {
      const container = document.querySelector(`.${type}-scroll`);
      if (container) {
        container.scrollBy({ top: 50, behavior: 'smooth' });
      }
    };
  }
})(); 