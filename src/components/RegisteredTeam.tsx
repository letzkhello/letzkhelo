"use client";
import axios from "axios";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Team {
  teamName: string;
  captainName: string;
  sportName: string;
  noOfPlayers: number;
  location: string;
  instagramId: string;
}
export default function RegisteredTeam() {
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [registeredTeams, setRegisteredTeams] = useState<Team[]>([]);
  const [searchTeams, setSearchTeams] = useState<Team[]>([]);
  useEffect(() => {
    fetchRegisteredTeams();
  }, []);

  const fetchRegisteredTeams = async () => {
    setLoader(true);
    const res = await axios.get("/api/getAllTeams");
    setLoader(false);
    setRegisteredTeams(res.data);
    setSearchTeams(res.data);
  };

  const filterBySport = (sport: string) => {
    setSelectedSport(sport);
    if (sport === "All") {
      setRegisteredTeams(searchTeams);
    } else {
      const filteredTeams = searchTeams.filter((team) =>
        team.sportName.toLowerCase() === sport.toLowerCase()
      );
      setRegisteredTeams(filteredTeams);
    }
  };


  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    const inputValue = e.target.value.toLowerCase();
    const updatedFilter = searchTeams.filter((team) =>
      team?.location?.toLowerCase().includes(inputValue)
    );
    setRegisteredTeams(updatedFilter);
  };

  if (loader) {
    return <Loader />;
  } else {
    return (
      <>
      
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
                placeholder="Enter location "
                id=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-6 ">
          <h1 className="md:text-4xl text-2xl border-b-2 border-sky-500 font-serif font-bold">
            ALL REGISTERED TEAM
          </h1>
        </div>
        <div className="flex  w-screen  justify-center p-5">
        <dt className="text-sm font-medium text-gray-500 px-4">
                        Select Sports
                      </dt>
          <select
            value={selectedSport || "All"}
            onChange={(e) => filterBySport(e.target.value)}
            className="md:w-32 border-4 bg-white pl-2 text-base font-semibold outline-0"
          >
            <option value="All">All Sports</option>
            <option value="Cricket">Cricket</option>
            <option value="Kabbadi">kabbadi</option>
            <option value="arm wrestling">Arm Wrestling</option>

            <option value="Khokho">Khokho</option>



            
          </select>
        </div>
        <div className="p-4 w-full md:flex md:justify-evenly md:flex-wrap">
          {registeredTeams.map((team: any, id) => {
            return (
              <div
                className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 "
                key={id}
              >
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    TEAM: {team.teamName.toUpperCase()}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Caption: {team.captainName}
                  </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Sport Name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {team.sportName}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Number of Player
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {team.noOfPlayers}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {team.location}
                      </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Instagram
                      </dt>
                      
                      <Link href={team.instagramId}>
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
                  </dl>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
