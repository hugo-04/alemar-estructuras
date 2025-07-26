import { useEffect, useState } from 'preact/hooks';

export function useCarousel({ length, autoplay = true, interval = 18000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) {return;}
    let timeout;
    function nextSlide() {
      setActiveIndex((prev) => (prev + 1) % length);
      timeout = setTimeout(nextSlide, interval);
    }
    timeout = setTimeout(nextSlide, interval);
    return () => clearTimeout(timeout);
  }, [autoplay, interval, length]);

  return [activeIndex, setActiveIndex];
}
