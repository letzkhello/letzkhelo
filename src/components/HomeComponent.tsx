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
          {/* <p className="absolute top-40 z-50 text-orange-600 text-4xl font-black p-2 animate-waving-hand animate-pulse text-center">Ab Har Gali Se Champion Niklenge</p> */}
          
          {/* <img className="h-96 w-[100%] opacity-80" src="/group.jpg"/> */}
      {/* </div> */}
      <div className="bg-gray-900">
            <section className="container items-center px-4 pb-12 mx-auto  lg:flex md:px-40">
                <div className="flex-1 space-y-4 sm:text-center lg:text-left">
                    <h1 className="text-4xl font-bold  pt-5 text-yellow-500">
                        Letzkhelo
                    </h1>
                    <p className="max-w-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0">
                       Come out of virtual world- Ab har gali s Champions niklenge
                       <br/>
                       Our mission is simple: to create a vibrant and inclusive community for athletes of all levels. Whether you are a seasoned pro or just starting your sporting journey, Letzkhelo is the place where you can connect, compete, and grow.
                    </p>
                    <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a
                            href="javascript:void(0)"
                            className="block px-6 py-2 text-center text-white bg-yellow-600 rounded-md"
                        >
                            Letzkhelo Store(Coming Soon)
                        </a>
                      
                    </div>
                </div>
                <div>
                    <img
                        src="/group.jpg"
                        className="w-64 h-72 mx-auto mt-6 sm:w-10/12 "
                    />
                </div>
            </section>
        </div>
      <Card />
      <div className="m-0 p-0">
      <Features/>
      </div>
    </div>
  );
};
