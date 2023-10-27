"use client";
import axios from "axios";
import Loader from "./Loader";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
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
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (getLoader) {
    return <Loader />;
  } else {
    return (
      <>
        <h1 className="text-center font-bold text-5xl m-5 text-white">
          All Players
        </h1>
        <div className="flex flex-wrap justify-evenly w-full">
          {users.map((user) => (
            <div
              key={user?._id}
              className="card w-80 mt-10 -base-100 shadow-xl bg-white"
            >
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
