import React, { useState, useEffect } from "react";
import '../assets/Carousel.css';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "CONVENIOS OBRAS SOCIALES/1 - OSPE.png",
    "CONVENIOS OBRAS SOCIALES/2 - SANCOR.png",
    "CONVENIOS OBRAS SOCIALES/3- OSDE..png",
    "CONVENIOS OBRAS SOCIALES/4 - OSADEF.png",
    "CONVENIOS OBRAS SOCIALES/5 - HIGEA.jpg",
    "CONVENIOS OBRAS SOCIALES/6 - MEDICUS.png",
    "CONVENIOS OBRAS SOCIALES/7 - GALENO..png",
    "CONVENIOS OBRAS SOCIALES/8 - UNIMED.png",
    "CONVENIOS OBRAS SOCIALES/9 - ANDES SALUD.jpg",
    "CONVENIOS OBRAS SOCIALES/10 - SCIS.jpg",
    "CONVENIOS OBRAS SOCIALES/11 - OSDEPYM..jpg",
    "CONVENIOS OBRAS SOCIALES/12 - MEDIFE..png",
    "CONVENIOS OBRAS SOCIALES/13 - NOBIS.png",
    "CONVENIOS OBRAS SOCIALES/14- BOREAL.png",
    "CONVENIOS OBRAS SOCIALES/15 -OSDOP.jpg",
    "CONVENIOS OBRAS SOCIALES/16- ASOCIART.png",
    "CONVENIOS OBRAS SOCIALES/17 -FED PAT ART.png",
    "CONVENIOS OBRAS SOCIALES/18 -LA SEGUNDA..png",
    "CONVENIOS OBRAS SOCIALES/19- PREVENCION.jpg",
    "CONVENIOS OBRAS SOCIALES/20- 20DEOCTUBRE.jpg",



  ];

  const visibleImages = 6; // Número de imágenes visibles al mismo tiempo

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
