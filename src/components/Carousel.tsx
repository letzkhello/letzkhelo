"use client";
import React, { useState, useEffect } from "react";
const slideStyles = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 1s ease-in-out",
};

const Carousel = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1; 
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  const slideStylesWithBackground = {
    ...slideStyles,
    background: `url(${currentSlide?.url}) center/cover`,
  };

  return (
    <div className="relative h-[35vh] lg:h-[60vh]">
      <div>
        <div
          onClick={goToPrevious}
          className="absolute top-1/2 transform -translate-y-1/2 left-32 text-45 text-white z-10 cursor-pointer"
        >
          
        </div>
        <div
          onClick={goToNext}
          className="absolute top-1/2 transform -translate-y-1/2 right-32 text-45 text-white z-10 cursor-pointer"
        >
          
        </div>
      </div>
      <div style={slideStylesWithBackground}></div>
      <div className="flex justify-center">
        {slides?.map((slide: any, slideIndex: React.Key | null | undefined) => (
          <div
            className={`m-0 mx-3 cursor-pointer text-20 ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-300"
            }`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

