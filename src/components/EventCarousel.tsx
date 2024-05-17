import React, { useEffect, useState } from 'react';

function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      src: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
      alt: 'Burger',
      text: 'Image 1',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
      alt: 'Burger',
      text: 'Image 2',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
      alt: 'Burger',
      text: 'Image 3',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
      alt: 'Burger',
      text: 'Image 4',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
      alt: 'Burger',
      text: 'Image 5',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
      alt: 'Burger',
      text: 'Image 6',
    },
    {
      src: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
      alt: 'Burger',
      text: 'Image 7',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="carousel rounded-box">
        {carouselItems.map((item, index) => (
          <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={item.src} alt={item.alt} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsCarousel;
