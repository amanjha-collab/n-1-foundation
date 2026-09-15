import { useState, useEffect } from 'react';

const IMAGES = [
  { src: '/assets/programs-hero-B1XahFR6.webp', alt: 'Students learning together' },
  { src: '/assets/gallery-school-morning-assembly.webp', alt: 'Students gathering together in the morning' },
  { src: '/assets/gallery-girls-with-notebooks.webp', alt: 'Girls smiling together holding their notebooks' },
  { src: '/assets/gallery-classroom-alphabet-wall.webp', alt: 'Children laughing together beside an alphabet mural' },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0">
        {IMAGES.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className={`hero-carousel-img${i === active ? ' is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <div className="hero-dots">
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Show background ${i + 1}`}
            className={`hero-dot${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </>
  );
}
