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

function Page() {
  const [getLoader, setLoader] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [eventData, setEventData] = useState<User[]>([]);
  const [selectedWeight, setselectedWeight] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://letzkhelo-backend.onrender.com/admin/get_registered_users_by_sport_name', 
          {
            sportName: 'Arm Wrestling S4',
            email: 'mohitmongia2005@gmail.com',
          }, 
          {
            headers: {
              Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyODIzNTQ4Nn0.yl383fYp6pTk1a3iy_KrJwGByUVGFV5uz9uL9YsOaRg',
            },
          }
        );
        console.log(response.data, "res");
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching registered users', error);
      }
    }
    

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
            Total Participants : {users?.length}
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
          {users.map((obj:any,index)=>{
              return(
                <tr key={index}>
           
                <th>{index+1}</th>
                <td>{obj?.userName}</td>
                <td>{obj?.age}</td>
                <td>{obj?.weight}</td>
                {/* <td></td> */}
              </tr>
              )
            })}
          
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Page;
