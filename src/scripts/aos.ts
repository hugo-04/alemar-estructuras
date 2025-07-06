export function initAOS() {
  if (typeof window !== "undefined" && (window as any).AOS) {
    (window as any).AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }
}

// Inicializar cuando el DOM esté listo
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAOS);
  } else {
    initAOS();
  }

  // Inicializar después de navegación SPA
  document.addEventListener("astro:page-load", initAOS);
}

if (typeof window !== "undefined") {
  window.addEventListener("astro:after-swap", initAOS);
} 