"use client";

import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";


interface Game {
  sportName: string;
  location: string;
  image: string;
  description: string;
  _id: number;
}

export const SuccessPageComponent = ({ params }: any) => {
  const { data: session, status } = useSession();
  const [getGame, setGame] = useState<Game[]>([]);


  useEffect(() => {
    getGameDetails();
  }, []);

  const getGameDetails = async () => {
    // setLoader(true);
    // setShimmer(true);
    const res = await axios.get("/api/getAllSports");
    // setLoader(false);
    // setShimmer(false);
    console.log(res.data);
    setGame(res.data);
  };


  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-4/6">
        <div className="flex flex-col items-center justify-center ">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <div className="text-2xl h-full w-full flex justify-center items-center">
              <TiTick className="text-white h-full w-full" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Registration Successful
        </h1>
        <p className="text-lg text-white px-10">
          <span className="font-bold uppercase  ">{session?.user?.name}</span>, Thank you for Registration in      { 
          getGame?.map((game)=> {
             if(game?._id == params?.id){
              return (
          <span key={game?._id} className="font-bold uppercase">{game?.sportName}</span>
              )
             }
          })
          }
        </p>
        <p className="text-lg text-white">
          <span className="font-bold uppercase">Venue:</span>
            { 
          getGame?.map((game)=> {
             if(game?._id == params?.id){
              return (
          <span key={game?._id} className="font-bold uppercase">{game?.location}</span>
              )
             }
          })
          }
        </p>

        <Link href={"/"}>
          <button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center lg:text-xl text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 duration-300
    my-12"
          >
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};
