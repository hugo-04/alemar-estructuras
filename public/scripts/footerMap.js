let currentZoom = 15;
let mapIframe = null;

function initFooterMap() {
  const mapElement = document.getElementById('footer-map');
  if (mapElement && !mapElement.querySelector('iframe')) {
    // Crear el iframe del mapa de Google Maps con controles interactivos
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=José+Galvez+375+Urb.+Chicago+Trujillo+Peru&zoom=${currentZoom}&maptype=roadmap`;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    
    // Agregar estilos para mejorar la interactividad
    iframe.style.cursor = 'grab';
    iframe.style.transition = 'all 0.3s ease';
    
    // Agregar eventos para mejorar la experiencia de usuario
    iframe.addEventListener('load', function() {
      // El mapa está listo para interactuar
      iframe.style.cursor = 'grab';
      mapIframe = iframe;
    });
    
    // Agregar hover effect
    iframe.addEventListener('mouseenter', function() {
      iframe.style.transform = 'scale(1.02)';
      iframe.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
    });
    
    iframe.addEventListener('mouseleave', function() {
      iframe.style.transform = 'scale(1)';
      iframe.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
    
    mapElement.appendChild(iframe);
  }
}

// Funciones de zoom
function zoomIn() {
  if (currentZoom < 20) {
    currentZoom++;
    updateMapZoom();
  }
}

function zoomOut() {
  if (currentZoom > 10) {
    currentZoom--;
    updateMapZoom();
  }
}

function updateMapZoom() {
  const mapElement = document.getElementById('footer-map');
  if (mapElement) {
    const iframe = mapElement.querySelector('iframe');
    if (iframe) {
      iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=José+Galvez+375+Urb.+Chicago+Trujillo+Peru&zoom=${currentZoom}&maptype=roadmap`;
    }
  }
}

// Agregar event listeners para los botones de zoom
function setupZoomControls() {
  const zoomInBtn = document.getElementById('zoom-in');
  const zoomOutBtn = document.getElementById('zoom-out');
  
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', zoomIn);
  }
  
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', zoomOut);
  }
}

// Inicializar el mapa cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    initFooterMap();
    setupZoomControls();
  });
} else {
  initFooterMap();
  setupZoomControls();
}

// Reinicializar el mapa cuando se navega entre páginas (para Astro)
document.addEventListener('astro:page-load', function() {
  initFooterMap();
  setupZoomControls();
}); 