"use client";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import Features from "./OurFeatures";
import Image from "next/image";


export const HomeComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  const slides = [
    { url: "/one.jpg", title: "beach" },
    { url: "/ball.jpg", title: "boat" },
    { url: "/badmintoncover.jpg", title: "forest" },
    { url: "/carous.jpg", title: "city" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {/* <div className="w-500 h-280 m-0 auto mb-10 "> */}
        {/* <Carousel slides={slides} /> */}
        {/* <Image
            src="/group.jpg"
            layout='fill'
    objectFit='contain'
            alt="Google Icon"
            className="mr-3"
          /> */}
          <p className="absolute top-40 z-50 text-orange-600 text-4xl font-black p-2 animate-waving-hand animate-pulse text-center">Ab Har Gali Se Champion Niklenge</p>
          
          <img className="h-96 w-[100%] opacity-80" src="/group.jpg"/>
      {/* </div> */}

      <Card />
      <div className="m-0 p-0">
      <Features/>
      </div>
    </div>
  );
};
