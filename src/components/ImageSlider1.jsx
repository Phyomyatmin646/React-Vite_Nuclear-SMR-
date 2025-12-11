import { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "https://undark.org/wp-content/uploads/2023/07/50280058037_053c38904c_o_crop.jpg",
    "https://www.innovationnewsnetwork.com/wp-content/uploads/2024/07/UPPSAL11-29131-shutterstockCW-craftsman_2393277663.jpg",
    "https://www.sustainability-times.com/wp-content/uploads/2025/06/china-surpasses-the-west-by-years-this-breakthrough-in-modular-nuclear-reactors-signals-a-future-economic-power-shift.jpg.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // auto change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;