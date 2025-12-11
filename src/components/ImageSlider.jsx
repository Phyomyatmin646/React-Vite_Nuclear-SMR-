import { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://destinationsmagazine.com/wp-content/uploads/2017/09/Chin-State-iStock-522624583-DG-Photography-1500x1000.jpg',
      alt: 'SNR Reactor Overview',
      title: 'Beautiful Chin State',
      subtitle: 'Located near Kalay City'
    },
    {
      id: 2,
      image: 'https://cms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com/images/4/6/5/2/40532564-3-eng-GB/Cropped-16534901742017-07-11T230511Z_1560064324_RC1537968C10_RTRMADP_3_MYANMAR-ENERGY.JPG',
      alt: 'Agriculture Field',
      title: 'The Power Barrier',
      subtitle: 'Chin State Energy Blackout'
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdOdAYQzArL3c70jL_P-dpxeLeF0JWVQLqJnY-4_YKzlmardxQpOVK09xCujYjyrsq6Y&usqp=CAU',
      alt: 'Chin State Landscape',
      title: 'Modern Farming Solutions',
      subtitle: 'Located near Kalay City'
    },
    {
      id: 4,
      image: 'https://images.squarespace-cdn.com/content/v1/575fb39762cd94c2d69dc556/1494428018223-QW6AEJNIIAXZ882V31MP/Banner+image.jpg?format=2500w',
      alt: 'Advanced Technology',
      title: 'Advanced Technology',
      subtitle: 'Cutting-edge nuclear solutions'
    },
    {
      id: 5,
      image: 'https://myanmarcs.focuscoregroup.com/wp-content/uploads/2016/02/shutterstock_226031854.jpg',
      alt: 'Local Community',
      title: 'Community Development',
      subtitle: 'Building a brighter future together'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://picsum.photos/1200/600?random=${slide.id}`;
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md max-w-2xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6 sm:w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;