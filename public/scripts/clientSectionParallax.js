// Efecto parallax para la imagen de fondo de la sección de clientes
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const clientBackground = document.querySelector('.client-background');
    const clientBackgroundImage = document.querySelector('.client-background-image');
    if (!clientBackground || !clientBackgroundImage) return;

    let ticking = false;
    let lastScrollY = 0;

    function updateClientBackground() {
      const scrolled = window.pageYOffset;
      const sectionTop = clientBackground.offsetTop;
      const sectionHeight = clientBackground.offsetHeight;
      const viewportHeight = window.innerHeight;
      // Calcular la posición relativa del scroll dentro de la sección
      const sectionScroll = scrolled - sectionTop + viewportHeight;
      const scrollProgress = Math.max(0, Math.min(1, sectionScroll / (sectionHeight + viewportHeight)));
      // Mover la imagen verticalmente para revelar diferentes partes
      const maxMove = sectionHeight * 0.6; // La imagen es más alta, movemos hasta 60%
      const moveY = scrollProgress * maxMove;
      // Aplicar una curva de suavizado para movimiento más natural (ease-out)
      const easedMoveY = moveY * (1 - Math.pow(1 - scrollProgress, 2));
      // Solo actualizar si hay un cambio significativo
      if (Math.abs(scrolled - lastScrollY) > 1) {
        clientBackgroundImage.style.transform = `translateY(${-easedMoveY}px)`;
        lastScrollY = scrolled;
      }
      ticking = false;
    }
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateClientBackground);
        ticking = true;
      }
    }
    window.addEventListener('scroll', requestTick, { passive: true });
  });
})(); 