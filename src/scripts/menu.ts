// Script robusto para menú móvil, funciona siempre incluso tras navegación SPA
export function initMobileMenu() {
  function toggleSidebar(show: boolean) {
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const hamburgerIconWrapper = document.getElementById("hamburger-icon-wrapper");
    
    if (mobileSidebar) {
      if (show) {
        mobileSidebar.classList.remove("-translate-x-full");
        mobileSidebar.style.display = "block";
      } else {
        mobileSidebar.classList.add("-translate-x-full");
        mobileSidebar.style.display = "block";
      }
    }
    
    if (sidebarOverlay) {
      sidebarOverlay.style.display = show ? "block" : "none";
    }
    
    document.body.style.overflow = show ? "hidden" : "";
    
    if (hamburgerIconWrapper) {
      hamburgerIconWrapper.classList.toggle("open", show);
    }
  }

  function closeSidebar() {
    toggleSidebar(false);
  }

  function openSidebar() {
    toggleSidebar(true);
  }

  // Delegación de eventos para máxima robustez
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    
    // Botón menú hamburguesa
    if (target?.closest("#menu-button")) {
      const mobileSidebar = document.getElementById("mobile-sidebar");
      const isOpen = mobileSidebar && !mobileSidebar.classList.contains("-translate-x-full");
      toggleSidebar(!isOpen);
    }
    
    // Overlay o botón cerrar
    if (target?.closest("#sidebar-overlay") || target?.closest("#close-sidebar-button")) {
      closeSidebar();
    }
    
    // Clic en enlace del sidebar
    if (target?.closest("#mobile-sidebar") && target.tagName === "A") {
      closeSidebar();
    }
    
    // Toggle de servicios
    if (target?.closest("#services-toggle")) {
      const servicesMenu = document.getElementById("services-menu");
      const servicesChevron = target.closest("#services-toggle")?.querySelector("svg");
      if (servicesMenu) servicesMenu.classList.toggle("hidden");
      if (servicesChevron) servicesChevron.classList.toggle("rotate-180");
    }
    
    // Toggle de proyectos
    if (target?.closest("#projects-toggle")) {
      const projectsMenu = document.getElementById("projects-menu");
      const projectsChevron = target.closest("#projects-toggle")?.querySelector("svg");
      if (projectsMenu) projectsMenu.classList.toggle("hidden");
      if (projectsChevron) projectsChevron.classList.toggle("rotate-180");
    }
  });

  // Reaplica tras navegación SPA
  window.addEventListener("astro:after-swap", closeSidebar);
} 