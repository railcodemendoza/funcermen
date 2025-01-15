import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/ospe.png",
    "/sancor.png",
    "/osde.png",
    "/osadef.png",
    "/medicus.png",
    "/galeno.png",
    "/medife.png",
  ];

  const visibleImages = 4; // Número de imágenes visibles al mismo tiempo

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Mueve al siguiente automáticamente
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    const start = currentIndex;
    const end = start + visibleImages;
    return images
      .slice(start, end)
      .concat(images.slice(0, Math.max(0, end - images.length)));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev-btn" onClick={handlePrev}>
        ❮
      </button>
      <div className="carousel-wrapper">
        {getVisibleImages().map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} className="carousel-img" />
        ))}
      </div>
      <button className="carousel-btn next-btn" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
