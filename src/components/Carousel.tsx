"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel() {

  const [getGame, setGame] = useState([]);
  useEffect(() => {
    getGameDetails();
    console.log(getGame);
  }, []);

  const getGameDetails = async () => {
    const res = await axios.get("/api/getAllSports");
    console.log(res.data);
    setGame(res.data);
    checkFilter(res.data);
    console.log(getGame);
  };
    const checkFilter= (gameName:any)=>{
        const filterData = gameName.filter((game:any) => game.isFeatured ==true);
        setGame(filterData);
        console.log(filterData,'saodiafdas');
        console.log(getGame,'prakas');
    }


  return (
   <>
<div className="carousel w-full h-1/2">
  <div id="slide1" className="carousel-item relative w-full h-1/2">
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/23/Central/BAU/Unrec/21to25/PC_hero_1_2x._CB598561652_.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <button className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">serach</button>
    {/* {getGame} */}
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/Makeup-PChj._CB577919774_.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
   </>
  );
}
