"use client";
import axios from "axios";
import Loader from "./Loader";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from 'next/image'

interface User {
  name: string;
  intrestedSport: string;

  age: any;
  weight: any;
  _id: any;
}
export default function AllUserCard() {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [getLoader, setLoader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await axios.get("/api/users/getAllUsers");
        setLoader(false);
        console.log(response?.data?.data);
        setUsers(response?.data?.data);
      } catch (error) {
        console.log("error is", error);
      }
    };

    fetchData();
  }, []);


  if (getLoader) {
    return <Loader />;
  } else {
  return (
    <>
      <h1 className="text-center font-bold text-5xl m-5 text-white">All SportsMen</h1>
      <div className="flex flex-wrap justify-evenly w-full">
        {users.map((user) => (
          <div
            key={user?._id}
            className="card w-80 mt-10 -base-100 shadow-xl bg-white"
          >
            <figure>
              <img
                src="data:image/jpeg;base64,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"
                alt="Shoes"
              />
            </figure>
           {/* <figure>
            <Image src={session?.user?.image || ''} alt="Profile-image" height={100} width={100}/>
           </figure> */}

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  }

}
