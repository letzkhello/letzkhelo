"use client"
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Card from './Card';

export const HomeComponent = () => {
  const [isMounted, setIsMounted] = useState(false);


  const slides = [
    { url: "https://www.letzkhelo.com//image-1.jpg", title: "beach" },
    { url: "https://www.letzkhelo.com//image-2.jpg", title: "boat" },
    { url: "https://www.letzkhelo.com//image-3.jpg", title: "forest" },
    { url: "https://www.letzkhelo.com//image-4.jpg", title: "city" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
    <div className='w-500 h-280 m-0 auto mb-10'>
        <Carousel slides={slides} />
      </div>

      {/* <Carousel/> */}
      {/* <section className="background firstsection">
        <div className="box-main">
          <div className={`fhalf flex flex-col p-20 ${isMounted ? 'animate-fadeInLeft' : ''}`} id="home">
            <p className={`textbig ${isMounted ? 'animate-bounce' : ''}`}>The Future is here</p>
            <p className={`textsmall ${isMounted ? 'animate-fadeInRight' : ''}`}>Come out of the <b>virtual world</b></p>
          </div>
          <div className={`shalf ${isMounted ? 'animate-zoomIn' : ''}`}>
            <img src='/icon.jpeg' alt="kk" />
          </div>
        </div>
      </section> */}
      <Card />
    </div>
  );
};
