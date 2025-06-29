export {}; // Make this file a module

// Declare google and initMap as global variables to avoid TypeScript errors
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const successPopup = document.getElementById('success-popup') as HTMLElement;

  if (form && successPopup) {
    form.addEventListener('submit', async (event: Event) => {
      event.preventDefault(); // Previene el envío tradicional del formulario.

      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // Importante para Formspree AJAX
          }
        });

        if (response.ok) {
        // Muestra el pop-up de éxito añadiendo la clase 'is-visible'.
        successPopup.classList.add('is-visible');
        // Oculta el pop-up automáticamente después de 3 segundos.
        setTimeout(() => {
          successPopup.classList.remove('is-visible');
        }, 5000); // 5000 milisegundos = 3 segundos
        // Reinicia el formulario.
        form.reset();
      } else {
          // Intenta leer el error de la respuesta de Formspree
          const errorData = await response.json();
          alert(`Hubo un error al enviar su mensaje: ${errorData.error || response.statusText}. Por favor, inténtelo de nuevo.`);
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error de conexión. Por favor, inténtelo de nuevo más tarde.');
      }
    });

    // Escucha el evento personalizado para cerrar el pop-up.
   document.addEventListener('close-success-popup', (event: Event) => {
      if ((event as CustomEvent).detail.popupId === 'success-popup') {
        successPopup.classList.remove('is-visible');
      }
    });
  }

  // Google Map Initialization
  function initMap(): void {
    const location = { lat: -16.409047, lng: -71.537451 }; // Example: Arequipa, Peru coordinates
    const map = new (window as any).google.maps.Map(document.getElementById("map") as HTMLElement, {
      zoom: 15,
      center: location,
    });
    const marker = new (window as any).google.maps.Marker({
      position: location,
      map: map,
    });
  }

  // Make initMap available globally for the Google Maps API callback
  (window as any).initMap = initMap;

  // Load Google Maps API script dynamically
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
});