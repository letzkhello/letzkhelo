"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import Loader from "@/components/Loader";
import { Shimmer } from "./Shimmer";
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
  const [getRegisterUser, setRegisterUser] = useState<Game[]>([]);
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    getGameDetails();
    getUserRegisterDetails();
  }, []);

  const getUserRegisterDetails = async () => {
    const res = await axios.get("/api/users/getAllRegisteredUsers");
    console.log(res.data.data);
    setRegisterUser(res.data.data);
  };

  const getGameDetails = async () => {
    setLoader(true);
    setShimmer(true);
    const res = await axios.get("/api/getAllSports");
    setLoader(false);
    setShimmer(false);
    console.log(res.data);
    setGame(res.data);
  };

  const countRegisteredUsers = (sportName: any) => {
    const count = getRegisterUser.filter(
      (user) => user.sportName === sportName
    )?.length;
    return count;
  };
  // if (getLoader == true) {
  //   return <Loader />;
  // }
  if (shimmer == true) {
    return <Shimmer />;
  } else {
    return (
      <>
        <div className="flex justify-center items-center my-6 ">
          <h1 className="md:text-4xl text-2xl border-b-2 border-sky-500 font-serif font-bold">
             LETZKHELO COMPETETIONS
          </h1>
        </div>

        <div className="p-4 w-full md:flex md:justify-evenly md:flex-wrap">
          {getGame?.map((game: any, id) => {
            return (
              <div key={id} className="card w-80 p-2 glass transition-transform transform hover:scale-105 duration-300">
                <figure>
                  <Image
                    src={game?.image}
                    alt="img"
                    width="300"
                    height="200"
                    className="rounded-t-lg object-cover h-[100%] w-[100%]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{game?.sportName}</h2>
                  <p>location: {game?.location}</p>
                  <p>Participants: {countRegisteredUsers(game?.sportName)}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary transform transition-transform hover:scale-105 duration-300">
                      {" "}
                      <Link href={`/bookCompetetion/${game?._id}`}>
                        Register Now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
