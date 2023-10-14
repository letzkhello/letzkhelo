"use client";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Card from "./Card";

export const HomeComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  const slides = [
    // { url: "http://localhost:3000//carousal1.jpeg", title: "beach" },
    { url: "https://www.letzkhelo.com//one.jpg", title: "beach" },
    { url: "https://www.letzkhelo.com//image-2.jpg", title: "boat" },
    { url: "https://www.letzkhelo.com//image-3.jpg", title: "forest" },
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
    </div>
  );
};
