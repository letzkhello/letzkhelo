"use client";
import Loader from "@/components/Loader";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  participantName: string;
  age: any;
  weightCategory: any;
  paymentMode: string;
}

function page() {
  const [getLoader, setLoader] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [eventData, setEventData] = useState<User[]>([]);
  const [selectedWeight, setselectedWeight] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const tokenResponse = await axios.post(
          "https://letzkhelo-backend.onrender.com/token",
          new URLSearchParams({ username: "admin", password: "abc" }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "application/json",
            },
          }
        );
        // Handle successful response
        console.log("Access Token:", tokenResponse.data.access_token);
        const response = await axios.get("https://letzkhelo-backend.onrender.com/token/admin/");
        setEventData(response?.data);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const filterByWeight = (sport: string) => {
    setselectedWeight(sport);
    if (sport === "All") {
      setUsers(eventData);
    } else {
      const filteredTeams = eventData.filter(
        (player) => player.weightCategory === sport
      );
      setUsers(filteredTeams);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center my-6 container  px-4 pb-6 pt-6 mx-auto  lg:flex md:px-40 border">
        <h1 className="text-xl font-sans  text-black font-bold md:text-2xl lg:text-4xl">
          Letzkhelo Events Details
        </h1>
      </div>

      <div className="flex  w-screen  justify-center p-5">
        <dt className="text-sm font-medium text-black px-4">Select Weight</dt>
        <select
          value={selectedWeight || "All"}
          onChange={(e) => filterByWeight(e.target.value)}
          className="md:w-32 border-4 bg-white pl-2 text-base font-semibold outline-0"
        >
          <option value="All">All Weight</option>
          <option value="under 50">Under 50</option>
          <option value="51-55">51-55</option>
          <option value="56-60">56-60</option>
          <option value="61-70">61-70</option>
          <option value="above-70">Above-70</option>
        </select>
      </div>

      <div className="overflow-x-auto mx-4">
        <div className="my-4">
          <h4 className=" font-sans  text-black font-bold md:text-2xl text-sm">
            Total Participants : 20
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default page;
