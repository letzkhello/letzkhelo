"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Carousel() {
  const [getGame, setGame] = useState([]);
  useEffect(() => {
    getGameDetails();
  }, []);

  const getGameDetails = async () => {
    const res = await axios.get("/api/getAllSports");
    console.log(res.data);
    checkFilter(res.data);
  };
  const checkFilter = (gameName: any) => {
    const filterData = gameName.filter((game: any) => game.isFeatured == true);
    setGame(filterData);
    console.log(getGame, "prakas");
    console.log(filterData, "saodiafdas");
  };

  return (
    <>
      <div className="carousel w-full h-[35vh]">
        {getGame.map((game?: any, index?: any) => {
          console.log("hii");
          return (
            <>
              <div
                id={`slide` + index}
                className="carousel-item relative w-full h-full"
              >
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4529fd434a85c683.jpg?q=20"
                  className="w-full "
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index - 1}`} className="btn btn-circle">
                    ❮
                  </a>
                  <a href={`#slide${index + 1}`} className="btn btn-circle">
                    ❯
                  </a>
                </div>
                <button className="btn btn-primary absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4 mx-auto w-3/12 md:w-2/12">
                  Register Now
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
