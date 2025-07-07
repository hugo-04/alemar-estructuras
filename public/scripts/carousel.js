class Carousel {
    constructor(container) {
        this.items = [];
        this.thumbnails = [];
        this.indicators = [];
        this.currentIndex = 1; // Empieza en 1 por el clon
        this.autoplayInterval = null;
        this.isTransitioning = false;
        this.initialized = false;
        this.container = container;
        this.inner = container.querySelector('.carousel-inner');
        this.options = {
            autoplay: container.dataset.autoplay === 'true',
            interval: parseInt(container.dataset.interval || '3000'),
            showNavigation: true,
            showPagination: false
        };
        this.initialized = false;
        this.init();
    }
    init() {
        if (this.initialized)
            return;
        if (!this.inner) {
            console.error('[Carousel] .carousel-inner no encontrado');
            return;
        }
        this.initialized = true;
        this.setupInfiniteCarousel();
        this.setupCarouselLayout();
        this.setupEventListeners();
        this.updateCounter();
        this.updateActiveStates();
        this.startAutoplay();
        console.log('[Carousel] Inicializado correctamente');
    }
    // Clona el primer y último slide para efecto infinito
    setupInfiniteCarousel() {
        this.items = Array.from(this.inner.querySelectorAll('.carousel-item'));
        if (this.items.length < 2)
            return;
        // Evitar duplicar clones si ya existen
        if (this.inner.querySelector('.carousel-item.cloned'))
            return;
        const first = this.items[0].cloneNode(true);
        const last = this.items[this.items.length - 1].cloneNode(true);
        first.classList.add('cloned');
        last.classList.add('cloned');
        this.inner.appendChild(first);
        this.inner.insertBefore(last, this.items[0]);
        this.items = Array.from(this.inner.querySelectorAll('.carousel-item'));
        this.currentIndex = 1;
        this.updatePosition(true);
        console.log('[Carousel] Clonado de slides realizado');
    }
    setupCarouselLayout() {
        this.container.style.overflow = 'hidden';
        this.inner.style.display = 'flex';
        this.inner.style.width = `${this.items.length * 100}%`;
        this.inner.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
        this.items.forEach(item => {
            item.style.width = `${100 / this.items.length}%`;
            item.style.flexShrink = '0';
        });
        // Miniaturas e indicadores
        this.thumbnails = Array.from(this.container.querySelectorAll('.thumbnail-btn'));
        this.indicators = Array.from(this.container.querySelectorAll('.carousel-indicator'));
    }
    setupEventListeners() {
        const prevBtn = this.container.querySelector('[data-carousel-prev]');
        const nextBtn = this.container.querySelector('[data-carousel-next]');
        if (prevBtn) {
            prevBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!this.isTransitioning)
                    this.prev();
            };
        }
        if (nextBtn) {
            nextBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!this.isTransitioning)
                    this.next();
            };
        }
        // Miniaturas: cambio inmediato y reinicio de autoplay
        this.thumbnails.forEach((thumbnail, index) => {
            thumbnail.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.goTo(index + 1, true); // +1 por el clon
            };
        });
        this.indicators.forEach((indicator, index) => {
            indicator.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.goTo(index + 1, true);
            };
        });
        this.inner.addEventListener('transitionend', () => {
            if (this.currentIndex === 0) {
                this.inner.style.transition = 'none';
                this.currentIndex = this.items.length - 2;
                this.updatePosition(true);
                setTimeout(() => {
                    this.inner.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 20);
                console.log('[Carousel] Loop infinito: salto al final');
            }
            if (this.currentIndex === this.items.length - 1) {
                this.inner.style.transition = 'none';
                this.currentIndex = 1;
                this.updatePosition(true);
                setTimeout(() => {
                    this.inner.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 20);
                console.log('[Carousel] Loop infinito: salto al inicio');
            }
            this.isTransitioning = false;
        });
        this.container.addEventListener('mouseenter', () => this.pauseAutoplay());
        this.container.addEventListener('mouseleave', () => this.resumeAutoplay());
        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                if (!this.isTransitioning)
                    this.prev();
            }
            else if (e.key === 'ArrowRight') {
                e.preventDefault();
                if (!this.isTransitioning)
                    this.next();
            }
        });
        this.container.setAttribute('tabindex', '0');
    }
    goTo(index, immediate = false) {
        if (index < 0 || index >= this.items.length)
            return;
        if (immediate) {
            this.inner.style.transition = 'none';
            this.currentIndex = index;
            this.updatePosition(true);
            this.updateActiveStates();
            this.updateCounter();
            setTimeout(() => {
                this.inner.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 20);
            this.restartAutoplay();
            console.log('[Carousel] Cambio inmediato a slide', index);
            return;
        }
        if (this.isTransitioning)
            return;
        this.isTransitioning = true;
        this.currentIndex = index;
        this.updatePosition();
        this.updateActiveStates();
        this.updateCounter();
        this.restartAutoplay();
        console.log('[Carousel] Transición a slide', index);
    }
    next() {
        this.goTo(this.currentIndex + 1);
    }
    prev() {
        this.goTo(this.currentIndex - 1);
    }
    updatePosition(noAnim = false) {
        if (noAnim)
            this.inner.style.transition = 'none';
        const translateX = -(this.currentIndex * (100 / this.items.length));
        this.inner.style.transform = `translateX(${translateX}%)`;
        console.log('[Carousel] updatePosition', this.currentIndex, translateX);
    }
    updateActiveStates() {
        this.thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));
        let realIndex = this.currentIndex - 1;
        if (realIndex < 0)
            realIndex = this.thumbnails.length - 1;
        if (realIndex >= this.thumbnails.length)
            realIndex = 0;
        if (this.thumbnails[realIndex])
            this.thumbnails[realIndex].classList.add('active');
        this.indicators.forEach((indicator) => indicator.classList.remove('active'));
        if (this.indicators[realIndex])
            this.indicators[realIndex].classList.add('active');
        console.log('[Carousel] updateActiveStates', realIndex);
    }
    updateCounter() {
        let realIndex = this.currentIndex - 1;
        if (realIndex < 0)
            realIndex = this.thumbnails.length - 1;
        if (realIndex >= this.thumbnails.length)
            realIndex = 0;
        const currentCounter = this.container.querySelector('.carousel-counter-current');
        const totalCounter = this.container.querySelector('.carousel-counter-total');
        if (currentCounter) {
            currentCounter.textContent = (realIndex + 1).toString();
        }
        if (totalCounter) {
            totalCounter.textContent = this.thumbnails.length.toString();
        }
        console.log('[Carousel] updateCounter', realIndex + 1, '/', this.thumbnails.length);
    }
    startAutoplay() {
        this.pauseAutoplay();
        if (!this.options.autoplay)
            return;
        this.autoplayInterval = window.setInterval(() => {
            if (!this.isTransitioning) {
                this.next();
            }
        }, this.options.interval);
        console.log('[Carousel] Autoplay iniciado');
    }
    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
            console.log('[Carousel] Autoplay pausado');
        }
    }
    resumeAutoplay() {
        if (this.options.autoplay && !this.autoplayInterval) {
            this.startAutoplay();
            console.log('[Carousel] Autoplay reanudado');
        }
    }
    restartAutoplay() {
        this.startAutoplay();
        console.log('[Carousel] Autoplay reiniciado');
    }
    destroy() {
        this.pauseAutoplay();
        this.initialized = false;
        console.log('[Carousel] Destruido');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('[id^="carousel-"]');
    carousels.forEach((carousel) => {
        if (carousel instanceof HTMLElement && !carousel.hasAttribute('data-carousel-initialized')) {
            new Carousel(carousel);
            carousel.setAttribute('data-carousel-initialized', 'true');
        }
    });
    console.log('[Carousel] Todos los carouseles inicializados');
});
export { Carousel };
