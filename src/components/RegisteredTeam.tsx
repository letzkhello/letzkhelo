"use client";
import axios from "axios";

import { useEffect, useState } from "react";

export default function RegisteredTeam() {
  const [setRegisterTeam, getRegisterTeam] = useState([]);
  useEffect(() => {
    RegisteredTeam();
  }, []);

  const RegisteredTeam = async () => {
    const res = await axios.get("/api/getAllTeams");
    getRegisterTeam(res.data);
    console.log(setRegisterTeam);
  };

  return (
    <>
      <div className="p-4 w-full md:flex md:justify-evenly md:flex-wrap">
        {setRegisterTeam.map((team: any, id) => {
          return (
            <div
              className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 "
              key={id}
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {team.teamName.toUpperCase()}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {team.captainName}
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
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
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {team.instagramId}
                    </dd>
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
