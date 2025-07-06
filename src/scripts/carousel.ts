interface CarouselConfig {
  id: string;
  autoplay: boolean;
  interval: number;
  imagesLength: number;
}

export function initCarousels() {
  document.addEventListener("DOMContentLoaded", function () {
    // Get all carousels on the page
    const carousels = document.querySelectorAll('[id^="carousel-"]');
    
    carousels.forEach(function (carousel) {
      const id = carousel.id.replace("carousel-", "");
      const autoplay = carousel.getAttribute("data-autoplay") === "true";
      const interval = parseInt(carousel.getAttribute("data-interval") || "5000");
      const imagesLength = parseInt(carousel.getAttribute("data-images-length") || "0");
      
      const carouselInner = carousel.querySelector(".carousel-inner") as HTMLElement;
      const prevButton = carousel.querySelector("[data-carousel-prev]") as HTMLElement;
      const nextButton = carousel.querySelector("[data-carousel-next]") as HTMLElement;
      const indicatorsContainer = carousel.querySelector(".carousel-indicators") as HTMLElement;
      
      let currentIndex = 0;
      let autoSlideInterval: number | undefined;

      function updateCarousel() {
        if (carouselInner) {
          carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        if (indicatorsContainer) {
          indicatorsContainer.querySelectorAll("button").forEach(function (button, idx) {
            if (idx === currentIndex) {
              button.classList.add("opacity-100");
              button.classList.remove("opacity-50");
            } else {
              button.classList.add("opacity-50");
              button.classList.remove("opacity-100");
            }
          });
        }
      }

      function goToNext() {
        currentIndex = (currentIndex + 1) % imagesLength;
        updateCarousel();
      }

      function goToPrev() {
        currentIndex = (currentIndex - 1 + imagesLength) % imagesLength;
        updateCarousel();
      }

      function startAutoSlide() {
        if (autoplay) {
          clearInterval(autoSlideInterval);
          autoSlideInterval = window.setInterval(goToNext, interval);
        }
      }

      function stopAutoSlide() {
        if (autoSlideInterval) {
          clearInterval(autoSlideInterval);
        }
      }

      if (prevButton) {
        prevButton.addEventListener("click", function () {
          stopAutoSlide();
          goToPrev();
          startAutoSlide();
        });
      }

      if (nextButton) {
        nextButton.addEventListener("click", function () {
          stopAutoSlide();
          goToNext();
          startAutoSlide();
        });
      }

      if (indicatorsContainer) {
        indicatorsContainer.addEventListener("click", function (e) {
          const target = e.target as HTMLElement;
          if (target.matches("[data-carousel-indicator]")) {
            stopAutoSlide();
            currentIndex = parseInt(target.getAttribute("data-carousel-indicator") || "0");
            updateCarousel();
            startAutoSlide();
          }
        });
      }

      // Initialize carousel
      updateCarousel();
      startAutoSlide();

      // Pause on hover
      carousel.addEventListener("mouseenter", stopAutoSlide);
      carousel.addEventListener("mouseleave", startAutoSlide);
    });
  });
} 