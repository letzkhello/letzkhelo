"use client";
import React from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Session {
  user: {
    name: string;
    email: string;
    image: string;
    sportAccess: any;
  };
}

interface User {
  email: string;
  name: string;
  intrestedSport: any;
  instagramLink: any;
  age: any;
  weight: any;
  _id: any;
  imageLink: any;
  wallet_balance: any;
  sportAccess: any;
}
export default function EventLists() {
  const { data: session, status } = useSession();
  const [getLoader, setLoader] = useState(true);
  const [sportList, setSportList] = useState<User | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const identifier = session?.user?.email;
        console.log(identifier, "parnjsdnf");
        const response = await axios.get(
          `/api/users/getsingleuser/${identifier}`
        );
        setLoader(false);
        console.log(response.data.data, "prakash");
        setSportList(response.data.data);
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
        <div className="bg-white shadow-md rounded-md p-4 max-w mt-16 mx-44">
          <h2 className="text-xl font-semibold mb-4">
            YOU HAVE ACCESS TO THESE SPORT
          </h2>
          <ul>
            {sportList?.sportAccess?.map((sportName?: any, index?: any) => (
              <li className="flex items-center justify-between py-2 border-b border-gray-300" key={index}>
                <div className="flex items-center">
                  <span className="text-lg font-semibold mr-4">
                    {index + 1}
                  </span>

                  <span className="text-gray-800 font-semibold">
                    {sportName}
                  </span>
                </div>

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  <Link href={`/admin/showEvents/${sportName}`}>Details</Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
