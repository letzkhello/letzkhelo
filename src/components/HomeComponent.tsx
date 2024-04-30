"use client";
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import Features from "./OurFeatures";
import Image from "next/image";

import Link from "next/link";
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
     
      <div className="bg-white "  style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }} >
            <section className="container items-center px-4 pb-12 mx-auto  lg:flex md:px-40">
                <div className="flex-1 space-y-4 sm:text-center lg:text-left">

                  <div>
                  <div className="">
                  <h1 className="md:text-7xl text-5xl font-bold  pt-5 text-white">
                      Your Sports &nbsp;
                    </h1>
                    <h1 className="md:text-7xl text-5xl font-bold  pt-5 text-white">
                      Platform
                    </h1>
                  </div>
                    
                    <div><h1 className="md:text-7xl text-4xl font-bold  pt-5 text-orange-800 underline" >
                      LetzKhelo
                    </h1></div>

                  </div>

                  
                  <div className="max-w-xl font-bold  leading-relaxed text-white sm:mx-auto lg:ml-0 text-2xl">&quot; Ab Har Gali Se Champions Niklenge &quot;</div>
                  <h1 className="text-5xl font-bold  pt-5 text-white ">
                      <span className="text-5xl font-bold  pt-5 text-orange-800 underline">500+</span> &nbsp; Registered Athletes
                    </h1>
                    <p className="max-w-xl leading-relaxed text-white sm:mx-auto lg:ml-0">
                       <br/>
                       Our mission is simple: to create a vibrant and inclusive community for athletes of all levels. Whether you are a seasoned pro or just starting your sporting journey, Letzkhelo is the place where you can connect, compete, and grow.
                    </p>
                    {/* <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    <Link href={'/allProducts'}
                            className="block px-6 py-2 text-center text-white bg-yellow-600 rounded-md"
                        >
                            Letzkhelo Store
                        </Link>
                      
                    </div> */}
                    
                </div>
                
                <div>
                    <img
                        src="/group.jpg"
                        className="w-80 h-80 mx-auto mt-6  rounded-full"
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