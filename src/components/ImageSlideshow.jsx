import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slideshow = ({ images, interval = 4500 }) => {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group bg-gray-900">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {images.map((img, i) => (
          <div key={i} className="absolute inset-0">
            <img
              src={img.src}
              alt={img.title || 'SNR Agriculture Infrastructure'}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(i)}
              crossOrigin="anonymous"
            />
            {!loadedImages[i] && i === current && (
              <div className="absolute inset-0 bg-linear-to-br from-gray-800 to-gray-900 animate-pulse" />
            )}
          </div>
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20 pointer-events-none">
          <p className="text-sm font-light opacity-90">{images[current].caption}</p>
          <p className="text-2xl lg:text-3xl font-bold mt-1">{images[current].title}</p>
        </div>

        {/* Live Badge */}
        <div className="absolute top-6 right-6 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 animate-pulse z-20">
          <span className="w-3 h-3 bg-white rounded-full" />
          Live System
        </div>
      </div>

      {/* Navigation Arrows (on hover) */}
      <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-4 rounded-full transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm p-4 rounded-full transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${
              i === current
                ? 'w-10 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;