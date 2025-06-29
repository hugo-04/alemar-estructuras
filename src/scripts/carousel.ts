document.addEventListener('DOMContentLoaded', () => {
  // Get all carousels on the page
  const carousels = document.querySelectorAll('[id^="carousel-"]');

  carousels.forEach(carouselEl => {
    const carousel = carouselEl as HTMLElement;
    const id = carousel.id.replace('carousel-', '');
    const autoplay = carousel.dataset.autoplay === 'true';
    const interval = parseInt(carousel.dataset.interval || '5000');
    const imagesLength = parseInt(carousel.dataset.imagesLength || '0');

    const carouselInner = carousel.querySelector('.carousel-inner') as HTMLElement;
    const prevButton = carousel.querySelector('[data-carousel-prev]') as HTMLButtonElement;
    const nextButton = carousel.querySelector('[data-carousel-next]') as HTMLButtonElement;
    const indicatorsContainer = carousel.querySelector('.carousel-indicators') as HTMLElement;
    let currentIndex = 0;
    let autoSlideInterval: number | undefined;

    const updateCarousel = () => {
      if (carouselInner) {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      if (indicatorsContainer) {
        indicatorsContainer.querySelectorAll('button').forEach((button, idx) => {
          if (idx === currentIndex) {
            button.classList.add('opacity-100');
            button.classList.remove('opacity-50');
          } else {
            button.classList.add('opacity-50');
            button.classList.remove('opacity-100');
          }
        });
      }
    };

    const goToNext = () => {
      currentIndex = (currentIndex + 1) % imagesLength;
      updateCarousel();
    };

    const goToPrev = () => {
      currentIndex = (currentIndex - 1 + imagesLength) % imagesLength;
      updateCarousel();
    };

    const startAutoSlide = () => {
      if (autoplay) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = window.setInterval(goToNext, interval);
      }
    };

    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    prevButton?.addEventListener('click', () => {
      stopAutoSlide();
      goToPrev();
      startAutoSlide();
    });

    nextButton?.addEventListener('click', () => {
      stopAutoSlide();
      goToNext();
      startAutoSlide();
    });

    indicatorsContainer?.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.matches('[data-carousel-indicator]')) {
        stopAutoSlide();
        currentIndex = parseInt(target.dataset.carouselIndicator || '0');
        updateCarousel();
        startAutoSlide();
      }
    });

    // Initialize carousel
    updateCarousel();
    startAutoSlide();

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  });
});