"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import Loader from "@/components/Loader";
interface Game {
  sportName: string;
  location: string;
  image: string;
  description: string;
  _id: number;
}
export default function Card() {
  const [getLoader, setLoader] = useState(true);
  const [getGame, setGame] = useState<Game[]>([]);

  useEffect(() => {
    getGameDetails();
  }, []);

  const getGameDetails = async () => {
    setLoader(true);
    const res = await axios.get("/api/getAllSports");
    setLoader(false);
    console.log(res.data);
    setGame(res.data);
  };
  if (getLoader == true) {
    return <Loader />;
  } else {
    return (
      <div className="p-4 w-full md:flex md:justify-evenly md:flex-wrap">
        {getGame?.map((game, id) => {
          return (
            <>
              <div
                className=" md:w-1/4 max-w-md  bg-white rounded-3xl shadow-xl overflow-hidden m-8"
                key={id}
              >
                <div className="max-w-md mx-auto">
                  <div className="h-[236px]">
                    <Image
                      src={game.image}
                      alt="img"
                      width="300"
                      height="200"
                      className="rounded-t-lg object-cover h-[100%] w-[100%]"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                      {game?.sportName}
                    </p>
                    <div className="flex flex-row">
                      <p className="text-[17px] font-bold text-[#0FB478]">
                        location: {game?.location}
                      </p>
                    </div>
                    <button className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                      <Link href={`/bookCompetetion/${game._id}`}>
                        Register Now
                      </Link>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
