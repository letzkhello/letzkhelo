"use client"
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Card from './Card';

export const HomeComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
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
