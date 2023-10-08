"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Shimmer } from "./Shimmer";
interface Game {
  sportName: string;
  location: string;
  image: string;
  description: string;
  _id: number;
}
export default function Card() {
  const [getGame, setGame] = useState<Game[]>([]);
  const [getRegisterUser, setRegisterUser] = useState<Game[]>([]);
  const [shimmer, setShimmer] = useState(true);
  const [registered, setRegistered] = useState<Game[]>([]);
  const { data: session, status } = useSession();

  console.log(session?.user?.email);

  useEffect(() => {
    checkUserEmail();
    getGameDetails();
    getUserRegisterDetails();
  }, []);
  useEffect(() => {
    checkUserEmail();
  }, [getRegisterUser]);

  const getUserRegisterDetails = async () => {
    const res = await axios.get("/api/users/getAllRegisteredUsers");
    console.log(res.data.data);
    setRegisterUser(res.data.data);
    checkUserEmail();
  };

  const getGameDetails = async () => {
    setShimmer(true);
    const res = await axios.get("/api/getAllSports");
    setShimmer(false);
    console.log(res.data, "praksh");
    setGame(res.data);
  };

  const checkUserEmail = () => {
    const allGameRegsitered = getRegisterUser.filter(
      (user: any) => user?.userEmail === session?.user?.email
    );
    setRegistered(allGameRegsitered);
  };

  const countRegisteredUsers = (sportName: any) => {
    const count = getRegisterUser.filter(
      (user) => user.sportName === sportName
    )?.length;
    return count;
  };

  const checkAlreadyRegistered = (sportName: any) => {
    return registered.some((item) => item.sportName === sportName);
  };

  const checkOpenContest = (checkContest: any, sportName: any) => {
    if (checkContest) {
      return true;
    } else {
      if (checkAlreadyRegistered(sportName)) {
        return true;
      }
    }
    return false;
  };

  const convertDate = (dateString: any) => {
    const date = new Date(dateString);

    if (!isNaN(date.getTime())) {
      const showDate = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
      return showDate;
    } else {
      return "coming Soon";
    }
  };

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
        {/* 
        <div className="p-4 w-full sm:flex sm:justify-center sm:items-center md:flex md:justify-evenly md:flex-wrap"> */}
        <div className="w-full flex flex-wrap items-center justify-evenly py-3 px-8">
          {getGame?.map((game: any, id) => {
            return (
              <div
                key={id}
                className="card w-80 p-2 my-6 glass transition-transform transform hover:scale-105 duration-300 sm:my-12"
              >
                <figure>
                  <Image
                    src={game?.image}
                    alt="img"
                    width="300"
                    height="200"
                    className="rounded-t-lg object-cover h-48"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{game?.sportName}</h2>
                  <p>location: {game?.location}</p>
                  <p>Date: {convertDate(game?.date)}</p>
                  <p>Participants: {countRegisteredUsers(game?.sportName)}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn bg-purple-400 transform transition-transform hover:scale-105 hover:bg-purple-500 duration-300"
                      disabled={
                        checkOpenContest(game?.isOpen, game?.sportName)
                          ? true
                          : false
                      }
                    >
                      <Link href={`/bookCompetetion/${game?._id}`}>
                        {game?.isOpen
                          ? "Coming Soon"
                          : checkAlreadyRegistered(game?.sportName)
                          ? "Already registered"
                          : "Register Now"}
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
