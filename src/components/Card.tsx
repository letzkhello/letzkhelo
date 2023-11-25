"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Shimmer } from "./Shimmer";
import { useRouter } from "next/navigation";


interface Game {
  sportName: string;
  location: string;
  image: string;
  description: string;
  _id: number;
  date: string;
  entryFees: number;
}
export default function Card() {
  const router = useRouter();

  const [getGame, setGame] = useState<Game[]>([]);
  const [getRegisterUser, setRegisterUser] = useState<Game[]>([]);
  const [shimmer, setShimmer] = useState(true);
  const [registered, setRegistered] = useState<Game[]>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    checkUserEmail();
    getGameDetails();
    getUserRegisterDetails();
  }, []);
  useEffect(() => {
    checkUserEmail();
  }, [getRegisterUser, getGame]);

  const getUserRegisterDetails = async () => {
    const res = await axios.get("/api/users/getAllRegisteredUsers");
    setRegisterUser(res.data.data);
    checkUserEmail();
  };

  const getGameDetails = async () => {
    setShimmer(true);
    const res = await axios.get("/api/getAllSports");
    setShimmer(false);
    // setGame(res.data);


  // const sortedGames: Game[] = res.data
  // .filter((game: Game) => game.date) // Filter out items with undefined or falsy date values
  // .sort((a: Game, b: Game) => new Date(b.date).getTime() - new Date(a.date).getTime());
  // setGame(sortedGames);
  //   console.log(sortedGames);


  const sortedGames: Game[] = res.data
  .sort((a: Game, b: Game) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    // Check if either date is invalid (undefined or null)
    if (isNaN(dateA) && isNaN(dateB)) {
      return 0; // Keep the order unchanged if both dates are invalid
    } else if (isNaN(dateA)) {
      return 1; // Place items with invalid date (a) at the end
    } else if (isNaN(dateB)) {
      return -1; // Place items with invalid date (b) at the end
    } else {
      // Sort by date in descending order
      return dateB - dateA;
    }
  });

setGame(sortedGames);
console.log(sortedGames);
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
    return registered?.some((item) => item?.sportName === sportName);
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
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;

      const showDate = `${day}-${month}-${year} at ${displayHours}:${minutes} ${ampm}`;
      return showDate;
    } else {
      return "Coming Soon";
    }
  };

  if (shimmer == true) {
    return <Shimmer />;
  } else {
    return (
      <>
        <div className="flex justify-center items-center my-6 ">
          <h1 className="text-xl  text-white  border-b-4 border-black font-serif font-bold md:text-2xl lg:text-4xl">
            LETZKHELO COMPETETIONS
          </h1>
        </div>
        <div className="w-full flex flex-wrap items-center justify-evenly py-3 px-8">
          {getGame?.map((game: any, id) => {
            return (
              <div key={id}>
                <div className="card w-80 p-2 my-6 glass transition-transform transform hover:scale-105 duration-300 sm:my-12 bg-white">
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
                    <p>Location: 
                      <Link href={`${game?.locationLink}`} target="_blank">
                      <span className="text-blue-600">{game?.location}</span>
                      </Link>
                    </p>
                    <p>Date: {convertDate(game?.date)}</p>
                    <p>Participants: {countRegisteredUsers(game?.sportName)}</p>
                    <p>Entry Fee: {game?.entryFees ? game?.entryFees : "Free"}</p>
                    {/* <p>Location Link: {(game?.locationLink)}</p> */}
                    <div className="card-actions justify-end">
                      <button
                        className="btn bg-black text-white transform transition-transform hover:scale-105 duration-300"
                        onClick={()=>session ? router.push(`/bookCompetetion/${game?._id}`) : router.push(`/login`)}
                        disabled={
                          checkOpenContest(game?.isOpen, game?.sportName) ?
                             true
                            : false
                        }
                        // disabled={true}
                      >
                        {/* <Link
                          href={
                            session ? `/bookCompetetion/${game?._id}` : `/login`
                          }
                        > */}
                          {game?.registrationClosed
                            ? "Registration Closed"
                            : game?.isOpen
                            ? "Coming Soon"
                            : checkAlreadyRegistered(game?.sportName)
                            ? "Already registered"
                            : "Register Now"}
                        {/* </Link> */}
                      </button>
                    </div>
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
