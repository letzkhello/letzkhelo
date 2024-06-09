"use client";
import Loader from "@/components/Loader";
import React from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface User {
  participantName: string;
  age: any;
  weight: any;
  userName: string;
  paymentMode: string;
}
interface Session {
  user: {
    name: string;
    email: string;
    image: string;
    sportAccess: any;
  };
}

function Page({ params }: any) {
  const { data: session, status } = useSession();

  const [getLoader, setLoader] = useState(true);
  const [getUsers, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [eventData, setEventData] = useState<User[]>([]);
  const [selectedWeight, setselectedWeight] = useState<string | null>(null);
  useEffect(() => {
   const encodedString = replaceEncodedSpace(params.id);
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await axios.post(
          "https://letzkhelo-backend.onrender.com/admin/get_registered_users_by_sport_name",
          {
            sportName: encodedString,
            email: session?.user?.email,
          },
          {
            headers: {
              Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyODIzNTQ4Nn0.yl383fYp6pTk1a3iy_KrJwGByUVGFV5uz9uL9YsOaRg",
            },
          }
        );
        setLoader(false);
        setEventData(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching registered Users", error);
      }
    };
    if(session){
    fetchData();
      
    }

  }, [session]);

  function replaceEncodedSpace(inputString: string): string {
    return inputString.replace(/%20/g, ' ');
  }

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    const inputValue = e.target.value.toLowerCase();
    const updatedFilter = eventData.filter((player) =>
      player?.userName?.toLowerCase().includes(inputValue)
    );
    setUsers(updatedFilter);
  };

  const filterByWeight = (sport: string) => {
    setselectedWeight(sport);
    if (sport === "All") {
      setUsers(eventData);
    } else {
      const filteredTeams = eventData.filter(
        (player) => player.weight === sport
      );
      setUsers(filteredTeams);
    }
  };
  if (getLoader) {
    return <Loader />;
  } else {
    return (
      <>
        <div className="flex justify-center items-center my-6 container  px-4 pb-6 pt-6 mx-auto  lg:flex md:px-40 border">
          <h1 className="text-xl font-sans  text-black font-bold md:text-2xl lg:text-4xl">
            Letzkhelo Events Details
          </h1>
        </div>

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
          <dt className="text-sm font-medium text-black px-4">Select Weight</dt>
          <select
            value={selectedWeight || "All"}
            onChange={(e) => filterByWeight(e.target.value)}
            className="md:w-32 border-4 bg-white pl-2 text-base font-semibold outline-0"
          >
            <option value="All">All Weight</option>
            <option value="Below 55">Below 55</option>
            <option value="55-65">55-65</option>
            <option value="65-75">65-75</option>
            <option value="Above 75">Above 75</option>
          </select>
        </div>

        <div className="overflow-x-auto mx-4">
          <div className="my-4">
            <h4 className=" font-sans  text-black font-bold md:text-2xl text-sm">
              Total Participants : {getUsers?.length}
            </h4>
          </div>
          <table className="table table-xs">
            <thead>
              <tr>
                <th>S.No </th>
                <th>Participant Name</th>
                <th>Age</th>
                <th>Weight Category</th>
                <th>Payment Mode</th>
              </tr>
            </thead>
            <tbody>
              {getUsers?.map((obj: any, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{obj?.userName}</td>
                    <td>{obj?.age}</td>
                    <td>{obj?.weight}</td>
                    {/* <td></td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Page;
