/**
 * Script para el menú móvil y sidebar
 * @version 2.3.0
 */

document.addEventListener('DOMContentLoaded', function() {
  // Elementos del DOM
  const menuButton = document.getElementById('menu-button');
  const closeSidebarButton = document.getElementById('close-sidebar-button');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const hamburgerIconWrapper = document.getElementById('hamburger-icon-wrapper');
  
  // Botones de toggle para dropdowns
  const servicesToggle = document.getElementById('services-toggle');
  const projectsToggle = document.getElementById('projects-toggle');
  
  // Menús de dropdown
  const servicesMenu = document.getElementById('services-menu');
  const projectsMenu = document.getElementById('projects-menu');
  
  // Iconos de chevron
  const chevronIcons = document.querySelectorAll('.chevron-icon');

  // Estado del sidebar
  let isSidebarOpen = false;

  /**
   * Abrir el sidebar móvil
   */
  function openSidebar() {
    if (mobileSidebar && sidebarOverlay) {
      mobileSidebar.classList.add('active');
      sidebarOverlay.classList.add('active');
      hamburgerIconWrapper?.classList.add('open');
      document.body.classList.add('sidebar-open');
      isSidebarOpen = true;
      
      // Actualizar aria-expanded
      menuButton?.setAttribute('aria-expanded', 'true');
      
      // Enfoque en el botón de cerrar para accesibilidad
      setTimeout(() => {
        closeSidebarButton?.focus();
      }, 100);
    }
  }

  /**
   * Cerrar el sidebar móvil
   */
  function closeSidebar() {
    if (mobileSidebar && sidebarOverlay) {
      mobileSidebar.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      hamburgerIconWrapper?.classList.remove('open');
      document.body.classList.remove('sidebar-open');
      isSidebarOpen = false;
      
      // Actualizar aria-expanded
      menuButton?.setAttribute('aria-expanded', 'false');
      
      // Enfoque en el botón del menú para accesibilidad
      menuButton?.focus();
      
      // Resetear todos los dropdowns al cerrar
      resetAllDropdowns();
    }
  }

  /**
   * Resetear todos los dropdowns
   */
  function resetAllDropdowns() {
    // Cerrar menú de servicios
    if (servicesMenu) {
      servicesMenu.classList.add('hidden');
      servicesToggle?.setAttribute('aria-expanded', 'false');
      const servicesChevron = servicesToggle?.querySelector('.chevron-icon');
      if (servicesChevron) {
        servicesChevron.classList.remove('rotated');
        servicesChevron.classList.add('not-rotated');
      }
      // Marcar como cerrado
      const servicesGroup = servicesToggle?.closest('.group');
      if (servicesGroup) {
        servicesGroup.setAttribute('data-dropdown-closed', 'true');
      }
    }
    
    // Cerrar menú de proyectos
    if (projectsMenu) {
      projectsMenu.classList.add('hidden');
      projectsToggle?.setAttribute('aria-expanded', 'false');
      const projectsChevron = projectsToggle?.querySelector('.chevron-icon');
      if (projectsChevron) {
        projectsChevron.classList.remove('rotated');
        projectsChevron.classList.add('not-rotated');
      }
      // Marcar como cerrado
      const projectsGroup = projectsToggle?.closest('.group');
      if (projectsGroup) {
        projectsGroup.setAttribute('data-dropdown-closed', 'true');
      }
    }
    
    // Resetear estados activos inmediatamente
    resetActiveStates();
  }

  /**
   * Toggle del menú de servicios
   */
  function toggleServicesMenu() {
    if (servicesMenu && servicesToggle) {
      const isExpanded = servicesToggle.getAttribute('aria-expanded') === 'true';
      const servicesGroup = servicesToggle.closest('.group');
      
      // Cerrar menú de proyectos si está abierto
      if (projectsMenu) {
        projectsMenu.classList.add('hidden');
        projectsToggle?.setAttribute('aria-expanded', 'false');
        const projectsChevron = projectsToggle?.querySelector('.chevron-icon');
        if (projectsChevron) {
          projectsChevron.classList.remove('rotated');
          projectsChevron.classList.add('not-rotated');
        }
        // Marcar proyectos como cerrado
        const projectsGroup = projectsToggle?.closest('.group');
        if (projectsGroup) {
          projectsGroup.setAttribute('data-dropdown-closed', 'true');
        }
      }
      
      // Toggle del menú de servicios
      servicesMenu.classList.toggle('hidden');
      servicesToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Rotar icono
      const chevronIcon = servicesToggle.querySelector('.chevron-icon');
      if (chevronIcon) {
        chevronIcon.classList.toggle('rotated');
        chevronIcon.classList.toggle('not-rotated');
      }
      
      // Si estamos cerrando el dropdown, resetear estados inmediatamente
      if (isExpanded) {
        if (servicesGroup) {
          servicesGroup.setAttribute('data-dropdown-closed', 'true');
        }
        resetActiveStates();
      } else {
        // Si estamos abriendo, remover el atributo de cerrado
        if (servicesGroup) {
          servicesGroup.removeAttribute('data-dropdown-closed');
        }
      }
    }
  }

  /**
   * Toggle del menú de proyectos
   */
  function toggleProjectsMenu() {
    if (projectsMenu && projectsToggle) {
      const isExpanded = projectsToggle.getAttribute('aria-expanded') === 'true';
      const projectsGroup = projectsToggle.closest('.group');
      
      // Cerrar menú de servicios si está abierto
      if (servicesMenu) {
        servicesMenu.classList.add('hidden');
        servicesToggle?.setAttribute('aria-expanded', 'false');
        const servicesChevron = servicesToggle?.querySelector('.chevron-icon');
        if (servicesChevron) {
          servicesChevron.classList.remove('rotated');
          servicesChevron.classList.add('not-rotated');
        }
        // Marcar servicios como cerrado
        const servicesGroup = servicesToggle?.closest('.group');
        if (servicesGroup) {
          servicesGroup.setAttribute('data-dropdown-closed', 'true');
        }
      }
      
      // Toggle del menú de proyectos
      projectsMenu.classList.toggle('hidden');
      projectsToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Rotar icono
      const chevronIcon = projectsToggle.querySelector('.chevron-icon');
      if (chevronIcon) {
        chevronIcon.classList.toggle('rotated');
        chevronIcon.classList.toggle('not-rotated');
      }
      
      // Si estamos cerrando el dropdown, resetear estados inmediatamente
      if (isExpanded) {
        if (projectsGroup) {
          projectsGroup.setAttribute('data-dropdown-closed', 'true');
        }
        resetActiveStates();
      } else {
        // Si estamos abriendo, remover el atributo de cerrado
        if (projectsGroup) {
          projectsGroup.removeAttribute('data-dropdown-closed');
        }
      }
    }
  }

  /**
   * Resetear estados activos
   */
  function resetActiveStates() {
    // Remover clases activas de todos los elementos
    const allGroups = document.querySelectorAll('#mobile-sidebar .group');
    allGroups.forEach(group => {
      group.classList.remove('active', 'pressed', 'highlighted');
      // Forzar reset de estilos inline
      group.style.background = '';
      group.style.transform = '';
      group.style.boxShadow = '';
    });
    
    // Remover clases activas de todos los enlaces
    const allLinks = document.querySelectorAll('#mobile-sidebar nav > a');
    allLinks.forEach(link => {
      link.classList.remove('active', 'pressed', 'highlighted');
      // Forzar reset de estilos inline
      link.style.background = '';
      link.style.transform = '';
      link.style.boxShadow = '';
    });
    
    // Resetear iconos
    const allIcons = document.querySelectorAll('#mobile-sidebar .w-8.h-8');
    allIcons.forEach(icon => {
      icon.style.background = '';
      icon.style.transform = '';
    });
    
    // Resetear botones toggle
    const allToggleButtons = document.querySelectorAll('#services-toggle, #projects-toggle');
    allToggleButtons.forEach(button => {
      button.style.background = '';
      button.style.transform = '';
      button.style.boxShadow = '';
      button.style.color = '';
    });
  }

  /**
   * Manejar clics en enlaces del sidebar
   */
  function handleSidebarLinkClick(event) {
    const link = event.target.closest('a');
    if (link && !link.querySelector('button')) {
      // Si es un enlace principal (no un botón toggle), cerrar el sidebar
      setTimeout(() => {
        closeSidebar();
      }, 100);
    }
  }

  /**
   * Manejar navegación por teclado
   */
  function handleKeyboardNavigation(event) {
    if (event.key === 'Escape' && isSidebarOpen) {
      closeSidebar();
    }
  }

  // Event Listeners

  // Botón de abrir menú
  if (menuButton) {
    menuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openSidebar();
    });
  }

  // Botón de cerrar menú
  if (closeSidebarButton) {
    closeSidebarButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeSidebar();
    });
  }

  // Overlay para cerrar
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeSidebar();
    });
  }

  // Toggle de servicios
  if (servicesToggle) {
    servicesToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleServicesMenu();
    });
  }

  // Toggle de proyectos
  if (projectsToggle) {
    projectsToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleProjectsMenu();
    });
  }

  // Clicks en enlaces del sidebar
  if (mobileSidebar) {
    mobileSidebar.addEventListener('click', handleSidebarLinkClick);
  }

  // Navegación por teclado
  document.addEventListener('keydown', handleKeyboardNavigation);

  // Cerrar sidebar al cambiar de tamaño de ventana
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024 && isSidebarOpen) {
      closeSidebar();
    }
  });

  // Prevenir scroll del body cuando el sidebar está abierto
  document.addEventListener('touchmove', function(e) {
    if (isSidebarOpen) {
      e.preventDefault();
    }
  }, { passive: false });

  // Inicializar estado de los iconos
  chevronIcons.forEach(icon => {
    icon.classList.add('not-rotated');
  });

  // Mejorar accesibilidad - eliminar bordes de focus en botones toggle
  const toggleButtons = [servicesToggle, projectsToggle];
  toggleButtons.forEach(button => {
    if (button) {
      button.addEventListener('focus', function() {
        this.style.outline = 'none';
        this.style.border = 'none';
        this.style.boxShadow = 'none';
      });
      
      button.addEventListener('blur', function() {
        this.style.outline = 'none';
        this.style.border = 'none';
        this.style.boxShadow = 'none';
      });
    }
  });

  // Log para debugging
  console.log('✅ Menú móvil inicializado correctamente');
  console.log('📱 Funcionalidades disponibles:');
  console.log('   - Apertura/cierre de sidebar');
  console.log('   - Toggle de menús de servicios y proyectos');
  console.log('   - Navegación por teclado (ESC para cerrar)');
  console.log('   - Cierre automático en resize');
  console.log('   - Reset inmediato de estados activos con data-dropdown-closed');
  console.log('   - Eliminación de bordes de focus en botones toggle');
}); 