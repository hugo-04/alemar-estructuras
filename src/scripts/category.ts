document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-services-button');
  if (!toggleButton) return;

  const servicesList = document.getElementById('services-list');
  if (!servicesList) return;

  const serviceItems = servicesList.querySelectorAll('.service-item');
  
  let allVisible = false;

  toggleButton.addEventListener('click', () => {
    allVisible = !allVisible;
    
    serviceItems.forEach((item, index) => {
      // Assuming initialVisibleServices is passed as a data attribute or similar if needed
      // For now, it's hardcoded as 3 based on the original Astro file
      const initialVisibleServices = 3; // This should ideally come from Astro.props or a data attribute
      if (index >= initialVisibleServices) {
        item.classList.toggle('hidden', !allVisible);
      }
    });

    toggleButton.textContent = allVisible ? 'Ver Menos' : 'Ver Más';
  });
});