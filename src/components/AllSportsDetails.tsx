"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Loader from "@/components/Loader";
interface Game {
  sportName: string;
  location: string;
  image: string;
  description: string;
  _id: number;
}
const AllSportsDetails = () => {
  const [getLoader, setLoader] = useState(true);
  const [getGame, setGame] = useState<Game[]>([]);
  useEffect(() => {
    getGameDetails();
  }, []);

  const getGameDetails = async () => {
    setLoader(true);
    const res = await axios.get("/api/getAllSports");
    setLoader(false);
    setGame(res.data);
  };

  if (getLoader) {
    return <Loader />;
  } else {
    return (
      <div className="flex flex-col overflow-x-auto w-full h-[100vh]">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium ">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Serial Number
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Game Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getGame?.length === 0 ? (
                    <tr>
                      <td className="text-center py-4">No data found</td>
                    </tr>
                  ) : (
                    getGame?.map((game: any, index) => (
                      <tr key={game?._id} className="border-b border-slate-300">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {game?.sportName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {game?.location}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {game?.description}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AllSportsDetails;
