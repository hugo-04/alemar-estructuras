document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const servicesToggle = document.getElementById('services-toggle');
  const servicesMenu = document.getElementById('services-menu');
  const servicesChevron = servicesToggle ? servicesToggle.querySelector('svg') : null;
  const closeSidebarButton = document.getElementById('close-sidebar-button');

  let isSidebarOpen = false;

  function toggleSidebar(show: boolean) {
    isSidebarOpen = show;
    mobileSidebar?.classList.toggle('-translate-x-full', !show);
    mobileSidebar?.classList.toggle('hidden', !show);
    sidebarOverlay?.classList.toggle('hidden', !show);
    document.body.style.overflow = show ? 'hidden' : '';

    const hamburgerIconWrapper = document.getElementById('hamburger-icon-wrapper');
    if (hamburgerIconWrapper) {
      hamburgerIconWrapper.classList.toggle('open', show);
    }
  }

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      toggleSidebar(!isSidebarOpen);
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
      toggleSidebar(false);
    });
  }

  if (closeSidebarButton) {
    closeSidebarButton.addEventListener('click', () => {
      toggleSidebar(false);
    });
  }

  if (servicesToggle && servicesMenu) {
    servicesToggle.addEventListener('click', () => {
      servicesMenu.classList.toggle('hidden');
      if (servicesChevron) {
        servicesChevron.classList.toggle('rotate-180');
      }
    });
  }

  if (mobileSidebar) {
    mobileSidebar.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).tagName === 'A') {
        toggleSidebar(false); // Close sidebar immediately
      }
    });
  }
});
