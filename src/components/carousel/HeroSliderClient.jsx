import { useEffect, useRef, useState } from 'preact/hooks';

export default function HeroSliderClient({ images, interval = 8000, transition = 2000 }) {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, images.length]);

  return (
    <div className="relative w-full h-[60vw] min-h-[350px] max-h-[700px] overflow-hidden bg-[#1e3a5f]">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          className={`hero-slide-img${active === idx ? ' active' : ''}`}
          style={{ zIndex: idx }}
          loading="lazy"
        />
      ))}
      <div className="absolute bottom-0 left-0 z-10 pointer-events-none p-4 sm:p-6 md:p-8 lg:p-12">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#c8aa6e] text-left drop-shadow-2xl tracking-tight leading-tight">
            {images[active].text}
          </h1>
        </div>
      </div>
      <style>{`
        .hero-slide-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          z-index: 0;
          transition: opacity ${transition}ms ease-in-out;
          will-change: opacity, transform;
        }
        .hero-slide-img.active {
          opacity: 1;
          z-index: 1;
          animation: kenburns-pepper ${interval}ms linear both;
        }
        @keyframes kenburns-pepper {
          0% {
            transform: scale(1) translate(0%, 0%);
          }
          100% {
            transform: scale(1.15) translate(-3%, -3%);
          }
        }
      `}</style>
    </div>
  );
} 