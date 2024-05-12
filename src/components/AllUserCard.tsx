"use client";
import axios from "axios";
import Loader from "./Loader";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import img from "@/../public/avatar.png";
import Image from "next/image";

interface User {
  name: string;
  intrestedSport: any;
  instagramLink: any;
  age: any;
  weight: any;
  _id: any;
  imageLink: any;
}
export default function AllUserCard() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [getLoader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [registeredTeams, setRegisteredTeams] = useState<User[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await axios.get("/api/users/getAllUsers");
        setLoader(false);
        setRegisteredTeams(response?.data?.data);
        setUsers(response?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    const inputValue = e.target.value.toLowerCase();
    const updatedFilter = registeredTeams.filter((team) =>
      team?.name?.toLowerCase().includes(inputValue)
    );
    setUsers(updatedFilter);
  };

  const filterBySport = (sport: string) => {
    setSelectedSport(sport);
    if (sport === "All") {
      setUsers(registeredTeams);
    } else {
      const filteredTeams = registeredTeams.filter(
        (player) => player.intrestedSport === sport
      );
      setUsers(filteredTeams);
    }
  };

  if (getLoader) {
    return <Loader />;
  } else {
    return (
      <>
        <h1 className="text-center font-bold text-5xl m-5 text-black">
          All Players
        </h1>
        <div className="flex  w-screen  justify-center p-5">
          <div className="w-full rounded-lg bg-gray-200 p-2 md:w-2/4">
            <div className="flex">
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={handleInputChange}
                className="w-full bg-white pl-2 text-base font-semibold outline-0"
                placeholder="Enter Player Name "
                id=""
              />
            </div>
          </div>
        </div>

        <div className="flex  w-screen  justify-center p-5">
          <dt className="text-sm font-medium text-black px-4">Select Sports</dt>
          <select
            value={selectedSport || "All"}
            onChange={(e) => filterBySport(e.target.value)}
            className="md:w-32 border-4 bg-white pl-2 text-base font-semibold outline-0"
          >
            <option value="All">All Sports</option>
            <option value="Cricket">Cricket</option>
            <option value="Kabadi">kabaddi</option>
            <option value="Arm Wresting">Arm Wrestling</option>
            <option value="Khokho">Kho kho</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-evenly w-full">
          {users.map((user) => (
           
              <div className="card w-96 bg-base-100 shadow-xl mb-4" 
              key={user?._id}
              >
                <figure>
                  {user?.imageLink ?
              <div className="h-40 w-40 rounded-full overflow-hidden">
                     <img
                    src={user?.imageLink}

                    alt="Shoes"
                    className="h-full w-full rounded-full object-cover object-center"
                  /> 
              </div>
                  : <Image
                  src={img}
                  alt="Picture of the user"
                  width={500}
                  height={500}
                  className="h-40 w-40"
                />}
                </figure>
                {/* <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div> */}
                <div className="card-body">
                <h2 className="card-title">
                  {user?.name}
                  <div className="badge badge-secondary">
                    {user?.intrestedSport || "NA"}
                  </div>
                </h2>
                <p>Some details to be added</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    Intrested Sport-{user?.intrestedSport || "not specified"}
                  </div>
                  <div className="badge badge-outline">
                    Age-{user?.age || "not specified"}
                  </div>
                  <div className="badge badge-outline">
                    Weight-{user?.weight || "not specified"}
                  </div>
                  <Link
                    className="text-pink-600"
                    aria-label="Visit TrendyMinds Instagram"
                    href={user?.instagramLink || ""}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <div className="card-actions justify-end">
                <button  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={()=>router.push(`/userStats/${user._id}`)}>Go To Profile</button>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
