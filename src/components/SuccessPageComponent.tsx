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
    const res = await axios.get("/api/getAllSports");
    setGame(res.data);
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-4/6 my-16 sm:my-4 md:my-3 lg:my-3">
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <div className="text-2xl h-full w-full flex justify-center items-center">
              <TiTick className="text-white h-full w-full" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-green-600 my-4">
          Registration Successful
        </h1>
        <p className="text-lg text-white px-10">
          <span className="font-bold uppercase  ">{session?.user?.name}</span>,
          Thank you for Registration in{" "}
          {getGame?.map((game) => {
            if (game?._id == params?.id) {
              return (
                <span key={game?._id} className="font-bold uppercase">
                  {game?.sportName}
                </span>
              );
            }
          })}
        </p>
        <p className="text-lg text-white px-10 my-4">
          <span className="font-bold uppercase">Venue : </span>
          {getGame?.map((game) => {
            if (game?._id == params?.id) {
              return (
                <span key={game?._id} className="font-bold uppercase">
                  {game?.location}
                </span>
              );
            }
          })}
        </p>

        <p className="text-lg text-white px-10 my-4">
          <span className="font-bold uppercase">Time : </span>
            11:00 AM
        </p>

        <p className="text-lg text-white my-4 px-10">
        Please remember to bring your Aadhar card for verification purposes. It helps us ensure accurate and secure identification.
        </p>

        <Link href={"/"} className="my-4 p-0">
          <button
            className="inline-flex items-center px-3 py-2 mb-4 text-sm font-medium text-center lg:text-xl text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:scale-110 duration-300"
          >
            Go Back to Home
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center my-4">
           <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7004.169407169525!2d77.02187234330985!3d28.62722335267022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzM1LjQiTiA3N8KwMDEnMjMuOCJF!5e0!3m2!1sen!2sin!4v1698658857499!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="border-0 w-3/4 h-44 sm:w-3/4 sm:h-44"></iframe>
           </div>
    </div>
  );
};


