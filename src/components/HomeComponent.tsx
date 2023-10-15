"use client";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import Features from "./OurFeatures";

export const HomeComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  const slides = [
    // { url: "http://localhost:3000//carousal1.jpeg", title: "beach" },
    { url: "https://www.letzkhelo.com//one.jpg", title: "beach" },
    { url: "/ball.jpg", title: "boat" },
    { url: "/badmintoncover.jpg", title: "forest" },
    { url: "https://www.letzkhelo.com//image-4.jpg", title: "city" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <div className="w-500 h-280 m-0 auto mb-10">
        <Carousel slides={slides} />
      </div>

      <Card />
      <div className="m-0 p-0">
      <Features/>
      </div>
    </div>
  );
};
